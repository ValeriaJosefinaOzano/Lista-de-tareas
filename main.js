const fecha = document.getElementById("fecha")

const input = document.getElementById("agregartareas-input");

const mas = document.getElementById("icono-agregar");

const lista = document.getElementById("lista");

const hecho = 'fa-check-circle';

const pendiente = 'fa-circle';

const tachado = 'tachado';

let id= 0;

const fechaActual = new Date(); 
fecha.innerHTML= fechaActual.toLocaleDateString('es-Ar',{
    weekday: 'long',
month: 'long',
day: 'numeric'})

const agregarTareas = (tarea, check, eliminado, id) => {
    if (eliminado) {return}
    const estado = check ?hecho : pendiente;
    const tachar = check ?tachado : "";
const elemento = `<li>
                <i class="far ${estado}" id="check${id}" data="check"></i>
                <p class="tarea ${tachar}">${tarea}</p>
                <i class="fas fa-trash de" id="borrar${id}" data="borrar"></i>
                
            </li>`

lista.insertAdjacentHTML("beforeend", elemento); 

};

const tareaRealizada = (element) => {
element.classList.toggle(hecho);
element.classList.toggle(pendiente);
element.parentNode.querySelector('.tarea').classList.toggle(tachado);
};

const tareaEliminada = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode);
};


const cambiarEstilos = () => {
    const link = document.getElementById("estilos"); 
    link.href = link.href.includes("style.css") ? "style2.css" : "style.css";  
};



//llamas función

mas.addEventListener('click', () => {
    const tarea = input.value 

    if(tarea) {
        agregarTareas(tarea,false,false,id);
        id++
    }
    input.value = "";
})

//llamar con enter

document.addEventListener('keyup', (e) => {
    if(e.key == 'Enter'){
        const tarea = input.value 

    if(tarea) {
        agregarTareas(tarea,false,false,id);
        id++
    }
    input.value = "";
    }
});

lista.addEventListener('click', function(event) {
    const element = event.target;
    const elementData = element.attributes.data.value;

if (elementData == 'check') {
    tareaRealizada(element)
}
else if (elementData =='borrar') {
    tareaEliminada(element)
}
});

