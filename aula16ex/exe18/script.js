var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if( isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adcionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert( 'valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('adicione valores antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
        }
        media = soma / tot
        //Forma do curso em vídeo ...
        // res.innerHTML = ''
        // res.innerHTML =`<p>Ao todo temos ${tot} numeros cadastrados!</p>
        // res.innerHTML +=`<p>O maior valor informado foi ${maior}</p>`
        // res.innerHTML +=`<p>O menor valor informado foi ${menor}</p>`

        //Forma do odilomar kkkk
        res.innerHTML =`
            <p>Ao todo temos ${tot} numeros cadastrados!</p>
            <p>O maior valor informado foi ${maior}</p>
            <p>O menor valor informado foi ${menor}</p>
            <p>Somando todos os valores  temos ${soma}</p>
            <p>A média dos valores digitados é ${media}</p> `
    }
}