class App {
  /**
   * Constructor de la clase App.
   * Se encarga de obtener los elementos del DOM
   * que se van a utilizar en el programa.
   * @param {Element} inputName - El input donde se ingresa el nombre.
   * @param {Element} agregarButton - El bot n que agrega el amigo a la lista.
   * @param {Element} buttonSortear - El bot n que sortea un amigo de la lista.
   * @param {Element} listaAmigos - El ul que contiene la lista de amigos.
   * @param {Element} imgAmigos - La imagen que se muestra al sortear un amigo.
   * @param {Element} seccionInput - La secci n que contiene el input y el bot n de agregar.
   * @param {RegExp} regex - La expresi n regular que se utiliza para
   *  validar que el nombre solo contenga letras (incluyendo acentos y espacios).
   */
    constructor() {
        this.inputName = document.querySelector("#input_name");
        this.agregarButton = document.querySelector("#agregarButton");
        this.buttonSortear = document.querySelector("#button_sortear");
        this.listaAmigos = document.querySelector("#lista_amigos ");
        this.imgAmigos = document.getElementById("img_amigos");
        this.seccionInput =document.querySelector(".section_input");
        this.regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/;
    }
  
/**
 * Initializes the application by setting up event listeners for button actions.
 * Binds the "click" event on the "agregarButton" to the "agregarAmigo" method
 * and the "click" event on the "buttonSortear" to the "sortearAmigos" method.
 */

    init() {
        this.agregarButton.addEventListener("click", this.agregarAmigo.bind(this));
        this.buttonSortear.addEventListener("click", this.sortearAmigos.bind(this));
    }
  
    /**
     * Limpia la lista de amigos.
     * Elimina todos los elementos de la lista y deja el contenedor vacío.
     */
    limpiarLista() {
        this.listaAmigos.innerHTML = "";
    }
    
  
    /**
     * Agrega un amigo a la lista de amigos.
     * Si hay un amigo en la lista, se elige uno al azar y se le agrega
     * la clase "amigo_sorteado". Si no hay amigos, se muestra un mensaje en la consola.
     * @param {string} amigoNombre El nombre del amigo que se va a agregar.
     */
    agregarAmigo() {
        const amigoNombre = this.inputName.value.trim();
        if (!this.regex.test(amigoNombre)) {
            alert("El nombre solo puede contener letras (incluyendo Ñ, acentos y espacios).");
            return; 
        }
        this.manualAmigos = document.querySelectorAll("#lista_amigos p");
        console.log(this.manualAmigos.length);
        if (this.manualAmigos.length == 4   && amigoNombre) {      
        this.limpiarLista();
    }

        if (amigoNombre) {
        const li = document.createElement("li");
        li.textContent = amigoNombre;
        li.tabIndex = 0;
        this.listaAmigos.appendChild(li); 
        this.inputName.value = ""; 
    } else {
        alert("Nombre vacío, ingresa un nombre.");
    }
    }

    /**
     * Sortea un amigo de la lista de amigos.
     * Si hay al menos un amigo en la lista, se elige uno al azar y se le agrega
     * la clase "amigo_sorteado". Si no hay amigos, se muestra un mensaje en la consola.
     */
    sortearAmigos() {

        const amigos = [...this.listaAmigos.querySelectorAll("li")];
        if (amigos.length > 0) {
            this.buttonSortear.disabled = true;
            this.agregarButton.disabled = true;
            this.seccionInput.style.display = "none";        
            const randomIndex = Math.floor(Math.random() * amigos.length);
            const amigoSorteado = amigos[randomIndex];
            amigoSorteado.classList.add("amigo_sorteado");
            this.imgAmigos.classList.add("img_amigos");
            console.log(`Amigo sorteado: ${amigoSorteado.textContent}`);
        } else {
            console.log("No hay amigos para sortear.");
        }
    }
    }

    document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
    app.init();
});
