const express = require('express')
const Datastore = require('nedb')
const app = express()
app.listen(80, () => console.log('listening on port'))
app.use('/Home', express.static('./Feild'))
app.use('/', express.static('./Menu'))
app.use(express.json())
const database = new Datastore('database.db')
database.loadDatabase()

app.get('/Comments', (req, res) => {
  database.find({}).sort({postedAt: -1}).exec((err, data)=>{

    res.json(data)

  })
})
app.post('/Post', (req, res) => {
  database.insert({
    name: req.body.username,
    comment: req.body.content,
    postedAt: new Date(),
    hours: new Date().getHours(),
    min: new Date().getMinutes(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate()
  })
  res.json({status: 'success'})
})
