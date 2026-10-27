
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowLeft,
  FiArrowRight,
  FiActivity,
  FiCheck,
  FiChevronRight,
  FiCircle,
  FiCompass,
  FiDisc,
  FiInfo,
  FiShield,
  FiTool,
  FiZap,
} from "react-icons/fi";

import fotoRevisao from "./img/revisao.png";
import styles from "./revisao.module.css";

const sistemas = [
  {
    id: "motor",
    numero: "01",
    titulo: "Motor",
    resumo: "O coração do seu veículo.",
    Icone: FiTool,
    descricao:
      "Uma revisão do motor ajuda a identificar desgastes, vazamentos e componentes que precisam de manutenção.",
    itens: [
      "Nível e condições do óleo",
      "Filtros de ar, óleo e combustível",
      "Correias e componentes relacionados",
      "Sistema de arrefecimento",
    ],
  },
  {
    id: "freios",
    numero: "02",
    titulo: "Freios",
    resumo: "Segurança em cada parada.",
    Icone: FiDisc,
    descricao:
      "O sistema de frenagem exige atenção para garantir respostas adequadas às condições de uso do veículo.",
    itens: [
      "Pastilhas e discos de freio",
      "Fluido de freio",
      "Mangueiras e conexões",
      "Componentes do sistema ABS",
    ],
  },
  {
    id: "suspensao",
    numero: "03",
    titulo: "Suspensão",
    resumo: "Estabilidade em movimento.",
    Icone: FiActivity,
    descricao:
      "A suspensão influencia a estabilidade, o conforto e o comportamento do veículo em diferentes condições.",
    itens: [
      "Amortecedores",
      "Molas e buchas",
      "Bandejas e articulações",
      "Sinais de folgas e desgastes",
    ],
  },
  {
    id: "direcao",
    numero: "04",
    titulo: "Direção",
    resumo: "Controle em cada trajeto.",
    Icone: FiCompass,
    descricao:
      "Os componentes da direção precisam estar em boas condições para oferecer controle e precisão ao dirigir.",
    itens: [
      "Sistema de direção",
      "Terminais e articulações",
      "Folgas e ruídos",
      "Condições de alinhamento",
    ],
  },
  {
    id: "eletrico",
    numero: "05",
    titulo: "Sistema elétrico",
    resumo: "Tudo funcionando em sintonia.",
    Icone: FiZap,
    descricao:
      "A verificação dos componentes elétricos ajuda a identificar falhas que podem comprometer o funcionamento do carro.",
    itens: [
      "Bateria e conexões",
      "Alternador",
      "Iluminação e sinalização",
      "Limpadores de para-brisa",
    ],
  },
  {
    id: "pneus",
    numero: "06",
    titulo: "Pneus",
    resumo: "A conexão com a estrada.",
    Icone: FiCircle,
    descricao:
      "Os pneus merecem atenção porque suas condições afetam diretamente a aderência e o comportamento do veículo.",
    itens: [
      "Pressão de calibragem",
      "Desgaste da banda de rodagem",
      "Profundidade dos sulcos",
      "Estado geral dos pneus",
    ],
  },
];

export default function Revisao() {
  const [selecionado, setSelecionado] = useState("motor");

  const atual =
    sistemas.find((sistema) => sistema.id === selecionado) ||
    sistemas[0];

  return (
    <div className={styles.pagina}>
      <div className={styles.aviso}>
        <strong>PROJETO ACADÊMICO • FIAP • 2024</strong>
        <span>
          Desenvolvido em um desafio acadêmico em parceria
          com a Porto Seguro. Protótipo educacional, não oficial.
        </span>
      </div>

      <header className={styles.cabecalho}>
        <Link href="/" className={styles.marca}>
          <FiShield />
          Portal <span>Auto</span>
        </Link>

        <nav className={styles.menu}>
          <Link href="/">Início</Link>
          <Link href="/agendamento">Agendamento</Link>
          <Link href="/guincho">Consulta de CEP</Link>
          <Link href="/planos">Planos</Link>
          <Link href="/faqs">Dúvidas</Link>
        </nav>
      </header>

      <main className={styles.conteudo}>
        <Link href="/" className={styles.voltar}>
          <FiArrowLeft /> Voltar ao início
        </Link>

        <section className={styles.hero}>
          <div className={styles.heroTexto}>
            <span className={styles.etiqueta}>
              REVISÃO DO VEÍCULO
            </span>

            <h1>
              Cuidar do seu carro é
              <em> seguir em frente com confiança.</em>
            </h1>

            <p>
              Da segurança ao desempenho, cada componente
              merece atenção. Conheça os principais sistemas
              avaliados em uma revisão automotiva e entenda
              por que a manutenção preventiva faz diferença.
            </p>

            <Link
              href="#sistemas"
              className={styles.botaoPrimario}
            >
              Explorar os sistemas <FiArrowRight />
            </Link>

            <div className={styles.heroInfo}>
              <FiCheck />
              Conteúdo informativo sobre manutenção preventiva
            </div>
          </div>

          <div className={styles.heroImagem}>
            <Image
              src={fotoRevisao}
              alt="Profissional realizando manutenção no motor de um veículo"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
              className={styles.foto}
            />
            <div className={styles.seloImagem}>
              <FiTool />
              <div>
                <strong>Manutenção preventiva</strong>
                <span>Cuidado em cada detalhe</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sistemas} id="sistemas">
          <div className={styles.secaoTopo}>
            <span className={styles.etiqueta}>
              CONHEÇA OS COMPONENTES
            </span>

            <h2>
              O que é verificado em uma revisão?
            </h2>

            <p>
              Explore os seis principais sistemas abaixo.
              Selecione um card para conhecer alguns dos
              itens que podem ser avaliados.
            </p>
          </div>

          <div className={styles.grade}>
            {sistemas.map(
              ({
                id,
                numero,
                titulo,
                resumo,
                Icone,
              }) => (
                <button
                  key={id}
                  type="button"
                  className={`${styles.card} ${
                    selecionado === id
                      ? styles.cardAtivo
                      : ""
                  }`}
                  onClick={() => setSelecionado(id)}
                  aria-pressed={selecionado === id}
                >
                  <div className={styles.cardTopo}>
                    <div className={styles.cardIcone}>
                      <Icone />
                    </div>
                    <span>{numero}</span>
                  </div>

                  <h3>{titulo}</h3>
                  <p>{resumo}</p>

                  <span className={styles.cardLink}>
                    {selecionado === id
                      ? "Selecionado"
                      : "Ver detalhes"}
                    <FiChevronRight />
                  </span>
                </button>
              )
            )}
          </div>

          <div className={styles.painel} aria-live="polite">
            <div className={styles.painelTopo}>
              <span className={styles.etiqueta}>
                SISTEMA {atual.numero} • DETALHES
              </span>

              <h3>{atual.titulo}</h3>
              <p>{atual.descricao}</p>
            </div>

            <div className={styles.painelConteudo}>
              <div>
                <h4>O que pode ser avaliado?</h4>

                <ul className={styles.checklist}>
                  {atual.itens.map((item) => (
                    <li key={item}>
                      <FiCheck />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.painelDestaque}>
                <FiInfo />
                <strong>
                  Cada veículo tem necessidades diferentes.
                </strong>
                <p>
                  Os procedimentos dependem do modelo,
                  da quilometragem e das recomendações
                  do fabricante. A avaliação deve ser
                  realizada por um profissional qualificado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <span className={styles.etiqueta}>
              PLANEJE SUA PRÓXIMA VISITA
            </span>

            <h2>
              Revisão em dia.
              <br />
              Mais tranquilidade no caminho.
            </h2>

            <p>
              Conheça o fluxo demonstrativo de agendamento
              desenvolvido para este projeto acadêmico.
            </p>
          </div>

          <Link
            href="/agendamento"
            className={styles.botaoPrimario}
          >
            Simular agendamento <FiArrowRight />
          </Link>
        </section>

        <div className={styles.rodapeAviso}>
          <FiInfo />
          Conteúdo educativo. Esta página não realiza
          inspeções, diagnósticos ou agendamentos reais.
        </div>
      </main>
    </div>
  );
}
