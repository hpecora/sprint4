import Link from "next/link"
import styles from './planos.module.css';

// Importação das imagens
import imgCarro from './img/carro.png';
import imgMoto from './img/moto.png';
import imgCaminhao from './img/caminhao.png';

export default function Planos() {
    return (
        <div className={styles.content}>
            <h1 className={styles.titulo}>Nossos Planos</h1>
            <p className={styles.descricao}>A Porto Seguro oferece 3 tipos de planos:</p>
            <div className={styles.planos}>

                {/*Carro*/}
                <div className={styles.plano}>
                    <img src={imgCarro.src} alt="Seguro de Carro" className={styles.imagem} />
                    <div className={styles.descricaoPlano}>
                        <h2>Seguro Auto Carro</h2>
                        <p>Suporte completo e ideal para quem quer um seguro de carro, oferecendo proteção contra danos, roubo e assistência 24 horas.</p>
                        <h2>R$ 1.500 a R$ 5.000 p/ ano</h2>
                    </div>
                </div>

                {/*Moto*/}
                <div className={styles.plano}>
                    <img src={imgMoto.src} alt="Seguro de Moto" className={styles.imagem} />
                    <div className={styles.descricaoPlano}>
                        <h2>Seguro Auto Moto</h2>
                        <p>Proteção especial para motocicletas, com cobertura para acidentes, roubos e assistência em emergências.</p>
                        <h2>R$ 600 a R$ 2.000 p/ ano</h2>
                    </div>
                </div>

                {/*Caminhão*/}
                <div className={styles.plano}>
                    <img src={imgCaminhao.src} alt="Seguro de Caminhão" className={styles.imagem} />
                    <div className={styles.descricaoPlano}>
                        <h2>Seguro Auto Caminhão</h2>
                        <p>Seguro completo para caminhões, garantindo proteção para veículos comerciais e suas cargas contra diversos riscos.</p>
                        <h2>R$ 3.000 a R$ 10.000 p/ ano</h2>
                    </div>
                </div>

            </div>

            <div className={styles.beneficios}>
                <div className={styles.beneficio}>
                    <h3>Cobertura para Acessórios</h3>
                    <p>Proteção adicional para acessórios do veículo, garantindo que seus itens extras estejam cobertos em caso de danos ou roubo.</p>
                </div>
                <div className={styles.beneficio}>
                    <h3>Guincho 24 Horas</h3>
                    <p>Serviço de guincho disponível a qualquer hora do dia, para ajudar em emergências e garantir que você nunca fique preso na estrada.</p>
                </div>
                <div className={styles.beneficio}>
                    <h3>Seguro contra Incêndio e Furto</h3>
                    <p>Proteção contra danos causados por incêndios e furtos, proporcionando uma cobertura completa para imprevistos.</p>
                </div>
            </div>
            <Link href="/home" className="link-home">Voltar ao início</Link>
        </div>
    );
}
