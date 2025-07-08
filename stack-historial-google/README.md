## Clon Google - Historial de Búsquedas (Stack Implementation)

<div align="center">

![Estado](https://img.shields.io/badge/Estado-Completado-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-blueviolet)
![POO](https://img.shields.io/badge/POO-Aplicada-blue)
![Estructura de Datos](https://img.shields.io/badge/Estructura%20de%20Datos-Pila%20(Stack)-orange)

</div>


###  Descripción General

**Clon visual de Google con historial de búsquedas basado en una pila (stack)**

Este proyecto es un **clon visual inspirado en la interfaz principal de Google**, implementado con HTML, CSS y Bootstrap, que integra la estructura de datos **pila (stack)** para gestionar el historial de búsquedas en tiempo real. Simula la experiencia de búsqueda en Google con un historial realista que aplica el principio **LIFO (Last In, First Out)**.



###  Objetivos del Proyecto

 Replicar la experiencia visual de Google con fidelidad.  
 Implementar un **stack (pila)** desde cero en JavaScript puro.  
 Integrar estructuras de datos con el **DOM** y **localStorage**.  
 Reforzar conceptos de **Programación Orientada a Objetos (POO)** modelando nodos y la pila completa.  



###  Funcionalidades principales

- **Realizar búsquedas en Google** desde el clon.
- **Registrar cada búsqueda en un stack** (última búsqueda arriba).
- **Visualizar el historial completo** en un offcanvas responsivo.
- **Eliminar la última búsqueda (pop)** o **eliminar todo el historial (clear)**.
- **Mostrar la cantidad total de búsquedas realizadas**.
- **Persistir datos en localStorage** para mantener el historial tras recargar.



### Tecnologías y Herramientas

| Tecnología | Uso |
| --- | --- |
| **HTML5** | Estructura semántica de la página. |
| **CSS3** | Estilos personalizados para el clon de Google. |
| **Bootstrap 5.3** | Diseño responsive, offcanvas y utilidades. |
| **JavaScript (ES6+)** | Implementación de lógica, clases y manipulación DOM. |
| **POO** | Clases `Nodo` y `Stack` con métodos especializados. |
| **localStorage** | Almacenamiento persistente del historial. |


###  Estructura de Datos: Stack (Pila)

###  ¿Qué es LIFO?

**LIFO (Last In, First Out)** es un principio donde el último elemento agregado es el primero en salir, como una pila de platos.

###  Implementación en este clon

- **Clase `Nodo`:**
  - Propiedades: `value`, `next`.
  - Modela cada búsqueda realizada como un nodo de la pila.

- **Clase `Stack`:**
  - Propiedades: `top`, `bottom`, `length`.
  - Métodos:
    - `push`: agrega un nuevo nodo al tope de la pila.
    - `pop`: elimina el nodo superior de la pila.
    - `peek`: retorna el nodo superior sin eliminarlo.
    - `isEmpty`: verifica si la pila está vacía.
    - `printStack`: retorna todos los nodos como un array.
    - `clear`: limpia completamente la pila.

####  Diagrama de funcionamiento

1. **Nueva búsqueda:** crea un nodo con texto y hora, se agrega arriba (`push`).  
2. **Visualización:** recorre la pila desde `top` mostrando cada búsqueda.  
3. **Eliminar última búsqueda:** elimina el nodo superior (`pop`).  
4. **Eliminar todo:** limpia la pila (`clear`) y localStorage.

