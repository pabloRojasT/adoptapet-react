

 Tabla de Análisis

| Elemento de React | ¿Dónde lo usas en este problema? | ¿Por qué es el adecuado? |
| 
| **Componente** | En `MascotaCard.jsx` y próximamente en `ListaMascotas.jsx`. | Porque permite dividir la interfaz de AdoptaPet en piezas independientes, reutilizables y fáciles de mantener. |
| **JSX** | En el `return` de `MascotaCard.jsx` y `App.jsx`. | Facilita la escritura de la estructura visual (HTML) directamente dentro de la lógica de JavaScript. |
| **Props** | Al pasar los datos (nombre, raza, edad, especie, etc.) desde un componente padre hacia `MascotaCard`. | Permite que `MascotaCard` sea dinámico y muestre información distinta para cada mascota sin reescribir el componente. |
| **Estado (useState)** | Se usaría si implementamos un filtro por especie (Perro/Gato) o un contador de mascotas adoptadas. | Porque permite que la interfaz reaccione y se actualice automáticamente cuando el usuario interactúa (ej. al seleccionar un filtro). |
| **Renderizado de listas (.map + key)** | En la Etapa 3, al recorrer el arreglo `mascotas.js` para generar múltiples tarjetas. | Es la forma óptima en React de transformar un arreglo de datos en una lista de elementos visuales, usando la `key` (como el id) para el rendimiento. |
| **Renderizado condicional** | En `MascotaCard` al cambiar el estilo según la especie, o si se muestra un aviso de "Adopción Urgente". | Permite que la aplicación tome decisiones visuales basadas en los datos (ej. si `adopcionUrgente` es true, mostrar un cartel rojo). |

---

Preguntas de Desarrollo

1. ¿Qué ventaja tiene dividir el directorio en componentes en lugar de escribir todo en un solo archivo?
Dividir la aplicación en componentes permite reutilizar código, como en el caso de ⁠MascotaCard⁠, que se usará múltiples veces para cada mascota sin tener que reescribir su estructura HTML. Además, mejora drásticamente el orden y el mantenimiento del proyecto; si hay un error visual en la tarjeta, vas directo a ese archivo específico sin perderte en un código gigante.
2. ¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno tomado de esta aplicación.
Las ⁠props⁠ son datos inmutables que un componente recibe desde su padre; por ejemplo, la ⁠especie⁠ o la ⁠edad⁠ que recibe ⁠MascotaCard⁠ para mostrar la información estática. El estado, por el contrario, es dinámico y lo maneja internamente el componente; un ejemplo en esta app sería crear un estado para controlar un filtro que muestre solo a los perros cuando el usuario hace clic en un botón.


