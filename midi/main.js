function tocaSom (seletorAudio) {
    const elemento =  document.querySelector(seletorAudio).play();
    if(elemento === null) {
        alert('elemento não econtrado')
    }
    if (elemento != null) {
        elemento.play ()
    }
    
}

const listaDeTeclas= document.querySelectorAll('.tecla');

for (let contador = 0;contador < listaDeTeclas.length; contador +=1) {
    
    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {

        tocaSom(idAudio)
    }
    tecla.onkeydown = function(evento) {
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa')
        }    
    }
    tecla.onkeyup  = function() {
        tecla.classList.remove('ativa');
    }

}

