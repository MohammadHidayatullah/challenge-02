// Menghitung total sepatu yang terjual

const dataPenjualanPakAldi = [{
        namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan: 760000,
        kategori: 'Sepatu Sport',
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Black Born High',
        hargaSatuan: 960000,
        kategori: 'Sepatu Sneaker',
        totalTerjual: 37,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Maroon High',
        hargaSatuan: 360000,
        kategori: 'Sepatu Sport',
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan: 120000,
        kategori: 'Sepatu Sport',
        totalTerjual: 90,
    },
];

const getTotalPenjualan = (dataPenjualan) => {
    if (typeof dataPenjualan != 'object') {
        return 'ERROR : Isi data dari parameter harus tipe "object" dengan value angka'
    }
    return dataPenjualan.reduce((prev, cur) => prev + cur.totalTerjual, 0)
}

console.log(getTotalPenjualan(dataPenjualanPakAldi));
console.log(getTotalPenjualan('dataPenjualanPakAldi'));