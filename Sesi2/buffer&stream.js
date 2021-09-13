// yang bisa mengatur file system
// Pro tip : require harus di taro di paling atas semua

const fs = require('fs')

// Buffer itu penampung dari kosong sampe diisi sama data, ketika penuh baru di transfer

const buffer = Buffer.alloc(10)

console.log(buffer.write('hayyyyy saya yolann'))
console.log(buffer.toString('utf-8'))


// Streams itu pengisian buffer sampai buffer pertama 
let readableStram = fs.createReadStream('./input.txt')
 

readableStram.on('data', function(data) {
    console.log(data)
})


