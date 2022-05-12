import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Detalle() {
  let correo = localStorage.getItem('correo');

  let useParams = new URLSearchParams(document.location.search);
  let id = useParams.get("id");
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {

    const endPoint = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios.get(endPoint).then(response => {
      const apiData = response.data;
      setPokemon(apiData);


    })
      .catch(error => {
        console.log("hubo errores con la api");
      })
  }, [id]);

  return (
    <>
      {!correo && <Navigate to="/Login" />}


      <div className="contenedor">
        <h2>Detalle del pokemon</h2>
      </div>
      {!pokemon && <div className="contenedor"><div class="lds-dual-ring"></div></div>}


      {pokemon && <>
        <div className='contenedor'>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} class="card-img-top" alt="..." />

          <h2>nombre:{pokemon.name}</h2>
          <h2>orden:{pokemon.order}</h2>
          <h2>peso:{pokemon.weight}</h2>
          <h2>altura:{pokemon.height}</h2>
          <h2>tipo:{pokemon.types[0].type.name}</h2>
          <h2>habilidades:{pokemon.abilities[0].ability.name}</h2>

        </div>
        <div className='row'>


          <div className='col-2'>






          </div>
        </div>
      </>}

      
        <div className="contenedor">
            <Link to='/List'>Regresar</Link>
        </div>
    </>
  )


}

export default Detalle;