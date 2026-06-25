
import { mascotas } from './data/mascotas'; 

function App() {
  

  console.log("Datos cargados correctamente:", mascotas);

  return (
    <div>
      <h1>AdoptaPet</h1>
      <p>Abre la consola del navegador (F12) para ver el array de mascotas.</p>
    </div>
  )
}

export default App;