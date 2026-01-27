/**
 * CloudinaryのFetch機能を使って画像を最適化するヘルパー関数
 * @param url - 元の画像URL（相対パスまたは絶対パス）
 * @returns Cloudinary経由の最適化された画像URL
 */
export const getOptimizedImage = (url: string): string => {
  // 開発環境ではそのまま返す
  if (process.env.NODE_ENV !== 'production') {
    return url;
  }

  // 本番環境のみCloudinaryを使用
  // 相対パスの場合は本番ドメインを補完
  let fullUrl = url;
  if (url.startsWith('/')) {
    fullUrl = `https://cosme-proposal-lp.com${url}`;
  }

  // Cloudinaryのプレフィックスを付与
  const cloudinaryPrefix = 'https://res.cloudinary.com/dz06mbtec/image/fetch/f_auto,q_auto/';
  return `${cloudinaryPrefix}${encodeURIComponent(fullUrl)}`;
};
