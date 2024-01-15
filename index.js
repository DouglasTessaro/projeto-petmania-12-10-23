var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })

})
//formato de uma function
//function nome(argumento){
    //contéudo da função
// }