// Mencari angka terbesar kedua

const getAngkaTerbesarKedua = (dataAngka) => {
    if (dataAngka == null) {
        return 'ERROR : Parameter harus diisi'
    }
    if (typeof dataAngka != 'object') {
        return 'ERROR : Pameter harus diisi dengan array angka'
    }
    let sortData = dataAngka.sort((a, b) => b - a); // sorting data angka dari terbesar sampai terkecil
    let uniqueNumbers = [...new Set(sortData)]; // agar tidak ada angka yang lebih dari satu
    return uniqueNumbers[1];
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());