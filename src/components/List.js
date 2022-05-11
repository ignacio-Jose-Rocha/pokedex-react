import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function List() {
    let correo = localStorage.getItem('correo');
    const [pokeList, setPokeList] = useState([]);
    useEffect(() => {
        const endPoint = 'https://pokeapi.co/api/v2/pokemon';
        axios.get(endPoint).then(res => {
            const apiData = res.data.results;
            setPokeList(apiData);
            console.log(apiData);
        })
    }, [setPokeList])


    return (
        <>
            {!correo && <Navigate to="/Login" />}


            <div class="sucess">
                <h1 > Lista de pokemon </h1>
                <h1>bienvenido: {correo}</h1>


            </div>
            <br />

            <div className="row p-5 float-right">

                {
                    pokeList.map((oneMovie, idx) => {
                        return (
                            <>

                                <div className='col-5' key={idx} >


                                    <div className="card mb-5 pt-5 pb-5">

                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx + 1}.png`} class="card-img-top" alt="..." />

                                        <div className="card-body">
                                            <h5 className="card-title">{oneMovie.name}</h5>

                                            <div className='container-fluid'>
                                                <Link to={`/Detalle?id=${idx}`} className="btn btn-primary">detalles</Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </>
                        )

                    }

                    )


                }



            </div>

            <button className="btn btn-primary" onClick={(e) => {
                localStorage.clear(e);
            }}><Link to="/"></Link>Logout</button>
        </>
    )
}

export default List;