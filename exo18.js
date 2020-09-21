function lastIndexOf(str='',search,fromIndexopt=str.length-1) {
    let index=-1
    for (let i = fromIndexopt; i > 0; i--) {
        if(str[i]===search){
            return i
        }        
    }
    return -1
}

console.log(lastIndexOf('Ch0pper','p'))

console.log(lastIndexOf('Ch0pper','o'))