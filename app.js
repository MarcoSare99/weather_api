import express from 'express';
import 'dotenv/config'

const app = express();
const apiKey = process.env.APIKEY;

// Ruta de ejemplo
app.get('/:lat/:lon', async (req, res) => {
    const lat = req.params.lat;
    const lon = req.params.lon
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=es&units=metric`);
    const data = await response.json()
    res.send(data)
});


app.get('/5day3hour/:lat/:lon', async (req, res) => {
    const lat = req.params.lat;
    const lon = req.params.lon
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=es&units=metric`);
    const data = await response.json()
    res.send(data)
});

// Escuchando en el puerto 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('La aplicación está funcionando en http://localhost:3000');
});