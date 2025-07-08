
class Paciente {
    constructor(nombre, edad, sintoma) {

        this.nombre = nombre
        this.edad = edad
        this.sintoma = sintoma
        this.hora = obtenerHora()
        this.next = null
    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    enqueue(nombre, edad, sintoma) {
        const newPaciente = new Paciente(nombre, edad, sintoma)

        if (this.length == 0) {
            this.first = newPaciente
            this.last = newPaciente

        } else {
            this.last.next = newPaciente
            this.last = newPaciente
        }
        this.length++
        return this
    }
    dequeue() {
        if (!this.length) {
            return null;
        }
        const nodoEliminado = this.first;

        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;

        return nodoEliminado;
    }
    peek() {
        return this.first
    }
    isEmpty() {
        return this.length == 0;
    }
    printQueue() {

        let nod = this.first
        let queue = []

        while (nod != null) {
            queue.push(nod)
            nod = nod.next
        }
        return queue
    }
}

const queue = new Queue()

let btnAtender = document.querySelector("#btnAtender")
let btnFinalizar = document.querySelector("#btnFinalizar")
let formRegistrar = document.querySelector("#formRegistrar")
let btnAgregarPaciente = document.querySelector("#btnAgregarPaciente")
let pantallaTurno = document.querySelector("#pantallaTurno")
let turnoNombre = document.querySelector("#turnoNombre")
let tbody = document.querySelector("#tbody")
let textInicio = document.querySelector("#textInicio")
let table = document.querySelector(".table")
let pacienteActualNombre = document.querySelector("#pacienteActualNombre")
let datosEnfermedad = document.querySelector("#datosEnfermedad")

btnAtender.addEventListener("click", () => {
    datosActuales(queue.dequeue());

    if (queue.isEmpty()) {
        btnAtender.classList.add("d-none");
        btnFinalizar.classList.remove("d-none");
        table.classList.add("d-none");
        turnoNombre.innerText = `No hay más turnos`
        textInicio.classList.remove("d-none")

        btnFinalizar.addEventListener("click", () => {
            reiniciarPagina()
        })
    } else {
        renderizarTabla();
    }
});
const crearDatos = (datos) => {

    pantallaTurno.classList.add("fondohead", "divTurnos", "d-flex", "align-items-center")
    turnoNombre.classList.add("fw-bolder", "ms-3")
    turnoNombre.innerText = `Proximo Turno: ${datos.nombre}`
}
const datosActuales = (datos) => {

    pacienteActualNombre.innerText = datos.nombre
    datosEnfermedad.innerText = `${datos.edad} -  ${datos.sintoma}`
    anunciarTurno(datos.nombre)
}
btnAgregarPaciente.addEventListener("click", (event) => {
    event.preventDefault()

    let inputNombre = document.querySelector("#inputNombre").value
    let inputEdad = document.querySelector("#inputEdad").value
    let inputSintoma = document.querySelector("#inputSintoma").value

    if (!inputNombre || !inputEdad || !inputSintoma) {
        return alert("Todos lo campos tienen que estar completos!")
    }
    if (inputEdad < 0 || inputEdad > 100) {
        return alert("La edad debe estar entre 0 y 100 años")
    }
    queue.enqueue(inputNombre, inputEdad, inputSintoma)
    formRegistrar.reset()

    let texto = new SpeechSynthesisUtterance(`Paciente Agregado`);
    speechSynthesis.speak(texto);

    renderizarTabla()
})
const renderizarTabla = (arrayPacientes = queue.printQueue()) => {

    if (arrayPacientes.length == 0) return

    table.classList.remove("d-none")
    textInicio.classList.add("d-none")
    btnAtender.classList.remove("d-none")
    btnFinalizar.classList.add("d-none");

    let tabla = ``
    arrayPacientes.forEach((paciente, index) => {

        tabla += `<tr>
      <th scope="row">${index + 1}</th>
      <td>${paciente.nombre}</td>
      <td>${paciente.edad} años</td>
      <td>${paciente.sintoma}</td>
         <td>${paciente.hora}</td>
    </tr>`
    });

    tbody.innerHTML = tabla
    crearDatos(queue.peek())
}
const obtenerHora = () => {
    return new Date().toLocaleTimeString('es-ES', { hour12: false });
};

const reiniciarPagina = () => {
    location.reload();
}
const anunciarTurno = (nombre) => {
    let texto = new SpeechSynthesisUtterance(`Turno para ${nombre}`);
    speechSynthesis.speak(texto);
};
