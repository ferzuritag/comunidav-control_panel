import React from 'react'
import { Banner } from './Banner'
import '../index.css'
import foot from './Pie.svg'
export const Login = () => {
    return (
        <div className= '.container'>
            <Banner/>
            <section className = 'midBox'>
                <div className = 'loginBox'>
                    <h1>Iniciar Sesión</h1>
                    <form>
                        <input type = 'text' placeholder = 'Usuario'></input>
                        <br/>
                        <input type ='password' placeholder ="Contraseña"></input>
                        <br/>
                        <div className = 'checkbox'>
                            
                            <input type = 'checkbox' name = 'Recordar Contrasena' id = 'recordar' />
                            <label for= 'recordar'>Recordar Contraseña</label>
                        </div>
                    </form>
                    <button className = 'sendBtn'>Enviar</button>
                </div>
            </section>
            <footer><img src = {foot}/></footer>
            
        </div>
        
    )
}
