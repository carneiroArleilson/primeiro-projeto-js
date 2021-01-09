var agora = new Date()
var diaSem = agora.getDay()//domingo, segunda, terça, quarta, quinta, sexta e sabado
diaSem = 9        //0, ..., 6
switch(diaSem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('quarta-feira')
        break
    case 4:
        console.log('quinta-feira')
        break
    case 5:
        console.log('sexta-feira')
        break
    case 6:
        console.log('sábado')
        break
    default:
        console.log('[ERRO]Dia invalido')
        break    
    }