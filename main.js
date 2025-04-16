const input = document.getElementById("agregartareas-input");

const mas = document.getElementById("icono-agregar");

const lista = document.getElementById("check");

const hecho = 'fas fa-circle';

const pendiente = 'fa-circle';

const tachado = 'tachado';

const agregarTareas = (tarea, check) => {
    const estado = check ? hecho : pendiente;
    const tachar = check ? tachado : "";
const elemento = `
<li>
                <i class="far ${estado}" Data="check"></i>
                <p class="tarea ${tachado}" id="tarea">${tarea}</p>
                <i class="fas fa-trash de" id="borrar" Data="borrar"></i>
                
            </li>`
lista.insertAdjacentHTML("beforeend", elemento); 

};

const TareaRealizada = (element) => {
element.classList.toggle(hecho);
element.classList.toggle(pendiente);
element.parentNode.querySelector ('.tarea').classList.toggle(tachado)
};

const tareaEliminada = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode);
} 


const cambiarEstilos = () => {
    const link = document.getElementById("estilos"); 
    link.href = link.href.includes("style.css") ? "style2.css" : "style.css";  
}



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

lista.addEventListener('click', function(event) {
    const element = event.target;
    const elementData = element.atributes.data.value;

if (elementData == 'check') {
    tareaRealizada (element)
}
else if (elementData =='borrar') {
    tareaEliminada (element)
}
})