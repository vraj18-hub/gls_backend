let express = require('express');
let app = express();
let port = 9000;

let cors = require('cors');

app.use(cors());

app.get('/ping', (req, res) => {
    res.send({
        message: "Hello, GLS"
    });
});

app.listen(port, () => {
    console.log("Server is running on http://localhost:9000")
});