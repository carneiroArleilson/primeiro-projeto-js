function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 2data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia!
        document.body.style.background = '#e2cd9f'
        img.src = 'fotomanha.jpg'
    }else if(hora >=12 && hora < 18){
        //Boa tarde!
        document.body.style.background = '#b9846f'
        img.src = 'fototarde.jpg'
    }else{
        //Boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#2c085b'
    }
}
