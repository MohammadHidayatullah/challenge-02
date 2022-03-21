// Mengecek format email

const checkEmail = (email) => {

    let validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (email == null) {
        return 'ERROR : Parameter harus diisi'
    }
    if (typeof email != 'string') {
        return 'ERROR : Parameter harus diisi dengan tipe data "string"'
    }
    return email.match(validRegex) ? 'VALID' : 'INVALID';
}

console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))
console.log(checkEmail(3322))
// console.log(checkTypeNumber(checkEmail(3322))) // checkTypeNumber is not defined (tidak ada function checkTypeNumber)
console.log(checkEmail())