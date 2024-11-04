
import Link from "next/link"
import styles from './registrar.module.css';

import imgLogo from './img/logo-fundo.png'

function Registrar() {
    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <img src={imgLogo.src} alt="Porto Seguro" />
            </div>
            <div className={styles.formSection}>
            <Link href="/home" className="link-menu">Voltar ao início</Link>
                <h1>Registrar</h1>
                <form>
                    <label htmlFor="email">Endereço de Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required />

                    <Link href="/home" className={styles.submitButton}>Registrar</Link>

                    <Link href='/login' className={styles.submitRegistrar}>Já tem conta? <span>Entre aqui</span></Link>
                </form>
            </div>
        </div>
    );
}

export default Registrar;
