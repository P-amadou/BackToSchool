function insert(str='',toInsertopt='',positionopt=0) {
   let res=''
    for (let i = 0; i < str.length; i++) {
        res+=str[i]
        if(i === positionopt - 1){
            res+=toInsertopt
        }
    }
    return res
}
console.log(insert('Chpper','0',2))

console.log(insert('Tony',' Tony Ch0pper', 4))