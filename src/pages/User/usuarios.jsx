import { useState, useEffect } from "react";
import Logo from '../../assets/logo.png';
import SidebarIcon from '../../assets/sidebar.png';
import { Link } from "react-router-dom";
import './user-style.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Ícones 
import { IoIosArrowDropleft } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5"; //ícone cadastrar novo usuário
import { IoIosSearch } from "react-icons/io"; //ícone de pesquisar usuário
import { CiUser } from "react-icons/ci"; //ícone usuário
import { BiSolidUserBadge } from "react-icons/bi"; //ícone controle de acesso
import { TiArrowSortedDown } from "react-icons/ti"; //ícone para ocultar o submenu do controle de acesso
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";

function User() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [submenuOpen, setSubmenuOpen] = useState(false);

  const navigate = useNavigate();

  //Estados da Pesquisa
  const [searchTerm, setSearchTerm] = useState("");

  const [results, setResults] = useState([]);

  const [notFound, setNotFound] = useState(false);

  //Função Pesquisa
  useEffect(() => {
  const fetchData = async () => {
    if (searchTerm.trim() === "") {
      setResults([]);
      setNotFound(false);
      return;
    }

    try {
   const response = await axios.get(`http://localhost:3000/usuarios/search?nome=${searchTerm}`);
const data = response.data;

      if (data && !Array.isArray(data)) {
        setResults([data]); // transforma objeto em array
        setNotFound(false);
      } else if (Array.isArray(data) && data.length > 0) {
        setResults(data);
        setNotFound(false);
      } else {
        setResults([]);
        setNotFound(true);
      }
    } catch (error) {
      console.error(error);
      setNotFound(true);
    }
  };

  fetchData();
}, [searchTerm]);

const [showConfirm, setShowConfirm] = useState(false);
const [userToDelete, setUserToDelete] = useState(null);

const [selectedUser, setSelectedUser] = useState(null);
const [showDetails, setShowDetails] = useState(false);




  return (
    <div className="container">
      <aside className={`sidebar ${sidebarOpen ? "open" : "collapsed"}`}>
        <div className="sidebar-header">
          <img src={Logo} alt="Logo WenLock" className="logo" />

          {/* Botão da seta */}
          <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <IoIosArrowDropleft
              style={{ color: 'gray', width: '20px', height: '20px', transform: sidebarOpen ? "rotate(0deg)" : "rotate(180deg)", transition: "0.3s" }} />
          </button>
        </div>

        <nav>
          <ul>
            <li className="sidebar-home">
              <a href="#index.jsx">
                <img src={SidebarIcon} alt="Ícone Home" className='icon-home' />
                {sidebarOpen && <Link to={"/"}
                  style={{ color: '#f3f3f3' }}
                >Home</Link>}
              </a>
            </li>

            <li className='sidebar-control'
              onClick={() => setSubmenuOpen(!submenuOpen)}>
              <a href="#controle" >
                <BiSolidUserBadge
                  style={{ color: '#f3f3f3', width: '18px', height: '18px', position: 'relative', top: '12px', left: '5px' }} />
                <span
                  style={{ position: 'relative', top: '10px', left: '5px' }}
                >Controle de Acesso</span>

                <TiArrowSortedDown
                  style={{ transform: submenuOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s", color: 'white', position: 'relative', top: '10px', left: '8px' }} />
              </a>

              {submenuOpen && (
                <li className='sidebar-user'>
                  < CiUser
                    style={{ color: "#f3f3f3", width: '15px', height: '15px' }}
                  />
                  <span>Usuários</span>
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

      {/* Conteúdo Principal */}
      <div className='container-main'>
        <div className='top-bar'></div>
        <h3>Usuários</h3>


      <div className="search-btn">
   <IoIosSearch style={{ width: '15px', height: '15px', color:'gray' }} />
  <input
    className='search-btn'
    type="text"
    placeholder="Pesquisar"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}/>
     
</div>


        <button className='btn-register' onClick={() => navigate("/cadastro")}>
          < IoAddOutline
            style={{ color: 'white', width: '10px', height: '10px' }}
          />
          Cadastrar Usuário
        </button>

<div className="table-header">
  <p>Nome</p>
  <p>Ações</p>
</div>


        {/*Resultado da Pesquisa */}
        {notFound && <h3
        style={{color:'#0B2B25'}}>
        Nenhum resultado encontrado.</h3>
        }

        {results.map((user) => (
          <div key={user.id} className="table-row">
            <span>{user.nome}</span>

            <span>
              <button onClick={() => { setSelectedUser(user); setShowDetails(true); }}>
              <FaRegEye style={{ fontSize: "18px", color: "#0B2B25" }} />
              </button>

              <button onClick={() => navigate(`/usuarios/editar/${user.id}`)}>

                <FaPen style={{ fontSize: "18px", color: "#0B2B25" }} />
              </button>

              <button onClick={() => { setShowConfirm(true); setUserToDelete(user.id); }}>
            <IoTrashBinOutline style={{ fontSize: "18px", color: "#0B2B25" }} />
          </button>

            </span>
          </div>
        ))}

{showDetails && selectedUser && (
        <div className="modal-overlay">
          <div className="modal">
            <h5
            style={{color:'#0B2B25', fontSize:'24px'}}
            >Visualizar Usuário</h5>

            <h4
            style={{color:'#0B2B25', fontSize:'14px'}}
            >Dados do Usuário</h4>
            <p>Nome: {selectedUser.nome}</p>
            <p>Matrícula: {selectedUser.matricula}</p>
            <p>E-mail: {selectedUser.email}</p>

            <h4
             style={{color:'#0B2B25', fontSize:'14px'}}
            >Detalhes</h4>
            
            <p>Data de criação: {selectedUser.createdAt || "Não disponível"}</p>
            <p>Última edição: {selectedUser.updatedAt || "Nenhuma"}</p>

            <button onClick={() => setShowDetails(false)}>Fechar</button>
          </div>

        </div>
      )}

{showConfirm && (
  <div className="confirm-overlay">
    <div className="confirm">
      <h3>Deseja excluir?</h3>
      <p>O usuário será excluído.</p>
      <div className="confirm-actions">
        <button onClick={() => handleDelete(userToDelete)}>Sim</button>
        <button onClick={() => setShowConfirm(false)}>Não</button>
      </div>
    </div>
  </div>
)}






      </div>
    </div>
  );
}

export default User;