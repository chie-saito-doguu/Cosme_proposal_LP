import { useEffect, useRef } from 'react';

// 3段階のスクロール追跡コンポーネント
const ScrollTracking = () => {
    const trackedSegments = useRef<Set<number>>(new Set<number>());

    useEffect(() => {
        // 3段階（33%, 66%, 100%）
        const TOTAL_SEGMENTS = 3;

        // スクロール深度を計算（0-100）
        const getScrollDepth = (): number => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight <= 0) return 100;
            return Math.min(100, Math.round((scrollTop / scrollHeight) * 100));
        };

        // スクロールイベントハンドラー（throttle付き）
        let timeoutId: number | null = null;
        const handleScroll = () => {
            if (timeoutId) return;

            timeoutId = setTimeout(() => {
                timeoutId = null;
                const scrollDepth = getScrollDepth();

                // 現在のセグメントを計算（0-2）
                const currentSegment = Math.min(
                    TOTAL_SEGMENTS - 1,
                    Math.floor((scrollDepth / 100) * TOTAL_SEGMENTS)
                );

                // まだ追跡していないセグメントの場合、イベントを送信
                if (!trackedSegments.current.has(currentSegment)) {
                    trackedSegments.current.add(currentSegment);

                    // gtagでスクロールイベントを送信
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'scroll', {
                            'percent_scrolled': Math.round(((currentSegment + 1) / TOTAL_SEGMENTS) * 100),
                            'segment_index': currentSegment,
                            'total_segments': TOTAL_SEGMENTS
                        });
                    }
                }
            }, 100); // 100ms throttle
        };

        // スクロールイベントを追加
        window.addEventListener('scroll', handleScroll, { passive: true });

        // 初期ロード時のスクロール位置をチェック
        handleScroll();

        // クリーンアップ
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return null; // 表示はなし
};

export default ScrollTracking;
