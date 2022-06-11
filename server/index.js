const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

dotenv.config({path:'./config.env'})
require('./db/conn')


app.use(cors());
app.use(express.json());

require('./models/adminSchema');
app.use(require('./router/api'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});