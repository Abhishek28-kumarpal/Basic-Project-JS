require('dotenv').config()

const express = require('express');
 
const app = express()
const port = 3000

app.get('/', (req, res) => {  // callbacks 
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{ // callbacks 
  res.send ('2824HG@gmail.co.in')
})

app.get('/login',(req, res)=>{
    res.send('<h1>plese login at abhishek.com <h1/>')
})

app.get ('/youtube',(req,res)=>{
 res.send('<h2>youtube.com<h2/>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})