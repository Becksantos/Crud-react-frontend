function UserForm({ mode, userId }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    matricula: "",
    senha: "",
    repetirSenha: ""
  });

  // Se for edição, carrega os dados do usuário
  useEffect(() => {
    if (mode === "edit" && userId) {
      axios.get(`http://localhost:3000/usuarios/${userId}`)
        .then(response => {
          setFormData({
            nome: response.data.nome,
            email: response.data.email,
            matricula: response.data.matricula,
            senha: "",
            repetirSenha: ""
          });
        })
        .catch(error => console.error(error));
    }
  }, [mode, userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.senha !== formData.repetirSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      if (mode === "create") {
        await axios.post("http://localhost:3000/usuarios", formData);
        alert("Usuário cadastrado com sucesso!");
      } else {
        await axios.patch(`http://localhost:3000/usuarios/${userId}`, formData);
        alert("Usuário atualizado com sucesso!");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar usuário");
    }
  };

  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  return (
    <form onSubmit={handleSubmit}>
      <h2>{mode === "create" ? "Cadastro de Usuários" : "Edição de Usuários"}</h2>

      <input name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="matricula" value={formData.matricula} onChange={handleChange} placeholder="Matrícula" />
      <input type="password" name="senha" value={formData.senha} onChange={handleChange} placeholder="Senha" />
      <input type="password" name="repetirSenha" value={formData.repetirSenha} onChange={handleChange} placeholder="Repetir Senha" />

      <div className="form-actions">
        <button type="submit">{mode === "create" ? "Cadastrar" : "Salvar"}</button>
        {mode === "edit" && (
          <button type="button" onClick={() => setShowCancelConfirm(true)}
          style={{color:'#ffff', color:'#0B2B25', border:'1px solid #0B2B25'}}
            >Cancelar</button>
        )}
      </div>
    </form>
  );
}

export default UserForm;

//