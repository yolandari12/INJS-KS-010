let orang = [
    { name: "Yusuf",noAbsen : "1"},
    { name: "Wahyu",noAbsen : "2" },
    { name: "Hafid" ,noAbsen : "3"},
    { name: "Raka" ,noAbsen : "4"},
    { name: "Rizky",noAbsen : "5" },
    { name: "Yolan" ,noAbsen : "6"},
  ]

  // const descending = orang.sort(function(atas, bawah){return bawah.noAbsen-atas.noAbsen});
  // console.log(descending)

var result = orang.reduce(function(author, val, index) {
    var comma = orang.length ? "," : "";
    
    return author + val.name + comma ;
  }, '');

    console.log(result);