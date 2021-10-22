let orang = [
    {name: "Yusuf",noAbsen : "1"},
    {name: "Wahyu",noAbsen : "2"},
    {name: "Hafid",noAbsen : "3"},
    {name: "Raka",noAbsen : "4"},
    {name: "Rizky",noAbsen : "5"},
    {name: "Yolan",noAbsen : "6"}
]

// console.log(orang)

const genap = orang.filter(data => data.noAbsen % 2 == 0);
const ganjil = orang.filter(data => data.noAbsen % 2 == 1);

console.log("==============ganjil==============")
console.log(ganjil);
console.log("==============genap==============")
console.log(genap);