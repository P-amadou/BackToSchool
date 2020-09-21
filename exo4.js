function capitalize(str ='',restToLowropt= false){

    let sentence = ''

    for(let i = 0; i < str.length; i++) {
        
        if (i===0 && str.charCodeAt(0)>=97 && str.charCodeAt(0)<=122) {
            sentence += String.fromCharCode(str.charCodeAt(0)-32)
        }
         else if(i!==0 && restToLowropt && str.charCodeAt(i) >=65 && str.charCodeAt(i)<=90){
            sentence += String.fromCharCode(str.charCodeAt(i)+32)
        }
        else{
            sentence+=str[i]
        } 
    }

    return sentence

}

console.log(capitalize('One code'))
console.log(capitalize('One CODE',restToLowropt = true))
