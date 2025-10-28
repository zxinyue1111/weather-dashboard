const express = require('express');
const app = express();

//use port specified by cloud host, default to 3000 locally
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
