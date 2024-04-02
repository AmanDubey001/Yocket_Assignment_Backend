const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

// POST API endpoint
app.post('/api/post', (req, res) => {
    const payload = req.body;
    console.log(payload, "REQUEST")
    let result = false;
    const cities = [{
        id: 0,
        name: "Yapkashnagar",
        distance: "60",
    },
    {
        id: 1,
        name: "Lihaspur",
        distance: "50",
    },
    {
        id: 2,
        name: "Narmis City",
        distance: "40",
    },
    {
        id: 3,
        name: "Shekharvati",
        distance: "30",
    },
    {
        id: 4,
        name: "Nuravgram",
        distance: "20",
    },
    ]
    const thiefCity = Math.floor(Math.random() * 5);
    const copComing = payload.find(obj => obj.city === cities[thiefCity].name);
    if (copComing) {
        const range = parseInt(copComing.range)
        const distance = parseInt(cities[thiefCity].distance)
        if (range >= distance * 2) result = true;
    }
    res.json({ success: result });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


