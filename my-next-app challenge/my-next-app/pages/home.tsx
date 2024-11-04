
import styles from './home.module.css'
import imgFML from './img/familia feliz.png'

export default function Home() {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles['nav-links']}>
          <a href="/agendamento">Agendamento Oficina</a>
          <a href="/problema">Problema no veículo</a>
          <a href="/revisao">Revisão do veículo</a>
          <a href="/guincho">Guincho</a>
          <a href="/planos">Nossos Planos</a>
          <a href="/faqs">FAQS</a>
          <a href="/participantes">Participantes</a>
        </div>
        <div className={styles['nav-actions']}>
          <a href="/login">Login</a>
          <a href="/registrar">Criar conta</a>
        </div>
      </div>

      <div className={styles['hero-section']}>
        <div className={styles['hero-text']}>
          <h1>PORTO SEGURO</h1>
          <p>A tranquilidade que você procura.</p>
          <p>Conte com um seguro de carro, operado pela Porto Seguro, que mais combina com você.</p>
        </div>
        <img src={imgFML.src} alt="Imagem de pessoas felizes" className={styles['hero-image']} />
      </div>

      <div className={styles['testimonials-section']}>
        <h2>Feedback dos nossos clientes</h2>
        <div className={styles['testimonials-container']}>
          <div className={styles['testimonial-card']}>
            <div className={styles.icon}>👩</div>
            <p>"Solicitei o guincho porque meu carro quebrou e em menos de 15 minutos já estava sendo atendida."</p>
            <div className={styles.author}>Maria</div>
            <div className={styles.location}>São Paulo</div>
          </div>
          <div className={styles['testimonial-card']}>
            <div className={styles.icon}>👨</div>
            <p>“O atendimento foi excelente. Tão bom saber que estou com o melhor serviço prestado.”</p>
            <div className={styles.author}>João</div>
            <div className={styles.location}>Campinas</div>
          </div>
          <div className={styles['testimonial-card']}>
            <div className={styles.icon}>👨</div>
            <p>“Seguro Auto da Porto, é o melhor ponto de referência, muito completo.”</p>
            <div className={styles.author}>Roberto</div>
            <div className={styles.location}>Osasco</div>
          </div>
          <div className={styles['testimonial-card']}>
            <div className={styles.icon}>👩</div>
            <p>“Tenho o seguro auto da Porto há anos, e fui super bem atendida. Sei que posso confiar!”</p>
            <div className={styles.author}>Elaine</div>
            <div className={styles.location}>Jundiaí</div>
          </div>
        </div>
      </div>
    </div>
  );
}
