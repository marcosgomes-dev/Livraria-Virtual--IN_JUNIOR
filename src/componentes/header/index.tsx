import styles from './styles.module.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.areaLogo}>
                <Link to='/home'>
                    <img src="/src/assets/logo.png" alt="logo"/>
                </Link>
            </div>

            <div className={styles.areaIcones}>
                <div className={styles.iconeUsuario}>
                    <Link to='/'>
                        <img src="/src/assets/icone_user.png" alt="usuário" />
                    </Link>
                </div>
                <div className={styles.iconeCarrinho}>
                    <img src="/src/assets/icone_carrinho.png" alt="carrinho" />
                </div>
            </div>
        </header>
    );
}
