function countSubstrings(str='',substring) {
   let count = 0
   let x=0
   
   for (let i = 0; i < str.length; i++) {
        if (str[i]===substring[x]) {
            x++
            if(x>= substring.length){
                x=0
                count++
            }
        }else{
            x=0
        }
   }
   
   return count
}

console.log(countSubstrings('Tony Tony Chopper!','Tony'))
console.log(countSubstrings('gomu gomu no bazooka','gatling'))