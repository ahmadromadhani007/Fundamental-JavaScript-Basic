var item = prompt('masukkan nama atau minuman dengan menu sbb : \n (nasi, daging, susu, krabby patty, soda drink)');

switch(item) {
    case 'nasi' :
    case 'daging' :   
    case 'susu' :
        alert('minuman atau makanan yang anda pilihh SEHAT !')
        break;

        case 'krabby patty' :
    case 'soda drink' :
        alert('minuman atau makanan yang anda pilih TIDAK SEHAT !')
        break;

    default :
        alert('anda memasukkan nama minuman atau makanan yang salah !');
        break;

}