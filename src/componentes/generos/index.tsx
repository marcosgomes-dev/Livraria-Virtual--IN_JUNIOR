import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css"

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  preco: number;
  capa: string;
}

export default function GeneroPage() {
  const { genero } = useParams();
  const [listaDeLivros, setListaDeLivros] = useState<Livro[]>([]);
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const navegar = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/livros?genero=${genero}`)
      .then(resposta => setListaDeLivros(resposta.data))
      .catch(erro => console.error("Erro ao buscar livros:", erro));
  }, [genero]);

  const livrosFiltrados = listaDeLivros.filter(livro =>
    livro.titulo.toLowerCase().includes(textoPesquisa.toLowerCase())
  );

  return (
      <>
        <div className={styles.paginaGenero}>
          <input
            type="text"
            placeholder="Pesquisar por título"
            className={styles.campoPesquisa}
            value={textoPesquisa}
            onChange={(e) => setTextoPesquisa(e.target.value)}
          />
          <div className={styles.cabecalhoGenero}>
            <button className={styles.botaoVoltar} onClick={() => navegar("/home")}>
              &lt; {genero}
            </button>
          </div>
  
          <div className={styles.gridLivros}>
            {livrosFiltrados.length > 0 ? (
              livrosFiltrados.map((livro) => (
                <div 
                  key={livro.id} 
                  className={styles.cardLivro} 
                  onClick={() => navegar(`/details/${livro.id}`)}
                >
                  <img src={livro.capa} alt={livro.titulo} className={styles.imagemLivro} />
                  <div className={styles.conteudoCard}>
                    <p className={styles.tituloLivro}>{livro.titulo}</p>
                    <p className={styles.autorLivro}>{livro.autor}</p>
                    <span className={styles.precoLivro}>R$ {livro.preco.toFixed(2)}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.mensagemNenhumLivro}>Nenhum livro encontrado.</p>
            )}
          </div>
        </div>
      </>
    );
}
