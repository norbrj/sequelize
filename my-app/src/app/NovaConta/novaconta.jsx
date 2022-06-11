import React, {useState} from 'react';
import {Link, Redirect}  from 'react-router-dom';
import './novaconta.css';
const axios = require('axios');
// const Cors= require('cors');


const instance = axios.create({
  baseURL: 'http://localhost:3333/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

function NovaConta(){

  const [email, setEmail] = useState('');
  const [CPF, setCPF] = useState('');
  const [Nome, setNome] = useState('');

  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('');


  async function cadastrarUsuario() {

    if (!email || !CPF || !Nome){
      setMensagem('Informe todos os campos');
      return;
    }
    try {
      const response = await instance.post('/acesso',{
       
          nome: Nome,
          cpf : CPF,
          email : email
        
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  



  // function cadastrarUsuario(){
  //   setMensagem('');

  //   if (!email || !CPF || !Nome){
  //     setMensagem('Informe todos os campos');
  //     return;
  //   }

  //   // firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
  //   //   setSucesso('S');
  //   // }).catch(error => {  
  //   //   setSucesso('N');    
  //   //   if (error.message === 'Password should be at least 6 characters') {
  //   //     setMensagem('A senha deve ter pelo menos 6 caracteres');
  //   //   } else if (error.message === 'The email address is badly formatted.') {
  //   //     setMensagem('O email não é válido');
  //   //   }
  //   //   else if (error.message === 'The email address is already in use by another account.') {
  //   //     setMensagem('Esse email já está em uso por outra conta');
  //   //   }
  //   //   else {
  //   //     setMensagem('Erro ao criar conta: ' + error.message);
  //   //   }
            
  //   // }
  //   //)
  // }

    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-2 w-100" src="/Images/logo-small2.png" alt="" />
        <h1 className="h4 mb-3 fw-normal">Criar Conta</h1>

            <div className="form-floating">
              <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
              <label htmlFor="floatingInput">E-mail</label>
            </div>
            <div className="form-floating">
              <input onChange={(e) => setCPF(e.target.value)} type="text" className=" form-control" id="floatingInput" placeholder="CPF" />
              <label htmlFor="floatingInput">CPF</label>
            </div>
            <div className="form-floating">
              <input onChange={(e) => setNome(e.target.value)} type="text" className="mb-4 form-control" id="floatingInput" placeholder="Nome" />
              <label htmlFor="floatingInput">Nome</label>
            </div>

        
        <button onClick={cadastrarUsuario} className="w-100 btn btn-lg btn-primary" type="button">Criar conta</button>

        {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
        {sucesso === 'S' ? <Redirect to='/app/home' /> : null}

        <div className="login-links mt-5">
          <Link to="/app" className="mx-3">Já tenho uma conta.</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; CSC - Sistema</p>

      </form>
    </div>
  }

export default NovaConta;