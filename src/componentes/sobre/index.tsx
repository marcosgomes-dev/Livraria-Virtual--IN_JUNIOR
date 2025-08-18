import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  sinopse: string;
  preco: number;
  capa: string;
}

export default function BookDetails() {
  const { id } = useParams(); // obtém o ID pela URL
  const [livro, setLivro] = useState<Livro | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/livros/${id}`)
      .then(response => setLivro(response.data))
      .catch(error => console.error("Erro ao buscar livro:", error));
  }, [id]);

  if (!livro) return <p className={styles.loading}>Carregando...</p>;

  return (
    <>
    <br /> <br /> <br />
      <div className={styles.container}>
        <button className={styles.voltar} onClick={() => navigate("/home")}>
          &lt; Detalhes do livro
        </button>

        <div className={styles.bookDetails}>
          <div className={styles.bookCard}>
            <img src={livro.capa} alt={livro.titulo} className={styles.livroCapa} />
          </div> 

          <br/><br/>

          <div className={styles.bookInfo}>
            <div className={styles.info}>
              <h1 className={styles.titulo}>{livro.titulo}</h1>
              <h2 className={styles.autor}>{livro.autor}</h2>
            </div>

            <div className={styles.containerDescription}>
              <div className={styles.textoSinopse}>
                <h3 className={styles.sinopseTitulo}>Sinopse</h3>
                <p className={styles.sinopse}>{livro.sinopse}</p>
              </div>
              <button className={styles.botaoCarrinho}>
                <span>R$ {livro.preco.toFixed(2)}</span>
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <br /> <br /> <br /> <br /> <br />
      </footer>
    </>
);
}