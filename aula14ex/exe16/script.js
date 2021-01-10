function contar(){
    let ini = document.getElementById('txti') //msm coisa que o var!
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp') //msm coisa que o getElementById
    let res =  document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'
    }else {
        res.innerHTML = 'contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Passo inválido! considerando passo 1')
            p = 1   
        }
        if( i< f){
            for( let c = i; c <= f; c+=p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }else {
            for( let c = i; c >= f; c-=p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML +=` \u{1f3c1}`
    }
}