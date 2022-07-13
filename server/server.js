import express from 'express';
import bodyParser from 'body-parser';
import questionRoute from './questions.js'
import cors from 'cors' ;

const app =express();
app.use(cors());
app.use(bodyParser.json());
app.use('/',questionRoute)



const PORT =process.env.PORT||8080; 
app.listen(PORT,()=>{
    console.log('server runing on port'+PORT);
}) 
  