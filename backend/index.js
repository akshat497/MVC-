const connection = require('./connection');
const express = require('express')
const cors = require('cors');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const routes = require('./routes');
app.use(express.json());
// System Middlewares
app.use(cors()); //


app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("hello server");
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });
// const upload = multer({ storage: storage });
app.listen(process.env.APP_PORT, () => {
    console.log('Server started at ' + process.env.APP_PORT);
  });
  