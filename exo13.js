function slice(str='',start,endopt=str.length){
    let res=''
    let i=start   

    if (start<0) {
        i=str.length+start               
       }
    for (i;i<endopt;i++){
        res+=str[i]
        
    }
    return res
}
    console.log(slice('ch0pper',1));
    console.log(slice('ch0pper',-4));
    console.log(slice('ch0pper',1,4));