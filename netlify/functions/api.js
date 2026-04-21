// netlify/functions/api.js

const express = require('express');
const serverless = require('serverless-http'); // <-- Новая библиотека
const cors = require('cors');
require('dotenv').config();

const app = express();
const router = express.Router(); // <-- Используем Express Router

app.use(cors());
app.use(express.json());

// Вся логика API теперь внутри router.post
// Путь теперь '/generate', а не '/api/generate'
router.post('/generate', async (req, res) => {
    const { systemPrompt, userPrompt } = req.body;
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API ключ не настроен на сервере.' });
    }

    try {
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

        if (success) {
            res.json({ content: htmlResult });
        } else {
            throw new Error('Все серверы Groq в данный момент перегружены.');
        }

    } catch (error) {
        console.error('Ошибка при запросе к Groq API:', error);
        res.status(500).json({ error: error.message });
    }
});

// Говорим приложению использовать роутер по пути /.netlify/functions/api
app.use('/.netlify/functions/api', router);

// Экспортируем обернутое приложение для Netlify
module.exports.handler = serverless(app);