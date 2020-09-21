function indexOf(str='',search,fromIndexopt) {
    let index=-1
    for (let i = 0; i < str.length; i++) {
        if(str[i]===search){
            return i
        }        
    }
    return -1
}

console.log(indexOf('Ch0pper','0'))

console.log(indexOf('Ch0pper','o'))