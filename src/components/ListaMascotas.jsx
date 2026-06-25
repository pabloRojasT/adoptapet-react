import React from "react";
import PropTypes from "prop-types";
import MascotaCard from "./mascotaCard";

const ListaMascotas = ({ mascotas }) => {
  return (
    <div>
      {mascotas.map((mascota) => (
        <MascotaCard
          key={mascota.id} // Usar el id como key
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
        />
      ))}
    </div>
  );
};

// Definición de tipos de las props
ListaMascotas.propTypes = {
  mascotas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      nombre: PropTypes.string.isRequired,
      raza: PropTypes.string.isRequired,
      edad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      especie: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      caracteristicas: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListaMascotas;