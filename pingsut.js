var tanya = true;
while (tanya) {
    // menangkap pilihan players
    var p = prompt('pilih : gajah, semut, manusia');

    // menangkap pilihan computer

    // membangkitkan bilangan random 
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'manusia';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    // menentukan rules
    if ( p == comp ) {
        hasil = 'IMBANG/SERI !';
    } else if ( p == 'gajah' ) {
        hasil = ( comp == 'manusia' ) ? 'WIN' : 'LOSE'; 
    }else if ( p == 'manusia' ) {
        hasil = ( comp == 'gajah' ) ? 'LOSE' : 'WIN';
    } else if  (p == 'semut' ) {
        hasil = ( comp == 'semut' ) ? 'LOSE' : 'WIN';
    } else {
        hasil = 'Sorry wrong chosen !!!';
    }
    // tampilkan hasilnya 
    alert('Anda memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : YOU ' + hasil);

    tanya = confirm('Again ?');
}    

alert('Matur Thank You');