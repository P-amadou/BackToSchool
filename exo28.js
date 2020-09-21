function blank(code) {
    return (code == 32) 
  }
function isBlank(str='') {
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)
       if (!blank(code)) {
           return false
       }
    }
    return true
}

console.log(isBlank(''))
// => true
console.log(isBlank('  '))
// => true
console.log(isBlank('Ch0pper!'))
// => false