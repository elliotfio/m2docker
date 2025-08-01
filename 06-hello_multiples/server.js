const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'mydb',
    password: 'root',
    port: 5432,
});

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT nom FROM personnes');
        res.json(result.rows);
    } catch (err) {
        console.error('Erreur de base de données:', err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});