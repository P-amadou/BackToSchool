function repeat(str='',timesopt=1) {
    let res=''
    for (let i = timesopt; i > 0; i--) {
        res+= str
    }
    return res
}

console.log(repeat('w',3))

console.log(repeat('gomu',0))