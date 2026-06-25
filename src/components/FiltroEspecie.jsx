import React from "react";
import PropTypes from "prop-types";

const FiltroEspecie = ({ filtro, setFiltro }) => {
  return (
    <div>
      <button onClick={() => setFiltro("Todas")} className={filtro === "Todas" ? "active" : ""}>
        Todas
      </button>
      <button onClick={() => setFiltro("Perro")} className={filtro === "Perro" ? "active" : ""}>
        Perro
      </button>
      <button onClick={() => setFiltro("Gato")} className={filtro === "Gato" ? "active" : ""}>
        Gato
      </button>
      <button onClick={() => setFiltro("Otro")} className={filtro === "Otro" ? "active" : ""}>
        Otro
      </button>
    </div>
  );
};

FiltroEspecie.propTypes = {
  filtro: PropTypes.string.isRequired,
  setFiltro: PropTypes.func.isRequired,
};

export default FiltroEspecie;