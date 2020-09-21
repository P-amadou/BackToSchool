function lowerCase(code) {
    return (code >= 97 && code <= 122)
  }
function isLowerCase(str='') {
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)
       if (!lowerCase(code)) {
           return false
       }
    }
    return true
}

console.log(isLowerCase('chopper'))
// => true
console.log(isLowerCase('Chopper'))
// => false
console.log(isLowerCase('ch0pper'))
// => false