/*
    Array => adalah sebuah struktur data yang bisa menyimpan lebih dari satu nilai
    index = urutan data di dalam array
    index start 0
    ayam, ikan, kambing
    
    Syntax membuat array 
    cara umumnya:
    keywordVariabel NamaArray = [Nilainya]

    ES6
    KeywordVariabel NamaArray = new Array(Panjang Datanya)
*/

// Panjang data diambil dari jumlah nilainya 
let buah = ["Apel","NAnas","Jeruk","Pisang"]
console.log(buah.length)
let dataNilai = new Array(36)
console.log(dataNilai.length)
console.log(typeof(dataNilai))


// Function => block code yang dimana fungsinya untuk 
// menampung sebuah logic

// push() => untuk menambahkan item di index terakhir 
// namaArray.push("ikan")
console.log(`Data Array:\n${buah}`)
buah.push("anggur")
console.log(`Data Array sesudah di Push:${buah}`)

// pop() => untuk menghapus item di index terakhir 
buah.pop()
console.log(`data sesudah di pop ${buah}`)