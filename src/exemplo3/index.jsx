import { useEffect, useState } from "react";

export default function App() {
  
  const [lista, setUsuario] = useState([]);

  useEffect(() => { 
    const  encontrarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuario(dados.results);
    }
    encontrarUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {lista.map(usuario => (
          <li key={usuario.login.uuid}>
            <h2>{usuario.login.username}</h2>
            <p>Nome: {usuario.name.first} {usuario.name.last}</p>
            <p>Cidade: {usuario.location.city}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
