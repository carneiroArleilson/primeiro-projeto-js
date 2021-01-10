function fatoria(n){
    if(n == 1){
        return 1
    }else{
        return n= n*fatoria(n-1)
    }
}
console.log(fatoria(5))