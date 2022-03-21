// Membagi nama iputan menjadi firstname, middlename dan lastname

const getSplitName = (personName) => {

    if (typeof personName != 'string') {
        return 'ERROR : Fill this function with "string" type only';
    }
    
    const splitName = personName.split(" ");
    const length = splitName.length;

    switch (length) {
        case 1:
            return {
                FirstName: splitName[0],
                MiddleName: null,
                LastName: null,
            }
        case 2:
            return {
                FirstName: splitName[0],
                MiddleName: null,
                LastName: splitName[1],
            }
        case 3:
            return {
                FirstName: splitName[0],
                MiddleName: splitName[1],
                LastName: splitName[2],
            }
        default:
            return 'ERROR : This function is only for 3 characters name';
    }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));