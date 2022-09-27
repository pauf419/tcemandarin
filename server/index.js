require('dotenv').config({ path: `.${process.env.NODE_ENV}.env` })
const express = require('express')
const cors = require('cors')
const path = require('path')
const routes = require('./routes')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middlewares/error.middleware')
const fileUpload = require('express-fileupload')

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL
const app = express()

app.use('/static', express.static(path.join(__dirname, '/static')))
app.use(fileUpload())
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}))
app.use('/api', routes)
app.use(errorMiddleware)

if(process.env.NODE_ENV === 'prod') {
    app.use('/', express.static(path.join(__dirname, '..', 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
    })
}

async function bootstrap() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
  } catch(e) {
    console.log(e)
  }
}

bootstrap()
