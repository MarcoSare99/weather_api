import express from 'express';
import 'dotenv/config'

const app = express();
const apiKey = process.env.APIKEY;
app.use(express.json());
// Ruta de ejemplo
app.get('/', async (req, res) => {
    res.send("WEATHER API")
});

app.post('/', async (req, res) => {
    const lat = req.body.lat;
    const lon = req.body.lon
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=es&units=metric`);
    const data = await response.json()
    res.send(data)
});


app.post('/5day3hour', async (req, res) => {
    const lat = req.body.lat;
    const lon = req.body.lon
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=es&units=metric`);
    const data = await response.json()
    res.send(data)
});

// Escuchando en el puerto 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('La aplicación está funcionando en http://localhost:3000');
});