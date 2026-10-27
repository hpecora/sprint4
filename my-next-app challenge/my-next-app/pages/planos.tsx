
import { useState } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiChevronRight,
  FiInfo,
  FiShield,
  FiTruck,
  FiTool,
  FiMapPin,
} from "react-icons/fi";

import fotoCarro from "./img/carro.png";
import fotoMoto from "./img/moto.png";
import fotoCaminhao from "./img/caminhao.png";
import styles from "./planos.module.css";

type Perfil = "carro" | "moto" | "caminhao";

type Plano = {
  id: Perfil;
  titulo: string;
  categoria: string;
  descricao: string;
  imagem: StaticImageData;
  alt: string;
  necessidades: string[];
  detalhes: string[];
};

const planos: Plano[] = [
  {
    id: "carro",
    titulo: "Carro",
    categoria: "Mobilidade do dia a dia",
    descricao:
      "Para quem utiliza o carro na rotina e quer conhecer possibilidades de proteção e assistência.",
    imagem: fotoCarro,
    alt: "Motorista dentro de um automóvel",
    necessidades: [
      "Imprevistos no trânsito",
      "Assistência na estrada",
      "Cuidados com o veículo",
    ],
    detalhes: [
      "Danos e ocorrências com o automóvel",
      "Orientação em situações de emergência",
      "Serviços de apoio ao motorista",
    ],
  },
  {
    id: "moto",
    titulo: "Moto",
    categoria: "Liberdade em duas rodas",
    descricao:
      "Um perfil pensado para explorar as necessidades de quem usa motocicleta para se deslocar.",
    imagem: fotoMoto,
    alt: "Motociclista pilotando em uma estrada",
    necessidades: [
      "Proteção no deslocamento",
      "Apoio em emergências",
      "Segurança na rotina",
    ],
    detalhes: [
      "Situações de roubo e danos",
      "Assistência para imprevistos durante trajetos",
      "Orientações específicas para motociclistas",
    ],
  },
  {
    id: "caminhao",
    titulo: "Caminhão",
    categoria: "Mobilidade profissional",
    descricao:
      "Uma visão de serviços que podem fazer sentido para veículos utilizados no trabalho.",
    imagem: fotoCaminhao,
    alt: "Profissional próximo a um caminhão",
    necessidades: [
      "Continuidade da operação",
      "Suporte em deslocamentos",
      "Proteção do veículo",
    ],
    detalhes: [
      "Ocorrências com o veículo comercial",
      "Necessidade de assistência em viagem",
      "Apoio à rotina de transporte",
    ],
  },
];

export default function Planos() {
  const [selecionado, setSelecionado] =
    useState<Perfil>("carro");

  const planoAtual = planos.find(
    (plano) => plano.id === selecionado
  )!;

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

        <nav
          className={styles.menu}
          aria-label="Navegação principal"
        >
          <Link href="/">Início</Link>
          <Link href="/agendamento">Agendamento</Link>
          <Link href="/guincho">Consulta de CEP</Link>
          <Link href="/faqs">Dúvidas</Link>
        </nav>
      </header>

      <main className={styles.conteudo}>
        <Link href="/" className={styles.voltar}>
          <FiArrowLeft /> Voltar ao início
        </Link>

        <section className={styles.introducao}>
          <div>
            <span className={styles.etiqueta}>
              PLANOS • ESTUDO DE EXPERIÊNCIA
            </span>

            <h1>
              Proteção para cada{" "}
              <em>forma de seguir em frente.</em>
            </h1>

            <p>
              Carro, moto ou caminhão: cada veículo tem sua
              rotina. Explore três perfis ilustrativos e veja
              como uma plataforma pode organizar informações
              de seguros de maneira clara.
            </p>
          </div>

          <div className={styles.selo}>
            <FiShield />
            <strong>
              Uma experiência mais simples
            </strong>
            <span>
              Informações organizadas para facilitar
              a comparação.
            </span>
          </div>
        </section>

        <section
          className={styles.secaoPlanos}
          aria-labelledby="titulo-planos"
        >
          <div className={styles.secaoTopo}>
            <div>
              <span className={styles.etiqueta}>
                EXPLORE AS CATEGORIAS
              </span>
              <h2 id="titulo-planos">
                Qual é o seu veículo?
              </h2>
            </div>
            <p>
              Selecione um perfil para ver seus detalhes
              conceituais.
            </p>
          </div>

          <div className={styles.grade}>
            {planos.map((plano) => (
              <article
                key={plano.id}
                className={`${styles.card} ${
                  selecionado === plano.id
                    ? styles.cardAtivo
                    : ""
                }`}
              >
                <div className={styles.foto}>
                  <Image
                    src={plano.imagem}
                    alt={plano.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    className={styles.imagem}
                  />
                </div>

                <div className={styles.cardCorpo}>
                  <span className={styles.categoria}>
                    {plano.categoria}
                  </span>

                  <h3>{plano.titulo}</h3>
                  <p>{plano.descricao}</p>

                  <ul className={styles.lista}>
                    {plano.necessidades.map((item) => (
                      <li key={item}>
                        <FiCheck /> {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={styles.botaoCard}
                    aria-pressed={selecionado === plano.id}
                    onClick={() => setSelecionado(plano.id)}
                  >
                    {selecionado === plano.id
                      ? "Perfil selecionado"
                      : "Explorar este perfil"}
                    <FiChevronRight />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div
            className={styles.detalhe}
            aria-live="polite"
          >
            <div className={styles.detalheCabecalho}>
              <div className={styles.iconeDetalhe}>
                <FiShield />
              </div>

              <div>
                <span className={styles.etiqueta}>
                  VISÃO CONCEITUAL
                </span>
                <h3>
                  O que considerar para{" "}
                  {planoAtual.titulo.toLowerCase()}?
                </h3>
              </div>
            </div>

            <div className={styles.detalheItens}>
              {planoAtual.detalhes.map((item) => (
                <div key={item}>
                  <FiCheck />
                  {item}
                </div>
              ))}
            </div>

            <p className={styles.nota}>
              <FiInfo />
              Estes exemplos não representam coberturas,
              condições ou preços reais da Porto Seguro.
            </p>
          </div>
        </section>

        <section className={styles.recursos}>
          <div className={styles.secaoTopo}>
            <div>
              <span className={styles.etiqueta}>
                OUTRAS POSSIBILIDADES
              </span>
              <h2>
                Serviços que fazem a diferença
              </h2>
            </div>
          </div>

          <div className={styles.recursosGrade}>
            <div>
              <FiTool />
              <h3>Cuidados preventivos</h3>
              <p>
                Entenda os principais itens verificados
                em uma revisão.
              </p>
              <Link href="/revisao">
                Conhecer revisão <FiArrowRight />
              </Link>
            </div>

            <div>
              <FiTruck />
              <h3>Assistência em imprevistos</h3>
              <p>
                Conheça a experiência demonstrativa de
                localização por CEP.
              </p>
              <Link href="/guincho">
                Testar CEP <FiArrowRight />
              </Link>
            </div>

            <div>
              <FiMapPin />
              <h3>Planejamento da oficina</h3>
              <p>
                Teste um formulário de agendamento
                com resumo dos dados.
              </p>
              <Link href="/agendamento">
                Simular agendamento <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <div className={styles.rodapeAviso}>
          <FiInfo />
          Página desenvolvida para apresentação acadêmica
          e portfólio. Não comercializa seguros nem
          realiza cotações.
        </div>
      </main>
    </div>
  );
}
