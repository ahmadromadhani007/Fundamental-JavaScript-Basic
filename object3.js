// Beberapa cara membuat Object

// Cara 1 fucntion declaration
function halo() {
    console.log(this);
    console.log('loha');
}
this.halo();
window.halo();
// It's same meaning anda return value between this and window === object GLOBAL


// Cara 2 function object literal
var obj = {nama: 'ahmad romadhani', umur: 21};
obj.halo = function() {
    console.log(this);
    console.log('haloooo');
}
obj.halo();
// this menggembalikan object yang bersangkutan

// Cara 3 function constructor
function Halo() {
    console.log(this);
    console.log('Hi.!');
}
new Halo();
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat (new)
