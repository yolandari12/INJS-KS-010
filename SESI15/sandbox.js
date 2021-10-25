
// setTimeout(() => {
//   for(let i = 0; i < 10; i++) {
//     // Apakah i nilainya genap?
//     debugger
//     // console.log({ i })
//     if(i % 2 === 0) {
//       console.log("Nilai i:", i)
//     } else {
//       consol.log("Nilai i:", i)
//     }
//   }
// }, 1000)

console.error("ini proses synchronous")


function satu () {
  dua()
}

function dua() {
  tiga()
}

function tiga() {
  throw new Error("Ini pesan error")
}

for(let i = 0; i < 1000000; i++) {
  satu()
  axios()
}


/*
4 jenis Error:

1. Lokasi file & line number
2. Posisi akurat di line tersebut
3. Error Message
4. Stack
*/