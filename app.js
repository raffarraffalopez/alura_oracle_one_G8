//iniciando codigo de nuevo
const app = document.getElementById("app");
const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]$/;
const input_name = document.getElementById("input_name");
const listaAmigos = document.querySelector("#lista_amigos ");
const inputName = document.querySelector("#input_name");
const agregarButton = document.querySelector("#agregarButton");
const buttonSortear = document.querySelector("#button_sortear");
const imgAmigos = document.getElementById("img_amigos");
const seccionInput =document.querySelector(".section_input");

/**
 * Muestra un mensaje de alerta en la pantalla durante 2 segundos. 
 * @param {string} mensaje Texto que se mostrará en la alerta.
 */
const mostrarAlerta = (mensaje) => {
    let alerta = document.createElement("div");
    alerta.textContent = mensaje;
    alerta.style.position = "absolute"; 
    alerta.style.top = "-30px"; 
    alerta.style.left = "50%";
    alerta.style.transform = "translateX(-50%)";
    alerta.style.width = "300px";
    alerta.style.background = "rgba(236, 0, 0, 0.25)";
    alerta.style.color = "rgba(14, 13, 13, 0.9)";
    alerta.style.padding = "10px 5px";
    alerta.style.borderRadius = "5px";
    alerta.style.boxShadow = "0px 0px 10px rgba(32, 31, 31, 0.2)";
    alerta.style.textAlign = "center";
    alerta.style.zIndex = "1000"; 
    const contenedor = document.getElementById("section_input");
    contenedor.appendChild(alerta, contenedor.querySelector("#input_name"));
    input_name.setAttribute("disabled", true);
    setTimeout(() => {
        alerta.remove();
        input_name.removeAttribute("disabled");
    }, 1500);
};


/**
 * Agrega un amigo a la lista de amigos.
 * Obtiene el nombre del campo de entrada y lo agrega como un nuevo elemento 
 * de lista en el DOM. Si el campo de entrada está vacío, muestra una alerta 
 * para solicitar un nombre válido.
 */
const agregarAmigo = () => {
    const nombre = document.getElementById("input_name").value;
    if (!nombre) {
        mostrarAlerta("Por favor ingresa un nombre válido.");
        return;
    } 
    const li = document.createElement("li");
    li.textContent = nombre;
    document.getElementById("lista_amigos").appendChild(li);
    document.getElementById("input_name").value = "";
}

/**
 * Sortea un amigo de la lista de amigos.
 * 
 * Si la lista de amigos tiene al menos un elemento, sortea un amigo al azar y
 * lo muestra con un fondo de color primario y hace invisible el input y el
 * botón de agregar amigo. Si la lista no tiene elementos, muestra una alerta
 * para indicar que no hay amigos para sortear.
 */
const sortearAmigos = () => {
    const amigos = [...listaAmigos.querySelectorAll("li")];
    if (amigos.length > 0) {
        buttonSortear.disabled = true;
        agregarButton.disabled = true;
        seccionInput.style.display = "none";        
        const randomIndex = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[randomIndex];
        amigoSorteado.classList.add("amigo_sorteado");
        imgAmigos.classList.add("img_amigos");
        
    } else {
        mostrarAlerta("No hay amigos para sortear.");
    }
}



app.addEventListener("keydown", (event) => {  if (event.key === "Enter")  agregarAmigo(); });
app.addEventListener("input", (event) => {    
    if (event.target.tagName === "INPUT") {
        let input = event.target;
        let valor = input.value;
        let ultimoCartacter = valor.charAt(valor.length - 1); 
        if (!regex.test(ultimoCartacter)) {
            input.value = valor.slice(0, -1); 
            mostrarAlerta(`Carácter no permitido: ${ultimoCartacter} `);
        }
    }
});

app.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        if (event.target.id === "agregarButton") {
            agregarAmigo();

        } else if (event.target.id === "button_sortear") {
            
            sortearAmigos();
        }       
    }
});
