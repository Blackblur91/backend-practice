/* IMPORTS */
const express = require('express')
const path = require('path')

/* app néven elindítjuk az express modolunkat */
const app = express()

/* meghatározzuk a "port" változót */
const port = 3000

/* a localhost:port/ vagy a 127.0.0.1:port/ felkeresésekor elérhetővé tesszük az index.html fájlunkat */
app.get('/', (req, res) => {
  /* elküldjük az adott helyen lévő fájlunkat (az index.html-t) */
  res.sendFile(path.join(__dirname, '/frontend/index.html'))
})

/* a localhost:port/ vagy a 127.0.0.1:port/ felkeresésekor elérhetővé tesszük az index.html fájlunkat */
app.get('/style.css', (req, res) => {
  /* elküldjük az adott helyen lévő fájlunkat(a style.css-t) */
  res.sendFile(path.join(__dirname, '/frontend/static/css/style.css'))
})

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/static/js/script.js'))
})
/* /public címen elérhetővé tesszük a /frontend/static mappánk tartalmát */
app.use('/public', express.static(path.join(__dirname, '/frontend/static')))

app.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, '/data/users.json'))
})

app.get('/users/:userid', (req, res) => {
  res.send(req.params.userid)    /* :utáni rész userid néven jön létre a backenden a request params-ban */
})

fs.readFile( '"text.txt', "utf-8", (err, data) => {  //<-- paraméterek: fájl elérési útja/neve, kódolás, callback függvény, amiben 2 paramétert várunk: error object
  if( err) {

  }
})

/* elkezdi figyelni az adott portot a számítógépen (localhost vagy 127.0.0.1) */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})