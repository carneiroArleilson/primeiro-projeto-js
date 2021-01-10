function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if( fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO]verifique os dados e tente novamente!');
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','fot')
    
        if(fsex[0].checked){
            genero = 'Homen'
            if( idade >= 0 && idade < 10){
                //criança homen
                img.setAttribute('src','bbHomen.jpg')
            }else if( idade < 25){
                //joven homen
                img.setAttribute('src','jvHomen.jpg')
            }else if( idade < 50){
                //adulto homen
                img.setAttribute('src','adHomen.jpg')
            }else {
                //idoso homen
                img.setAttribute('src','vlHomen.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if( idade >= 0 && idade < 10){
                //criança mulher
                img.setAttribute('src','bbMulher.jpg')
            }else if( idade < 25){
                //joven mulher
                img.setAttribute('src','jvMulher.jpg')
            }else if( idade < 50){
                //adulto mulher
                img.setAttribute('src','adMulher.jpg')
            }else {
                //idoso mulherks
                img.setAttribute('src','vlMulher.jpg')
            }
        }
        img.width = 250
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}