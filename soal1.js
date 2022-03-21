// Menggantikan kata didalam kalimat

const changeWord = (selectedText, chengeText, text) => text.replace(selectedText, chengeText);

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan cintaku padamu';

console.log(changeWord('mencintai', 'membenci', kalimat1));
console.log(changeWord('bromo', 'semeru', kalimat2));