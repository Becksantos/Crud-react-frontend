import React from "react";
import Logo from '../../assets/logo.png';
import Sidebar from '../../assets/sidebar.png';
import './user-style.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";


// Ícones 
import { TiArrowSortedDown } from "react-icons/ti"; //ícone para ocultar o submenu do controle de acesso
import { IoIosArrowDropleft } from "react-icons/io";
import { CiUser } from "react-icons/ci"; //ícone usuário
import { BiSolidUserBadge } from "react-icons/bi"; //ícone controle de acesso
import { MdOutlineArrowBackIos } from "react-icons/md"; //ícone ao lado do título - Cadastro de Usuário
import { IoEyeOutline } from "react-icons/io5"; //ícone da senha 

function cadastro({ mode }) {
  const {id} = useParams();

 
  const [sidebarOpen, setsSidebarOpen] = useState(true);

  const [submenuOpen, setSubmenuOpen] = useState(false);

  //const [showPassword, setShowPassword] = useState(false);

  //const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    matricula: "",
    senha:"",
    repetirSenha: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = 
   formData.nome.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.matricula.trim() !== "" &&
    formData.senha.trim() !== "" &&
    formData.repetirSenha.trim() !== "" &&
    formData.senha === formData.repetirSenha
  

const handleSubmit = async (e) => {
  e.preventDefault();

  if (isFormValid) {
    try {
      const response = await axios.post("http://localhost:3000/usuarios", formData);
      // Sucesso
      alert("Usuário cadastrado com sucesso!");
      console.log(response.data);
    } catch (error) {
      // Erro
      alert("Erro ao cadastrar usuário!");
      console.error(error);
    }
  }
};

return (

  <div>
  <h2>{mode === "create" ? "Cadastro de Usuários" : "Edição de Usuários"}</h2>


        <div className="home-container">
          {/* Sidebar */}
          <aside className={`sidebar ${sidebarOpen ? "open" : "collapsed"}`}
          style={{position:'fixed'}}
          >
            <img src={Logo} alt="Logo WenLock" className="logo" />
    
             <button className='btn-arrow' onClick={() => setsSidebarOpen(!sidebarOpen)}>
           <IoIosArrowDropleft
           style={{color:'red', width:'20px', height:'20px', transform: sidebarOpen ? "rotate(0deg)" : "rotate(180deg)", transition: "0.3s", position:'fixed', left:'240px'}}
           />
          </button>
    
            <nav>
              <ul>
                <li className="sidebar-home">
                  <a href="#index.jsx">
                    <img src={Sidebar} alt="Ícone Home" className='icon-home' />
                    <span
                    style={{position:'absolute', left:'35px', top:'8px'}}
                    >Home</span>
                  </a>
                </li>
    
                <li className='sidebar-control'>
                  <div className='control-header'
                  onClick={() => setSubmenuOpen(!submenuOpen)}>
                     <BiSolidUserBadge
                    style={{color:'#f3f3f3', width:'18px', height:'18px',position:'relative', top:'12px', left:'5px'}} />
                   <span
                   style={{position:'relative', top:'10px', left:'5px'}}
                   >Controle de Acesso</span>
    
                     <TiArrowSortedDown
                    style={{transform: submenuOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s", color:'#red', position:'relative', top:'10px', left:'8px'}} />
                    </div>
                   
                    {/* Submenu visível apenas se submenuOpen for true*/}
                    {submenuOpen && (
                     <li className='sidebar-user'>
                   < CiUser
                   style={{color:"#f3f3f3", width:'15px', height:'15px', position:'relative', top:'8px', left:'5px'}}
                   />
                    <Link to={"/usuarios"}
                    style={{color:'#f3f3f3', position:'relative', top:'8px', left:'5px'}}
                    >Usuários</Link>
                    </li>
                    )}
                    </li>
                    </ul>
                  </nav>
                 
          <footer className="sidebar-footer">
          <p>© WenLock</p>
          <p className='footer'>Powered by Conecthus</p>
          <p className='footer'>V 0.0.0</p>
        </footer>

      </aside>

         {/* Main - Cadastro de Usuários */}                         
        <div className='container-main'>

         <div className='top-bar'></div>
         <MdOutlineArrowBackIos
          style={{color:'#f3f3f3',
           width:'20px',
            height:'20px'}} />
             <h3 className="main-title"
             style={{color:'#0B2B25',
              fontSize:'38px', 
              fontWeight:'bold',
            }} 

            > Cadastro de Usuário</h3>
        <button>
         
        </button>
      
  
    <form className="form" onSubmit={handleSubmit}>
         <h3 className="section-title"
       style={{fontSize:'14px',
        color:'#0B2B25' }} >
       Dados do Usuário
       </h3>

        <input type="text"
        name="nome"
        placeholder="Insira o nome completo*"
        value={formData.nome}  
        onChange={handleChange}
        required
        style={{background:'#f4f4f4', 
          width:'45%',
           height:'30px',
           color: 'black',
           margin:'10px'}}

           />

  
        <input type="email" 
        name="email"
        placeholder="Insira o e-mail*"
        value={formData.email}
        onChange={handleChange}
        required
         style={{background:'#f4f4f4', 
          width:'45%',
           height:'30px',
           color: '#0B2B2599'}}
        />

<div>
        <input type="number"
        name="matricula"
        placeholder="Insira o número da matrícula" 
        value={formData.matricula}
        onChange={handleChange}
        required
         style={{background:'#f4f4f4', 
          width:'45%',
           height:'30px',
           color: '#0B2B2599',
          margin:'10px'}}
        />
      <small style={{ color: "#6F7D7D" }}>
      Máx. 30 caracteres
    </small>
</div>


      
        <p
        style={{color:'#0B2B25', fontSize:'14px', fontWeight:'bold'}}
        >Dados de acesso</p>

        <input type="password"
        name="senha"
        placeholder="Senha"
        value={formData.senha}
        onChange={handleChange}
        required
        minLength={6}
        maxLength={6}
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6}$"
        title="A senha deve ter exatamente 6 caracteres, incluindo letras e números." //mensagem que irá aparecer quando a validação falha. 
         style={{background:'#f4f4f4', 
          width:'45%',
           height:'30px',
           color: '#0B2B2599',
           margin:'10px'}}
           />
           <IoEyeOutline/>

        <input type="password" name="repetirSenha" id="" placeholder="Repetir Senha"
        value={formData.repetirSenha}
        onChange={handleChange}
        required
        title="A senha não corresponde" 
         style={{background:'#f4f4f4', 
          width:'45%',
           height:'30px',
           color: '#0B2B2599'}}
        />

        <button
  type="submit"
  disabled={!isFormValid}
>
  {mode === "create" ? "Cadastrar" : "Salvar"}
</button>

{mode === "edit" && (
  <button type="button" onClick={() => setShowCancelConfirm(true)}
  style={{color:'red'}}
  >
    Cancelar
  </button>
)}
        </form>
        </div>
    </div>
    </div>
    );
}

export default cadastro;

