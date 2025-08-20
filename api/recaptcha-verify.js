export default async function handler(req, res) {
  if (req.method === 'OPTIONS') { // CORS preflight
    res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { token, expectedAction } = req.body || {};
    if (!token) {
      res.status(400).json({ success: false, error: 'Missing token' });
      return;
    }
    const apiKey = process.env.RECAPTCHA_API_KEY;   // you already have this
    const siteKey = process.env.RECAPTCHA_SITE_KEY; // your site key

    const body = {
      event: {
        token,
        expectedAction: expectedAction || 'submit',
        siteKey
      }
    };

    const r = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${process.env.RECAPTCHA_PROJECT_ID}/assessments?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }
    );

    const data = await r.json();

    // Basic pass/fail: valid token and score >= 0.5 if present
    const valid = data?.tokenProperties?.valid === true;
    const score = typeof data?.riskAnalysis?.score === 'number' ? data.riskAnalysis.score : null;
    if (!valid || (score !== null && score < 0.5)) {
      res.status(403).json({ success: false, details: data });
      return;
    }

    res.status(200).json({ success: true, details: data });
  } catch (e) {
    res.status(500).json({ success: false, error: String(e) });
  }
}
