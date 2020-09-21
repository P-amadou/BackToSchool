function slice(str='',start,endopt=str.length){
    let res=''
        
    for (let i=0;i<str.length;i++){
        if((start+i)>=str.length)
        break   
        res += str[start+i]
  
     if (start<0) {
     a=str.charAt(str.length+start)
     
     console.log(str[(str.length+start)+i])
     res+= str[i]
            
    }else if((start+i)>=endopt){
        res += str[start+i]   
    }
    }
    return res
}
    console.log(slice('ch0pper',1));
    console.log(slice('ch0pper',-4));
    console.log(slice('ch0pper',1,4));
    