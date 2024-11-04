import Link from "next/link"
import styles from './revisao.module.css';
import imgREVISAO from './img/revisao.png'
import imgLOGO from './img/logo2.png'

export default function revisao() {
    return(
        <div>
            <div className={styles.container}>
        <div className={styles.containerImg}>
            <img src={imgLOGO.src} alt="logo" />
        </div>
        <div className={styles.maincontent}>
            <h1>Revisão do Veículo: Mantenha seu carro em dia e evite problemas!</h1>
            <div className={styles.contentsection}>
                <h2>O que nós verificamos?</h2>
                <div className={styles.checklist}>
                    <p>Durante uma revisão completa, diversos componentes do veículo são minuciosamente inspecionados, como:</p>
                    <ul>
                        <li><strong><span>Motor:</span></strong> Nível de óleo, filtros, correias, velas, sistema de arrefecimento e outros componentes para o bom funcionamento do motor.</li>
                        <li><strong><span>Freios:</span></strong> Pastilhas, discos, fluido de freio, mangueiras e sistema ABS.</li>
                        <li><strong><span>Suspensão:</span></strong> Amortecedores, molas, buchas e bandejas.</li>
                        <li><strong><span>Direção:</span></strong> Alinhamento, balanceamento, buchas e homocinética.</li>
                        <li><strong><span>Sistema elétrico:</span></strong> Bateria, alternador, luzes, limpadores de para-brisa e outros componentes elétricos.</li>
                        <li><strong><span>Pneus:</span></strong> Calibragem, desgaste e estado geral dos pneus.</li>
                    </ul>
                </div>
                <img src={imgREVISAO.src} alt="revisao" className={styles.inspectionimage}/> 
                <div className={styles.backBTN}>
                <Link href="/home" className="link-home">Voltar ao início</Link>
                </div>
            </div>
        </div>
        </div>
        </div>
    )

}
