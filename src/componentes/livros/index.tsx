import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  preco: number;
  capa: string;
}

export default function BooksList() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/livros")
      .then(response => {
        setLivros(response.data);
      })
      .catch(error => console.error("Erro ao buscar livros:", error));
  }, []);

  const livrosPorGenero = livros.reduce((acc, livro) => {
    acc[livro.genero] = acc[livro.genero] || [];
    if (acc[livro.genero].length < 4) {
      acc[livro.genero].push(livro);
    }
    return acc;
  }, {} as Record<string, Livro[]>);

  return (
    <div className={styles.areaLivros}>
      {Object.entries(livrosPorGenero).map(([genero, livros]) => (
        <div key={genero} className={styles.blocoGenero}>
          <div className={styles.cabecalhoGenero}>
            <h2>{genero}</h2>
            <button 
              className={styles.botaoVerMais} 
              onClick={() => navigate(`/genre/${genero}`)}
            >
              Ver mais
            </button>
          </div>

          <div className={styles.gradeLivros}>
            {livros.map((livro) => (
              <div 
                key={livro.id} 
                className={styles.cartaoLivro} 
                onClick={() => navigate(`/details/${livro.id}`)}
              >
                <img 
                  src={livro.capa} 
                  alt={livro.titulo} 
                  className={styles.imgCapaLivro} 
                />
                <div className={styles.infoLivro}>
                  <p className={styles.tituloLivro}>{livro.titulo}</p>
                  <p className={styles.autorLivro}>{livro.autor}</p>
                  <span className={styles.precoLivro}>
                    R$ {livro.preco.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
