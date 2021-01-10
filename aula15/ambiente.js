var num = [5,8,2,9,3]

num [5] = 6 //atribui em uma posição especifica por mais que não exista

num.push(1) //atribui na ultima posição

num.sort()
console.log(num)

// console.log(`o vetor tem ${num.length} posições`)
// var tudo =[]
// for(var c=0; c<=num.length;c++){
//     tudo += c
// }
// console.log(tudo)
let pos = num.indexOf(8)
if( pos <= -1){
    console.log('o valor não foi encontrado !')
}else{
    console.log(`O valor está na posição ${pos}`)
}
