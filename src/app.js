const express = require('express');
const routes = require('./routes')

const app = express();
app.use(express.json());

app.use('/v1', routes);

const port = 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});