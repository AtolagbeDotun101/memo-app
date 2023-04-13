const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


const app = express()
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>app.listen(PORT, ()=>
    console.log(`Server running on http://localhost:${PORT}`))).catch((err) => console.log(err));


//     const start = async()=>{
//   try {
//       await mongoose.connect(process.env.CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true });
//       console.log('Connected to database');
//       app.listen(PORT, ()=>console.log(`Server running on http://localhost${PORT}`));
//     } catch (err) {
//       console.log(err);
//     }
// }
//    start()