import Link from "next/link"
import styles from "./login.module.css"
import imgLogo from "./img/logo-fundo.png"

function Login() {
    return (
        <div className={styles.container}>
        <div className={styles.imageSection}>
            <img src={imgLogo.src} alt="Porto Seguro" />
        </div>
        <div className={styles.formSection}>
        <Link href="/home" className="link-menu">Voltar ao início</Link>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Endereço de Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" required />

                <Link href="/home" className={styles.submitButton}>Entrar</Link>

                <Link href='/registrar' className={styles.submitRegistrar}>Não tem conta ainda? <span>Registre-se aqui</span></Link>
            </form>
        </div>
    </div>
    )
}

export default Login