import swal from '@sweetalert/with-react';
import { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
function Login() {
    let navigate = useNavigate();
    const [register, setRegister] = useState(false);
    
    const SubmitHandler = (event) => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (email === 'test@test.com' && password === 'test') {

            setRegister(true);
            localStorage.setItem('correo', event.target.email.value);


        }
        else {
            swal('error', 'usuario o contraseña incorrectos', 'error');
        }

    }
    return (
        <>
            {register && <Navigate to="/List" />}


            <h2>Aplicacion de pokedex</h2>

            <form onSubmit={SubmitHandler}>
                <label>
                    <span>Email Address:</span>
                    <br />
                    <input type="text" name="email" />
                </label>

                <br />
                <label>
                    <span>Password:</span>
                    <br />
                    <input type="password" name="password" />
                    <br />
                </label>


                <br />
                <label><h1><br/></h1></label>
                <button type="submit">Sign in</button>


            </form>


            <br />

           

        </>
    )

}

export default Login;