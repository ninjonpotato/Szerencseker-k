const express = require('express');
const path = require('path');
const app = express();

// Statikus fájlok kiszolgálása
app.use(express.static(path.join(__dirname)));

// Alapértelmezett útvonal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Szerver indítása
const PORT = 5600;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});