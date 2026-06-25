import React from "react";
import ListaMascotas from "./components/ListaMascotas";

const datosMascotas = [
  {
    id: 1,
    nombre: "Firulais",
    raza: "Labrador",
    edad: 3,
    especie: "Perro",
    descripcion: "Un perro muy amigable.",
    caracteristicas: "Juguetón, leal, activo",
  },
  {
    id: 2,
    nombre: "Michi",
    raza: "Siames",
    edad: 2,
    especie: "Gato",
    descripcion: "Un gato muy curioso.",
    caracteristicas: "Independiente, cariñoso, ágil",
  },
  {
    id: 3,
    nombre: "Tweety",
    raza: "Canario",
    edad: 1,
    especie: "Otro",
    descripcion: "Un canario que canta mucho.",
    caracteristicas: "Pequeño, alegre, ruidoso",
  },
];

const App = () => {
  return (
    <div>
      <h1>Lista de Mascotas</h1>
      <ListaMascotas mascotas={datosMascotas} />
    </div>
  );
};

export default App;