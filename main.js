const prompt = require('prompt-sync')({ sigint: true });
const nama = prompt('');
const umur = prompt('');
let uang = 0;

if (umur < 21) {
    console.log('Maaf ' + nama + ' umur kamu kurang ' + (21 - umur) + ' tahun lagi.');
} else if (umur >= 21) {
    uang = prompt('');
} 
if (uang > 500000) {
    console.log('Selamat datang ' + nama);
} else {
    console.log('Maaf ' + nama + ' uang kamu cuma ' + uang + ' datang lagi lain kali.');
}