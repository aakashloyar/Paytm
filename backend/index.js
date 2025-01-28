const express = require('express')
const app = express()
const port = 3000
const mongoose=require('mongoose')
const rootRouter=require('./routes/index.js')
const cors=require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors());

const mongoUri=process.env.MONGO_URI;
try{
    mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
} catch(err){
    console.log('Erro connecting to MongoDB'+err);
}




app.use("api/vi",rootRouter);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

