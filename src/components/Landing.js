import React from 'react'
import { Link } from 'react-router-dom';
const Landing = () => {
    return (
        <div>

            <h1>APLICACION DE POKEDEX PARA BOOTCAMP DEVLIGHTS</h1>
            <p>LA SIGUIENTE APLICACION DESARROLLADA EN REACT PRETENDE MOSTRAR EL CONSUMO DE API
                DE POKEMONES Y MOSTRARLOS EN FORMA DE LISTA Y POSTERIOR DETALLE DE CADA POKEMON
            </p>
            <button>
                <Link to="/Login" className="btn btn-primary">inicio</Link></button>

        </div>
    )
}

export default Landing