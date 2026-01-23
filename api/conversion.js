// Vercel Serverless Function
export default async function handler(req, res) {
  // POSTのみ許可
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { eventName, eventData = {} } = req.body;

    // 環境変数から取得
    const pixelId = '2203423416850955';
    const accessToken = 'EAAR5W3B2U1oBQkuUgWjKYastY5Pr6elRNc3QNipMpbiP4mDvr8cDx4ljDLgohuJUdAjtChnO2JFpS4McTie7xrtSJhtZChCtYzHqPwiXOyCTzE64DnCNin5ZBp6df20ZAh4SAJEQnUDFLtnfTmY5AZCGycPO3c89hAT502qKlEMxkUXvV4hqHIjK6sQMmyv79gZDZD';

    if (!pixelId || !accessToken) {
      return res.status(500).json({ error: 'Missing credentials' });
    }

    // Meta Conversion API エンドポイント
    const url = `https://graph.facebook.com/v19.0/${pixelId}/events`;

    // クライアント情報を取得
    const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || undefined;
    const userAgent = req.headers['user-agent'] || undefined;
    const referer = req.headers['referer'] || req.headers['referer'] || 'https://cosme-proposal.com';

    // イベントデータの構築
    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: eventData.eventSourceUrl || referer,
          user_data: {
            client_ip_address: ip,
            client_user_agent: userAgent,
            ...eventData.userData
          },
          custom_data: eventData.customData || {}
        }
      ],
      access_token: accessToken
    };

    // Metaに送信
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Meta Conversion API error:', result);
      return res.status(response.status).json({ error: result });
    }

    return res.status(200).json({ success: true, result });

  } catch (error) {
    console.error('Conversion API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
