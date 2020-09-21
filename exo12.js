function substr(str='',start,len=str.length){
let res=''


for (let i=0;i<len;i++){
if((start+i)>=str.length)
break   
res += str[start+i]

}

return res
}

console.log(substr('tony tony chopper',10));
console.log(substr('ch0pper',2,2));
