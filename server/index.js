const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

dotenv.config({ path: './config.env' })
require('./db/conn')

app.use(bodyParser.urlencoded(
  { extended: true }
))

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs")

require('./models/adminSchema');
require('./models/Admission/helpdeskAdmission');
require('./models/Admission/onlineAdmission');
// require('./router/Admission_api/Admission_api');

app.use(require('./router/api'));
// app.use(require('./router/Admission_api/Admission_api'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});