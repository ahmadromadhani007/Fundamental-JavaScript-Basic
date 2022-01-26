// menghitung volume kubus
function Jumlah2BuahKubus(a,b){
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

alert(Jumlah2BuahKubus(10,17));