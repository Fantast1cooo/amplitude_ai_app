// netlify/functions/generate.js

// Мы не используем Express, поэтому код намного проще

exports.handler = async (event) => {
    // Netlify требует, чтобы POST-запросы обрабатывались только методом POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { systemPrompt, userPrompt } = JSON.parse(event.body);
        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            return { statusCode: 500, body: JSON.stringify({ error: 'API ключ не настроен на сервере.' }) };
        }

        const models = ['llama-3.3-70b-versatile', 'llama3-8b-8192', 'gemma2-9b-it'];
        let htmlResult = '';
        let success = false;

        for (const model of models) {
            try {
                const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({
                        model: model,
                        messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }],
                    }),
                });

                if (groqResponse.ok) {
                    const data = await groqResponse.json();
                    htmlResult = data.choices[0].message.content;
                    success = true;
                    break;
                }
            } catch (e) {
                console.warn(`Модель ${model} не ответила, пробую следующую...`);
            }
        }
        
        if (!success) {
            throw new Error('Все серверы Groq в данный момент перегружены.');
        }

        // Возвращаем успешный ответ в формате, который требует Netlify
        return {
            statusCode: 200,
            body: JSON.stringify({ content: htmlResult }),
        };

    } catch (error) {
        console.error('Ошибка в серверной функции:', error);
        // Возвращаем ошибку в формате, который требует Netlify
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};