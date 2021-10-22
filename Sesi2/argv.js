// argv adalah argumenn value . input yang bisa kita kasih saat jalankan file js kita
// proses argv adalh sebuah array

// console.log('Ini argv')
console.log(process.argv)


console.log('Hasil Penjumlahan')
console.log(Number(process.argv[2]) + Number(process.argv[3]))

