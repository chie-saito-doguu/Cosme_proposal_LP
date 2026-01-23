// Meta CAPI Gateway Auto-Config Endpoint
export default async function handler(req, res) {
  // GETリクエストのみ許可
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // リクエストヘッダーからMetaのトークンを取得
    const metaToken = req.query.token || req.headers['x-meta-token'];

    // MetaのCAPI Gateway Setup Assistantが期待するレスポンス
    const response = {
      success: true,
      pixel_id: '2203423416850955',
      gateway: {
        id: 'cosme-ai-capi-gateway',
        name: 'Cosme AI CAPI Gateway',
        version: '1.0.0',
        platform: 'vercel',
        endpoint: `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers['host']}/api/conversion`,
        status: 'active',
        capabilities: {
          events: [
            'PageView',
            'Purchase',
            'Lead',
            'CompleteRegistration',
            'AddToCart',
            'InitiateCheckout',
            'CustomEvent'
          ],
          features: [
            'server_side_tracking',
            'batch_events',
            'event_deduplication'
          ]
        },
        config: {
          access_token_configured: true,
          test_event_code: req.query.test_event_code || null
        }
      },
      timestamp: new Date().toISOString()
    };

    // CORSヘッダーを追加
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return res.status(200).json(response);

  } catch (error) {
    console.error('CAPI Gateway autoconfig error:', error);
    return res.status(500).json({
      success: false,
      error: 'Configuration failed',
      message: error.message
    });
  }
}
