// Membuat Object
// Object Literal

var mhs1 = {
    email : 'a.romadhani17@unuja.ac.id',
    nama : 'Ahmad Romadhani',
    npm : 1921500006,
    prodi : 'teknologi informasi '

}

var mhs2 = {
    email : 'adityzahmad23@yahoo.com',
    nama : 'Adityza Ahmad',
    npm : 1921500090,
    prodi : 'sistem informasi'

}

// Function Declaration

function buatObjectMhs (email, nama, npm, prodi) {
    var mhs = {};
    mhs.email = email;
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.prodi = prodi;
    return mhs;
}

var mhs3 = buatObjectMhs('st.aysah@gmail.com','siti aysha','1922700078','informatika')

// Function Constructur
function Mahasiswa (email, nama, npm, prodi) {
    this.email = email;
    this.nama = nama;
    this.npm = npm;
    this.prodi = prodi;
}

var mhs4 = new Mahasiswa ('nurmaula11@yandex.com','Maulidiya','1022700011','teknik elektro')