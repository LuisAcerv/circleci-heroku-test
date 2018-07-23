const express = require('express');
const cors = require('cors');

var app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!!');
});

const PORT = 5000;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port: ${PORT}.`);
});
