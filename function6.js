// Rekursif
function cetakAngka(n) {
    if( n === 0 ) 
        return;
                        // Base Case
    console.log(n);
    cetakAngka(n-1);
}

cetakAngka(10);

