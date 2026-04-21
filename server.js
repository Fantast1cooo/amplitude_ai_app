// Импортируем необходимые библиотеки
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Загружаем переменные из .env файла

// Создаем приложение Express
const app = express();
const PORT = process.env.PORT || 3000;

// Настраиваем middleware
app.use(cors()); // Разрешает запросы с других доменов
app.use(express.json()); // Позволяет парсить JSON-тела запросов
app.use(express.static('public')); // Обслуживает статичные файлы из папки 'public'

// Главный API эндпоинт для генерации программы
app.post('/api/generate', async (req, res) => {
    // Получаем данные от клиента (из script.js)
    const { systemPrompt, userPrompt } = req.body;
    const apiKey = process.env.GROQ_API_KEY;

    // Проверка, что ключ есть на сервере
    if (!apiKey) {
        return res.status(500).json({ error: 'API ключ не настроен на сервере.' });
    }

    try {
        const models = ['llama-3.3-70b-versatile', 'llama3-8b-8192', 'gemma2-9b-it'];
        let htmlResult = '';
        let success = false;
        
        // Пытаемся получить ответ от одной из моделей Groq
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
                    break; // Если успешно, выходим из цикла
                }
            } catch (e) {
                console.warn(`Модель ${model} не ответила, пробую следующую...`);
            }
        }

        if (success) {
            // Отправляем успешный результат обратно клиенту
            res.json({ content: htmlResult });
        } else {
            // Если ни одна модель не ответила
            throw new Error('Все серверы Groq в данный момент перегружены.');
        }

    } catch (error) {
        console.error('Ошибка при запросе к Groq API:', error);
        res.status(500).json({ error: error.message });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер Amplitude запущен на http://localhost:${PORT}`);
});