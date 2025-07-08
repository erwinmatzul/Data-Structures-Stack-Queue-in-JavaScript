class Nodo {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.botton = null
        this.length = 0
    }

    peek() {
        return this.top
    }

    push(value) {
        const newNode = new Nodo(value)

        if (this.length == 0) {
            this.top = newNode
            this.botton = newNode

        } else {
            const holdingPointer = this.top;
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
        return this
    }
    isEmpty() {
        return this.length == 0;
    }
    pop() {

        if (!this.top) {
            return null
        }

        if (this.top == this.botton) {
            this.botton = null
        }

        this.top = this.top.next

        this.length--
        return this
    }
    printStack() {

        let current = this.top;
        let nod = []

        while (current != null) {

            nod.push(current.value)
            current = current.next
        }
        return nod
    }
    clear() {
        this.top = null;
        this.botton = null;
        this.length = 0;
    }
}
const stack = new Stack()

let inputTexto = document.querySelector("#inputTexto")
let btnBuscar = document.querySelector("#btnBuscar")
let form = document.querySelector("#form")
let listaHistorial = document.querySelector("#lista-historial")
let btnEliminarHistorial = document.querySelector("#btnEliminarHistorial")
let btnEliminarAtras = document.querySelector("#btnEliminarAtras")
let historialVacio = document.querySelector("#historialVacio")
let busquedasTotal = document.querySelector("#busquedasTotal")

let renderizarBusqueda = () => { }

const actualizarVisibilidadBotones = () => {
    if (stack.isEmpty() == true) {
        btnEliminarHistorial.classList.add("d-none");
        btnEliminarAtras.classList.add("d-none");
        historialVacio.classList.remove("d-none");
    } else {
        btnEliminarHistorial.classList.remove("d-none");
        btnEliminarAtras.classList.remove("d-none");
        historialVacio.classList.add("d-none");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const enviarInformacion = () => {

        const valor = inputTexto.value.trim();

        if (valor == "") {
            return alert("Input Vacio!");
        }

        stack.push({
            texto: valor,
            fechaYhora: new Date().toLocaleString(),
        });

        const historial = stack.printStack();
        localStorage.setItem("historial", JSON.stringify(historial));

        form.reset()

        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(valor)}`
    }
    enviarInformacion()
});

btnBuscar.addEventListener("click", () => {
    enviarInformacion()
})

window.addEventListener("DOMContentLoaded", () => {
    const historial = JSON.parse(localStorage.getItem("historial")) || [];

    let historial1 = historial.reverse()

    historial1.forEach(valor => {
        stack.push(valor);
    });

    renderizarBusqueda = (data = stack.printStack()) => {

        let lista = ``
        data.forEach(busqueda => {
            lista += `
    <div class="form-control mb-2 fs-4 bgColor text-white d-flex justify-content-between align-items-center">
        <span>${busqueda.texto}</span>
        <small class="text-muted ps-1 fw-bolder">${busqueda.fechaYhora} <i class="bi bi-google fs-6 "></i></i></small>
    </div>`;
        });

        listaHistorial.innerHTML = lista
    }
    busquedasTotal.innerText = `Total de busquedas: ${stack.printStack().length}`
    renderizarBusqueda()
    actualizarVisibilidadBotones()
});

btnEliminarHistorial.addEventListener("click", () => {
    stack.clear()
    localStorage.clear()
    renderizarBusqueda()
    actualizarVisibilidadBotones();
    busquedasTotal.innerText = `Total de busquedas: ${stack.printStack().length}`
})

btnEliminarAtras.addEventListener("click", () => {
    stack.pop()
    const historialNuevo = stack.printStack();
    localStorage.setItem("historial", JSON.stringify(historialNuevo));
    renderizarBusqueda()
    actualizarVisibilidadBotones();
    busquedasTotal.innerText = `Total de busquedas: ${stack.printStack().length}`
})

