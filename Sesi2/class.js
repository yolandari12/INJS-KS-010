const EventEmitter = require("events")

// console.log(EventEmitter)

// OOP -> Object Oriented Programming
// class -> Object yanhg punya method sendiri, karakteristik OOP
//  javascript itu OOP nya tidak kuat karna sebenrnya tidak ada
let yolan = {
    name: 'Yolandari',
    umur: 21,
    jurusan: 'Sistem Informasi',
    hobi: 'Nonton'
}

let lestari = {
    name: 'Lestari ',
    umur: 21,
    jurusan: 'Sistem Informasi',
    hobi: 'Treveling'
}

class Orang {
    // Method
    // Privat, public,proteceted properti
    constructor(name, umur, jurusan, hobi) {
        // console.log("Bikin Orang Baru")
        this.name = name
        this.age = umur
        this.mager = jurusan
        this.hobby = hobi
    }
}
// class instance - ditandai dengan new Class()

// console.log(yolan)
let lili = new Orang('lili, 21, Sistem Informasi, Nonton')
console.log(lili)
console.log(lili.name)

let wahyu = new Orang('wahyu, 21, Sistem Informasi, Traveling')
console.log(wahyu)

// Bikin klas baru tapi propertinya tidak lewat constracture? prtyan
