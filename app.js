let express = require('express');

let app = express();
app.use(express.json());

let routes = require('./api/routes/taskRoutes');
routes(app);

let port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`)); 