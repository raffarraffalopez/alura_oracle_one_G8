// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/**
 * Identificador, uso identificar posibles amigos con mismo nombre
 * y validar al menos 2 amigos
 */
let amigoId=0;
let amigo;
const amigoInput = document.getElementById('amigo');
const amigos = document.getElementById('listaAmigos');
const amigoItem = document.createElement('li');
const amigosLista = document.querySelectorAll('#listaAmigos li');
const resultado = document.getElementById('resultado');

/**
 * Agrega un amigo a la lista de amigos, verifica si el nombre es
 * valido, si tiene al menos 3 letras y solo contiene letras y espacios.
 * Si el nombre es valido, crea un item en la lista con el nombre del amigo.
 * Limpia el input de texto.
 */
const agregarAmigo = () => {
    amigoId++;
    amigo = amigoInput.value.trim();
    if(!amigo){
        alert('Por favor ingrese un amigo');
         return;
    }
    if(!/^[A-Za-z\s]+$/.test(amigo)) {
        amigoInput.value = '';
        alert('Por favor ingrese Nombre valido. Solo se permiten Letras y espacios');
        return;
    }
    if(amigo.length < 3){
        alert('El nombre debe tener al menos 3 letras');
        return;
    }
    amigoItem.textContent =amigo;
    amigos.appendChild(amigoItem);
    amigoInput.value = '';
}

/**
 * Sortea un amigo secreto de la lista de amigos.
 * Si hay menos de dos amigos en la lista, muestra una alerta solicitando agregar más amigos.
 * Selecciona aleatoriamente un amigo de la lista y muestra el resultado.
 */
const sortearAmigo = () => {    
    if(amigoId<2){
        alert('Por favor agregue al menos dos amigos');
        return;        
    }    
    const key =Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigosLista[key];    
    resultado.textContent = `El amigo secreto es: ${key + 1}.  ${amigoSecreto.textContent}`;
}
