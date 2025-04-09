const input = document.getElementById("agregartareas-input");

const mas = document.getElementById("icono-agregar");

const lista = document.getElementById("check");

const agregarTareas = (tarea) => {
const elemento = `
<li>
                <i class="fas fa-circle co" id="check" data-="check"></i>
                <p class="tarea" id="tarea">${tarea}</p>
                <i class="fas fa-trash de" id="borrar" data-="borrar"></i>
                
            </li>`
lista.insertAdjacentHTML("beforeend", elemento); 

};


//llamas función

mas.addEventListener('click', () => {
    const tarea = input.value 

    if(tarea) {
        agregarTareas(tarea)
    }
    input.value = "";
})

//llamar con enter

document.addEventListener('keyup', (e) => {
    if(e.key == 'Enter'){
        const tarea = input.value 

    if(tarea) {
        agregarTareas(tarea)
    }
    input.value = "";
    }
})

const cambiarEstilos = () => {
    const link = document.getElementById("estilos"); 
    link.href = link.href.includes("style.css") ? "style2.css" : "style.css";  
}
