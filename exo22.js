//Attendre correction
function splice(str='',start,deleteCountopt=str.length-start,toAddopt='') {
let res=toAddopt
let i= start

for (i = start; i < str.length; i++) {
    if(i>=deleteCountopt){
        res+=str[i]
    }
}
    return res
}
console.log(splice('Tony Tony Ch0pper',0,10))
console.log(splice('Tony Ch0pper',0,4,'Tony Tony'))
console.log(splice('Tony Tony Usopp',-5,5,'Ch0pper'))