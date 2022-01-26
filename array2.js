// Manipulasi Array

// 1. Menambah isi array
var arry = [];

arry[0] = "ahmad";
arry[1] = "romadhani";
console.log(arry);

// 2. Menghapus isi array
var array = ["ahmad", "roma", "dhani" ];
array [2] = undefined;
console.log(array);

// 3. Menampilkan isi array (Array's Methode)
// .lenght
var arr = ["siti", "aisyah", "nur", "ramadan" ];
for (var i = 0; i < arr.length; i++){
    console.log("Mahasaiswa ke -"+ i + " : " + arr[i])
}

// A.join
var arrjo = ["dhiafakhry","ramadaan","adiansyah"]
console.log(arrjo.join('-'));

// B.push & pop
var arrps = ["dhiafakhry","ramadaan","adiansyah"]
arrps.push('putra',"muhammad");
console.log(arrps.join('-'));


var arrpo = ["dhiafakhry","ramadaan","adiansyah"]
arrpo.pop();
console.log(arrpo.join('-'));

// C.unshift & shift
var arrsh = ["dhiafakhry","ramadaan","adiansyah"]
arrsh.unshift("muhammad");
console.log(arrsh.join('-'));

var arrpo = ["dhiafakhry","ramadaan","adiansyah"]
arrpo.shift();
console.log(arrpo.join('-'));

// D.splice 
var spli = ["dhiafakhry","ramadaan","adiansyah"]
spli.splice(2,1,'Donnye');
console.log(spli.join('-'));

// E.slice
var slic = ["dhiafakhry","ramadaan","adiansyah","Maulana","Habibibullah"]
var slic2 = slic.slice(1,3);
console.log(slic2.join('-'));
console.log(slic.join('-'));

// F. forEach
var angka = [1,2,3,4,5,6,7,8];

angka.forEach (function(e) {
    console.log(e);
});

var mhs = ['Ahmad','Roma','Dhani'];
mhs.forEach(function(e, i) {
    console.log ('Mahasiswa ke - ' + (i + 1) + ' adalah : ' + e);
})

// G.Map
var angka1 = [1,2,3,7,6,5,4];
var angka2 = angka.map(function(e) {
    return e * 2;
})
console.log(angka2.join('-'));

// H.Sort
var angka3 = [1,2,3,7,6,5,4,20,15,12,9,10,17,8];
angka3.sort(function(a,b) {
    return a-b;
});
console.log(angka3.join('-'));

// I. Filter
var angka4 = [1,2,3,7,6,5,4,20,9,10,8];
var angka5 = angka4.filter(function(x) {
    return x > 5 ;
})
console.log(angka4.join('-'));

// J. Find
var angka6 = [1,2,3,7,6,5,4,20,9,10,8];
var angka7 = angka6.find(function(x) {
    return x > 5 ;
})
console.log(angka6);