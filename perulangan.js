var str = '';
for (var i = 0; i < 7; i++) {
    for (var x = 0; x <= i; x++) {
        str +='*';
    }
    str += '\n';
}
console.log(str)

var str = '';
for (var i = 7; i > 0; i--) {
    for (var x = 0; x < i; x++) {
        str +='*';
    }
    str += '\n';
}
console.log(str)