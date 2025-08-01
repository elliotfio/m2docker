const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route corrigée : maintenant elle renvoie une réponse
app.get('/', (req, res) => {
    res.send('Hello World!');  // Ajout de la réponse
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 