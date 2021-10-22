// axios itu package

const axios = require('axios')


// command - npm install <package>
// Node Package manajer
// console.log(axios)


// promise itu berhasil/gagal

let gojek = new Promise(function (resolve, reject) {
    let random = (Math.round(Math.random))
    if(random === 1) {
        resolve('Nasi Goreng')
    } else {
        reject('Ayam bakar')
    }
    // resolve('Ditepati')
})

gojek
.then((data) => {
    console.log('Masuk then')
    console.log(data)
})
.catch((err) => {
    console.log('Masuk catch')
    console.log(Error)
})


let hasil = axios({
    method: 'get',
    url: 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json'
})
.then((Response) => {
    console.log(Response.data)
})
.catch(err => {
    console.log(err)
})