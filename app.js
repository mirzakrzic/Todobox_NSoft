let express = require('express');

let app = express();
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let routes = require('./api/routes/taskRoutes');
routes(app);

let port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`)); 