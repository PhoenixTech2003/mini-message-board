const path = require('node:path')
const express = require('express')
const indexRouter = require('./routes/indexRoute')
require("dotenv").config();
const app = express()
const assestPath = path.join(__dirname,"public")
const PORT = process.env.PORT || 9000

app.set('views', path.join(__dirname,"views") )
app.set('view engine', "ejs")
app.use(express.static(assestPath))
app.use(express.urlencoded({ extended: true }));


app.use('/',indexRouter.indexRouter)



app.listen(PORT, ()=> console.log(`This express server has started at the following address: http://localhost:${PORT}`))

