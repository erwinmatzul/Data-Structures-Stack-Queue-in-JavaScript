##  Sistema de Turnos - Clínica Médica (FIFO Queue Implementation)

<div align="center">

![Estado](https://img.shields.io/badge/Estado-Completado-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-blueviolet)
![POO](https://img.shields.io/badge/POO-Aplicada-blue)
![Estructura de Datos](https://img.shields.io/badge/Estructura%20de%20Datos-Cola%20FIFO-orange)

</div>



## Descripción General

**Sistema de Turnos para Clínica Médica** es un proyecto desarrollado como práctica de la estructura de datos **cola (queue)** bajo el principio **FIFO (First In, First Out)**. Fue creado con el objetivo de simular la gestión de pacientes en tiempo real, reforzando la lógica de programación, POO y su integración con interfaces profesionales.

Este proyecto demuestra la capacidad de **modelar problemas del mundo real con estructuras de datos**, aplicando conceptos de algoritmos y diseño orientado a objetos en un flujo completo de registro, almacenamiento, visualización y atención de pacientes.



###  Objetivo del Proyecto

 Implementar una estructura de datos **Queue (cola FIFO)** en JavaScript puro.  
 Integrar la lógica de datos con el **DOM** para crear interfaces funcionales.  
 Aplicar **Programación Orientada a Objetos (POO)** para modelar el problema.  
 Diseñar un sistema responsivo y profesional con **Bootstrap 5**.  
 Utilizar la **Web Speech API (SpeechSynthesis)** para notificaciones auditivas.



###  Funcionalidades Principales

- **Registro de pacientes** con su nombre, edad y síntoma principal.
- **Visualización de pacientes en espera** con su posición y hora de llegada.
- **Atención secuencial de pacientes** siguiendo el principio FIFO.
- **Finalización de turnos** con reinicio del sistema.
- **Notificaciones por voz** anunciando el turno actual.
- **Validaciones robustas** de datos ingresados por el usuario.


###  Tecnologías y Herramientas

| Tecnología | Uso |
| --- | --- |
| **HTML5** | Estructura semántica del proyecto. |
| **CSS3** | Estilos personalizados para componentes y layout. |
| **Bootstrap 5.3** | Diseño responsive y componentes UI. |
| **JavaScript (ES6+)** | Implementación de lógica, clases y manipulación DOM. |
| **POO** | Clases `Paciente` y `Queue` con métodos especializados. |
| **SpeechSynthesis API** | Anuncios auditivos de turnos para accesibilidad. |



##  Estructura de Datos: Queue (FIFO)

###  ¿Qué es FIFO?

**FIFO (First In, First Out)** es un principio en estructuras de datos donde el primer elemento en entrar es el primero en salir, como en filas de personas esperando atención.

###  Implementación en este proyecto

- **Clase `Paciente`:**
  - Propiedades: `nombre`, `edad`, `sintoma`, `hora`, `next`.
  - Modela los datos de un paciente y su referencia al siguiente en la cola.

- **Clase `Queue`:**
  - Propiedades: `first`, `last`, `length`.
  - Métodos:
    - `enqueue`: agrega un nuevo paciente al final.
    - `dequeue`: elimina el paciente del inicio (atendido).
    - `peek`: obtiene el paciente actual sin eliminarlo.
    - `isEmpty`: verifica si la cola está vacía.
    - `printQueue`: retorna todos los pacientes en espera.

####  Diagrama de funcionamiento

1. **Registro:** se crea un nodo `Paciente` y se inserta al final (`enqueue`).  
2. **Atención:** se elimina el nodo inicial (`dequeue`) y el puntero `first` apunta al siguiente.  
3. **Finalización:** si no hay pacientes, la cola se reinicia completamente.

