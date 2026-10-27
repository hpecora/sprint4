
import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiMapPin,
  FiShield,
} from "react-icons/fi";
import styles from "./footer.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.destaque}>
          <div>
            <span className={styles.etiqueta}>
              FUNCIONALIDADE EM DESTAQUE
            </span>

            <h2>Um CEP. Um endereço. Experimente.</h2>

            <p>
              Teste a integração com o ViaCEP, uma das
              funcionalidades reais deste protótipo acadêmico.
            </p>
          </div>

          <Link href="/guincho" className={styles.botao}>
            Testar consulta de CEP
            <FiArrowUpRight />
          </Link>
        </div>

        <div className={styles.colunas}>
          <div className={styles.apresentacao}>
            <Link href="/" className={styles.marca}>
              <FiShield />
              <span>
                Portal <strong>Auto</strong>
              </span>
            </Link>

            <p>
              Uma experiência digital de serviços automotivos,
              criada a partir de um projeto acadêmico da FIAP.
            </p>

            <span className={styles.selo}>
              NEXT.JS · REACT · TYPESCRIPT
            </span>
          </div>

          <nav
            className={styles.navegacao}
            aria-label="Links do rodapé"
          >
            <h3>Explore</h3>

            <Link href="/">Página inicial</Link>
            <Link href="/guincho">Consulta de CEP</Link>
            <Link href="/agendamento">Agendamento</Link>
            <Link href="/revisao">Revisão do veículo</Link>
            <Link href="/problema">Problemas no veículo</Link>
            <Link href="/planos">Planos</Link>
            <Link href="/faqs">Dúvidas frequentes</Link>
          </nav>

          <div className={styles.projeto}>
            <h3>Sobre o projeto</h3>

            <p>
              Desenvolvido em 2024 em um desafio acadêmico
              da FIAP em parceria com a Porto Seguro.
              Esta é uma versão atualizada para portfólio,
              sem vínculo com os serviços oficiais da seguradora.
            </p>

            <a
              href="https://github.com/hpecora/sprint4"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.github}
            >
              <FiGithub />
              Ver código no GitHub
              <FiArrowRight />
            </a>
          </div>
        </div>

        <div className={styles.base}>
          <span>
            FIAP · Projeto acadêmico de 2024 ·
            Redesign para portfólio
          </span>

          <span>
            <FiMapPin />
            Protótipo demonstrativo: nenhum seguro,
            agendamento ou guincho é contratado neste site.
          </span>
        </div>
      </div>
    </footer>
  );
}
