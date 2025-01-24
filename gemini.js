const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Załaduj zmienne środowiskowe z .env

const app = express();
app.use(bodyParser.json());

function simulateGeminiResponse(userMessage) {
    const responses = [
        `Symulowana odpowiedź na: ${userMessage}`,
        `Inna symulowana odpowiedź na: ${userMessage}`,
        `Jeszcze inna odpowiedź na: ${userMessage}`
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

app.post('/api/gemini', async (req, res) => {
    try {
        const userMessage = req.body.message;
        if (!userMessage) {
            return res.status(400).json({ error: "Brak wiadomości." });
        }

        const response = simulateGeminiResponse(userMessage);

        res.json({ response: response });
    } catch (error) {
        console.error("Błąd serwera:", error);
        res.status(500).json({ error: "Błąd serwera." });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serwer działa na porcie ${port}`));