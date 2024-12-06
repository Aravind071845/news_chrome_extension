import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import env from 'dotenv';

const app = express();
app.use(cors());
env.config();

const apiKey = process.env.NEWS_API_KEY;
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

app.get('/news', async (req, res) => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching news' });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
