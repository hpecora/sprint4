import Link from "next/link"
import styles from './participantes.module.css';
import imgLUCAS from './img/lucas.jpg'
import imgHENRIQUE from './img/henrique.png'
import imgSANTHIAGO from './img/santhiago.png'
import imgLOGO from './img/logo2.png'
import { disconnect } from "process";



export default function participantes() {
    return(
          <div className={styles.container}>
        <div className={styles.containerImg}>
            <img src={imgLOGO.src} alt="logo" />
            
        </div>

        <div className={styles.maincontent}>
            <h1>PARTICIPANTES</h1>
            <div className={styles.participants}>

        <div className={styles.participant}>
          <img src={imgHENRIQUE.src} alt="henrique" />
          <p>Henrique Pecora</p>
          <p>RM 556612</p>
        </div>
        
        <div className={styles.participant}>
          <img src={imgLUCAS.src} alt="lucas" />
          <p>Lucas Lima</p>
          <p>RM 556564</p>
        </div>

        <div className={styles.participant}>
          <img src={imgSANTHIAGO.src} alt="santhi" />
          <p>Santhiago de Gobii</p>
          <p>RM 98420</p>
        </div>
      </div>
      <div className={styles.backBTN}>
                <Link href="/home" className="link-home">Voltar ao início</Link>
                </div>
      </div>
    </div>  
    )
}