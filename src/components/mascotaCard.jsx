import React from "react";
import PropTypes from "prop-types";
import "./mascotaCard.css";

const MascotaCard = ({ nombre, raza, edad, especie, descripcion, caracteristicas }) => {
  // Función para determinar el estilo según la especie
  const getEspecieClase = (especie) => {
    switch (especie.toLowerCase()) {
      case "perro":
        return "mascota-card perro";
      case "gato":
        return "mascota-card gato";
      default:
        return "mascota-card otro";
    }
  };

  return (
    <div className={getEspecieClase(especie)}>
      <h2>{nombre}</h2>
      <p><strong>Raza:</strong> {raza}</p>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Especie:</strong> {especie}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Características:</strong> {caracteristicas}</p>
    </div>
  );
};

// Definición de tipos de las props
MascotaCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  raza: PropTypes.string.isRequired,
  edad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  especie: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  caracteristicas: PropTypes.string.isRequired,
};

// Valores por defecto para las props
MascotaCard.defaultProps = {
  nombre: "Nombre desconocido",
  raza: "Raza desconocida",
  edad: "Edad desconocida",
  especie: "Otro",
  descripcion: "Sin descripción",
  caracteristicas: "Sin características",
};

export default MascotaCard;