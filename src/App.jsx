import React, { useState } from "react";
import ListaMascotas from "./components/ListaMascotas";
import FiltroEspecie from "./components/FiltroEspecie";

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
  const [filtro, setFiltro] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  // Filtrar las mascotas según el filtro y la búsqueda
  const mascotasFiltradas = datosMascotas.filter((mascota) => {
    const coincideEspecie = filtro === "Todas" || mascota.especie.toLowerCase() === filtro.toLowerCase();
    const coincideBusqueda =
      mascota.nombre.toLowerCase().includes(busqueda.trim().toLowerCase());
    return coincideEspecie && coincideBusqueda;
  });

  return (
    <div>
      <h1>Lista de Mascotas</h1>
      <FiltroEspecie filtro={filtro} setFiltro={setFiltro} />
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value.slice(0, 50))} // Limitar el largo a 50 caracteres
      />
      {mascotasFiltradas.length > 0 ? (
        <ListaMascotas mascotas={mascotasFiltradas} />
      ) : (
        <p>No hay mascotas que coincidan</p>
      )}
    </div>
  );
};

export default App;