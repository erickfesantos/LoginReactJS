import React from 'react';
import './Login.css'
import {FaUser, FaLock} from "react-icons/fa"


const Login = () => {
  return (
          <div className='conteudo'>
            <form action=''>
              <h1>Login</h1>

              <div className='entrada-de-dados'>
                <input type='text' placeholder='Usuário' required />
                <FaUser className='icon' />
              </div>

              <div className='entrada-de-dados'>
                <input type='password' placeholder='Senha' required />
                <FaLock className='icon' />
              </div>

              <div className='relembrar-senha'>
                <label><input type='checkbox' />Lembre me</label>
                <a href='#' >Esqueceu sua senha?</a>
              </div>

              <button type='submit' >Login</button>

              <div className='ou'><a>Ou</a></div>

              <button type='submit' >Entre com Facebook</button>


              <div className='registro' > 
                <p>Ainda não tem uma conta? <a href='#'>Cadastre-se</a></p>
              </div>
              

            </form>
          </div>
        )
};

export default Login