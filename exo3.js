function length(str = '')
{
    for(var i = 0; str[i] != null; i++){}
 
    return i
}

console.log(length('chopper1'))