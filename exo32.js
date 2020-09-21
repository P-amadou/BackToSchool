function upperCase(code) {
    return (code >= 65 && code <= 90)
  }
function isUpperCase(str='') {
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)
       if (!upperCase(code)) {
           return false
       }
    }
    return true
}

console.log(isUpperCase('CHOPPER'))
// => true
console.log(isUpperCase('Chopper'))
// => false
