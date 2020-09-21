function digit(code) {
    return (code >= 48 && code <= 57)
  }
function isDigit(str='') {
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)
       if (!digit(code)) {
           return false
       }
    }
    return true
}

console.log(isDigit('42'))
// => true
console.log(isDigit('9.4'))
// => false
console.log(isDigit('ch0pper'))
// => false