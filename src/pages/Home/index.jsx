import Logo from '../../assets/logo.png';
import Sidebar from '../../assets/sidebar.png';
import Image from '../../assets/img_inicial.png';
import './style.css';
import { Link } from "react-router-dom";
import { useState } from 'react';


// Ícones 
import { TiArrowSortedDown } from "react-icons/ti"; //ícone para ocultar o submenu do controle de acesso
import { IoIosArrowDropleft } from "react-icons/io";
import { CiUser } from "react-icons/ci"; //ícone usuário
import { BiSolidUserBadge } from "react-icons/bi"; //ícone controle de acesso 


function Home() {

  const [sidebarOpen, setsSidebarOpen] = useState(true);

  const [submenuOpen, setSubmenuOpen] = useState(false);

  //const [searchTerm, setSearchTerm] = useState(''); //termo que será digitado 
  //const [searchResults, setSearchResults] = useState([]); // resultado da busca 

  /*const handleSearch = () => {
    try {
      const response = await fetch (`https://localhost :3000/api`)
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Nenhum resultado encontrado:', error);
    }
  };
*/

  return (
    <div className="home-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "collapsed"}`}>
        <img src={Logo} alt="Logo WenLock" className="logo" />

         <button className='btn-arrow' onClick={() => setsSidebarOpen(!sidebarOpen)}>
       <IoIosArrowDropleft
       style={{color:'black', width:'50px', height:'50px', transform: sidebarOpen ? "rotate(0deg)" : "rotate(180deg)", transition: "0.3s" }}
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
                style={{transform: submenuOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s", color:'#f3f3f3', position:'relative', top:'10px', left:'8px'}} />
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

        {/* Footer sidebar */}
        <footer className="sidebar-footer">
          <p>© WenLock</p>
          <p className='footer'>Powered by Conecthus</p>
          <p className='footer'>V 0.0.0</p>
        </footer>

      </aside>

      {/* Conteúdo Principal */}
      <div className='main-container'>
        <div className='top-bar'></div>
        <h3>Home</h3>

        <div className="main-box">
          <div className='main-text'>
            <p>Olá Millena!</p>
            <span>22, Novembro 2024</span>
          </div>

          <div className='image-area'>
            <img src={Image} alt="Imagem Home" className='image-inicio' width='320px' height='320px' />
          </div>

          <section className="welcome-section">
            <h2>Bem-vindo ao WenLock!</h2>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home

