/**
 * Meta Conversion API へイベントを送信するヘルパー関数
 */

interface ConversionEventData {
  eventSourceUrl?: string;
  userData?: {
    email?: string;
    phone?: string;
    [key: string]: any;
  };
  customData?: {
    value?: number;
    currency?: string;
    content_name?: string;
    content_type?: string;
    [key: string]: any;
  };
}

/**
 * Conversion API にイベントを送信
 */
export async function sendConversionEvent(
  eventName: string,
  eventData: ConversionEventData = {}
): Promise<{ success: boolean; error?: any }> {
  try {
    const API_URL = '/api/conversion';

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventData,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Conversion API error:', result);
      return { success: false, error: result };
    }

    return { success: true };
  } catch (error) {
    console.error('Conversion API fetch error:', error);
    return { success: false, error };
  }
}

/**
 * よく使うイベントのヘルパー
 */
export const MetaEvents = {
  // ページビュー（Pixelで自動送信されるが、CAPIでも送信）
  PageView: (data?: ConversionEventData) =>
    sendConversionEvent('PageView', data),

  // コンバージョン（購入など）
  Purchase: (value: number, currency: string = 'USD', data?: ConversionEventData) =>
    sendConversionEvent('Purchase', {
      ...data,
      customData: {
        ...data?.customData,
        value,
        currency,
      },
    }),

  // リード（問い合わせなど）
  Lead: (data?: ConversionEventData) =>
    sendConversionEvent('Lead', data),

  // サインアップ
  CompleteRegistration: (data?: ConversionEventData) =>
    sendConversionEvent('CompleteRegistration', data),

  // カート追加
  AddToCart: (data?: ConversionEventData) =>
    sendConversionEvent('AddToCart', data),

  // ビギン結Checkout
  InitiateCheckout: (data?: ConversionEventData) =>
    sendConversionEvent('InitiateCheckout', data),
};
