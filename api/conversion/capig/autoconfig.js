// Meta CAPI Gateway Auto-Config Endpoint
export default async function handler(req, res) {
  // GETリクエストのみ許可
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Meta CAPI Gateway Setup Assistantが期待するレスポンス
    const response = {
      status: 'ok',
      version: '1.0',
      gateway: {
        name: 'Cosme AI CAPI Gateway',
        platform: 'vercel',
        capabilities: [
          'page_view',
          'purchase',
          'lead',
          'complete_registration',
          'add_to_cart',
          'initiate_checkout'
        ]
      },
      pixel_id: '2203423416850955',
      endpoint: `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers['host']}/api/conversion`
    };

    return res.status(200).json(response);

  } catch (error) {
    console.error('CAPI Gateway autoconfig error:', error);
    return res.status(500).json({ error: 'Configuration failed' });
  }
}
