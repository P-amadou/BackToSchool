//exo1
/*function lowerCase(str=''){
    let sentence=''
    for(i=0;i<str.length;i++){
        const code = str.charCodeAt(i)
        if(code>=65&&code<=90){
            sentence+= String.fromCharCode(code+32)
        }else{
            sentence+= String.fromCharCode(code)
        }
        
    }
    return sentence
}*/

//exo2
/*function upperCase(str=''){
    let sentence1=''
    for(i=0;i<str.length;i++){
        const code = str.charCodeAt(i)
        if(code>=97&&code<=122){
            sentence1 += String.fromCharCode(code-32)
        }else{
            sentence1 += String.fromCharCode(code)
        }
        
    }
    return sentence1
}*/

//exo3
/*function length(str=''){
    let count=0
    for (let a = 0; a < str.length;a++){
        count+=1
    }
    return count
}*/

//exo4
/*function capitalize(str='',restToLoweropt=false){
    let sentence2=''

    for (let b = 0; b < str.length; b++){
        const code = str.charCodeAt(b)
        if(b===0 && code>=97 && code<=122){
            sentence2 += String.fromCharCode(code-32)
        }else if(b!==0 && restToLoweropt && code>=65&& code<=90){
            sentence2 += String.fromCharCode(code+32)
        }else{
            sentence2 += String.fromCharCode(code)
        }
    }
    return sentence2
}*/

//exo5 Utiliser split pour bon avoir res
/*function decapitalize(str=''){
    let sentence3=''

    for (let c = 0; c < str.length; c++) {
        const code = str.charCodeAt(c)
        if(c===0 && code>=65 && code<=90){
            sentence3 += String.fromCharCode(code+32)
        }
        else if (code==32){
            if(c===0 && code>=65 && code<=90){
                sentence3 += String.fromCharCode(code+32)
            }
            else{
                sentence3 += String.fromCharCode(code)
            }
        }
        else{
            sentence3 += String.fromCharCode(code)
        }
    }
        return sentence3    
}*/

//exo6 verif peut etre ordre des boucles

function kebabCase(str=''){
    let sentence4=''

    for (let d = 0; d < str.length; d++)  {
        const code = str.charCodeAt(d)
        const codeNext =str.charCodeAt(d)
        if (code===32 ) {
            sentence4 += "-"
        } else if(code >= 65 && code <=90 && d!== 0 && codeNext !== 45){
            sentence4 += "-"
            sentence4 += String.fromCharCode(code+32)
        }
        else if (code>=65 && code<=90) {
            sentence4 += String.fromCharCode(code+32)
        }else if ((d === 0 || d === str.length-1) && code===45 ) {
            sentence4 += ""
        }else{ 
            sentence4+= str[d]
        }
    }
    return sentence4
}

console.log(kebabCase('mugiwara luffy'))
console.log(kebabCase('MugiwaraNoLuffy'))
console.log(kebabCase('-Luffy-Un-Pirate'))