exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const { text, targetLang } = JSON.parse(event.body);
    if (!text || !targetLang) {
      return { statusCode: 400, body: 'Missing text or targetLang' };
    }

    const langNames = { nl: 'Dutch', fr: 'French', en: 'English', de: 'German' };
    const tgtName = langNames[targetLang] || targetLang;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        messages: [{
          role: 'user',
          content: `Translate this guest review to ${tgtName}. Reply with ONLY the translation, nothing else:\n\n${text}`
        }]
      })
    });

    const data = await response.json();
    const translated = data.content?.[0]?.text;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ translated })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
