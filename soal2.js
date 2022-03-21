// Mendeteksi angka genap atau ganjil

const checkTypeNumber = (givenNumber) => {
    if (!givenNumber) {
        return "Error : Bro where is the parameter?";
    }
    if (typeof (givenNumber) != "number") {
        return "Error : Invalid data type"
    }
    return givenNumber % 2 == 0 ? 'GENAP' : 'GANJIL';
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());