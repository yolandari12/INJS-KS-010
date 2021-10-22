const express = require('express')
const 
const port = 3000
const app = express()

app.set("view engine", "pug")

// query => cari data berdasarkan query? gah harus nama bisa yang lain
app.get('/', (req,res) => {
    // res.render("index.pug", {
    //     nama: "Yolan",
    //     npm: "INJS-KS-010",
    //     alamat: "Lampung"
    // })
    let inputFirst = req.query.first
    let inputLast = req.query.last
    let find = data.find((el) => {
        return inputFirst === el.first_name.toLowerCase()
    })
    res.send(req.query)
})

// params => cari data berdasarkan id?
app.get('/:id', (req. res)  => { = 
    
})

// body => nambah / update data

// query (pug)
app.get






app.listen(port, () =>{
    console.log('Listening on Port: 3000')
})

/**
 * Input Express Server
 * 
 * .......... umumnya dipakai di method:
 * req.body =>  POST, PUT, PATCH => postman/insomnia/REST Client
 * req.query => GET => URL ? key=value
 * req.params => GET, POST, PUT, PATCH, DELETE => Endpoint handler:Variabel
 */
