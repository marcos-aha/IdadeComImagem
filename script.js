function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var idade = document.getElementById('idade')
    var res = document.querySelector('div#res')
    if(idade.value.length == 0 || idade.value > ano){
        alert('[ERRO]Verifique os dados e tente novamente.')
    } else{
        var sexo = document.getElementsByName('sex')
        var idadi = ano - idade.value
        var img = document.createElement('img')
        img.setAttribute('id', 'fotos')
        
        var genero = ''
        if (sexo[0].checked){
            
            if(idadi >=0 && idadi <10){
                img.setAttribute('src', 'img/bebe-h.png')
                genero = 'criança'
            } else if(idadi < 21){
                img.setAttribute('src', 'img/jovem.png')
                genero = 'jovem'
            }else if(idadi < 50){
                img.setAttribute('src', 'img/homem.png')
                genero = 'homem'
            }else{
                img.setAttribute('src', 'img/idoso.png')
                genero = 'idoso'
            }

        } else if(sexo[1].checked){
            genero = 'Mulher'
            
            if(idadi >=0 && idadi <10){
                img.setAttribute('src', 'img/bebe-m.png')
                genero = 'criança'
            } else if(idadi <21){
                img.setAttribute('src', 'img/jovem-m.png')
                genero = 'jovem'
            }else if(idadi <50){
                img.setAttribute('src', 'img/mulher.png')
                genero = 'mulher'
            }else{
                img.setAttribute('src', 'img/idosa.png')
                genero = 'idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e sua idade é de ${idadi} anos`
        res.appendChild(img)
    }
}