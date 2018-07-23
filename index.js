const express = require('express');
const cors = require('cors');

var app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

const PORT = 5000;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port: ${PORT}.`);
});
