const express = require("express")
const app = express()
const port = 3000
const data = require('./data.json')
const fs =  require('fs')

app.set('view engine', 'ejs')
app.use(express.urlencoded( {extended: true} )) //agar express mau menerima inputan

// query -> cari data berdasarkan query -> ga harus nama, bisa yang lain
app.get('/', (req, res) => {
    // jika ada query / tidak
    if(req.query.first === undefined) {
      res.render('index.ejs', { data: data })
    } else {
      let inputFirst = req.query.first
      let find = data.find((el) => {
        return (inputFirst.toLowerCase() === el.first_name.toLowerCase())
      })
      res.render('index.ejs', { data: [find] })
    }
  })
  
app.get('/:id', (req, res) => {
    let find = data.find(item => {
      return item.id === Number(req.params.id)
    })
    res.send(find)
  })

app.post('/create', (req, res) => {
    console.log(req.body)
    let obj = {
      id: data.length,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      avatar: req.body.avatar,
    }
    data.push(obj)
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf-8')
    res.redirect('/pindah-kesini') // GET
  })

app.listen(port, () => {
    console.log('Listening on port 3000');
})