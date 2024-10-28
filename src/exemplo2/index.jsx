import { useEffect, useState } from "react";

export default function App() {
  
  const [lista, setFotos] = useState([]);

  useEffect(() => { 
    const buscarUsuario  = async () => {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dados = await resposta.json();              
        setFotos(dados);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {lista.map(fotos => (
          <li key={fotos.id}>
            <h2>{fotos.title}</h2>
            <p>{fotos.description}</p>
            <p>álbum: {fotos.albumId}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
