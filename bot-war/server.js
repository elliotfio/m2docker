const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Gestion des CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    next();
});

// Route de test
app.get('/', (req, res) => {
    res.json({ status: 'ok' });
});

// Route principale du bot
app.get('/action', (req, res) => {
    // Format exact attendu par le jeu
    const response = {
        move: "UP",
        action: "ATTACK"
    };
    res.json(response);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Bot en écoute sur le port ${port}`);
}); 