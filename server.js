const express = require('express')
const Datastore = require('nedb')
const app = express()
app.listen(80, () => console.log('listening on port'))
app.use(express.static('./'))
app.use(express.json())
const database = new Datastore('database.db')
database.loadDatabase()

app.get('/Comments', (req, res) => {
  database.find({}, (err, data) => {
    res.json(data)
  })
})
app.post('/Post', (req, res) => {
  console.log(req)
  database.insert({
    name: 'Bruno',
    comment: req.body.content
  })
  res.json({status: 'success'})
})