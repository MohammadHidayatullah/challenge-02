// Pengecekan password

const isValidPassword = (email) => {
    const lowerCase = /[a-z]/g;
    const upperCase = /[A-Z]/g;
    const numbers = /[0-9]/g;
    if (email == null) {
        return 'ERROR : Parameter tidak boleh kosong'
    }
    if (typeof email != 'string') {
        return 'ERROR : isi parameter harus tipe data "string"'
    }
    return (email.match(lowerCase) && email.match(upperCase) && email.match(numbers) && email.length >= 8) ? true : false;
}


console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());