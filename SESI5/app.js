const {response} = require("express")
const express = require("express")
const port = 3000
const app = express()


// let path = _dirname.split('/');
// path.pop()
// path = path.join('/')
// console.log(path)

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use((req, res, next) => {
    console.log('Masuk Middleware buatan sendiri');
    next();
})

// express.static("public")

app.get('/gambar', (req, res) => {
    res.sendFile('./public/beach.jpg', {root: __dirname})
})
// route pertama
app.get('/mid', (req, res, next) => {
    console.log("Middleware 1")
    next()
}, (req, res) => {
    console.log(('Endpoint handler'));
    res.sendFile('./public/index.html', {root: __dirname})
})
    
app.get('/about', (req, res) => {
    // res.send('ini route baru')
    res.sendFile('./landing-page/about.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
    // res.send('ini route baru')
    res.sendFile('./landing-page/contact.html', {root: __dirname})
})

// biar bisa ditrima handler
app.get('/res-sebelum-next', (req, res, next) => {
    next()
},  (req, res) => {
    console.log('Masuk Endpoint handler/mid terakhir');
    res.send("ini res terakhir next")
}) 

// 2
app.listen(port, () => {
    console.log('Listening on port 3000')
})

// autetikasi => adalah pengecekan apakah user sudah terdafftar di server kita
/**
 * udah register?
 * ada di DB?
 * 
 * sukses=> udh bisa msuk ke profil
 * gagal=> biasanya ada eror karna dia gak  unautgenticated
 * 
 * Middlare awal (Stop Server)
 * 
 * 
 * -Autentication membedakan route yang terbuka
 * Definisi Route
 * GET /
 * app.use(authentication)
 * GET / profl
 * 
 * Middleware error handler
 */