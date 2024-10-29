
let input = "Potato";
function reverse() {
    return input.split('').reverse().join('');
}
setTimeout(() => {
    console.log(reverse())
}, 2000);