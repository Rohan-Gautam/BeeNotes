import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
    console.log('GET / route hit');
    res.send('Beenotes Backend is running');
});

const PORT = process.env.PORT || 5200;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} http://localhost:${PORT}`);
});
