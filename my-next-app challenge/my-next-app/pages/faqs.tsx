
import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronDown,
  FiHelpCircle,
  FiInfo,
  FiSearch,
  FiShield,
  FiX,
} from "react-icons/fi";
import styles from "./faqs.module.css";

type Categoria = "todos" | "seguros" | "projeto";

type Pergunta = {
  id: string;
  categoria: "seguros" | "projeto";
  pergunta: string;
  resposta: string;
};

const perguntas: Pergunta[] = [
  {
    id: "cobertura",
    categoria: "seguros",
    pergunta: "O que pode estar coberto por um seguro de automóvel?",
    resposta:
      "Dependendo do plano contratado, um seguro pode incluir proteção contra colisão, roubo, furto, incêndio e danos a terceiros. Coberturas, exclusões, limites e condições dependem da apólice. Confira sempre os documentos da seguradora.",
  },
  {
    id: "acidente",
    categoria: "seguros",
    pergunta: "O que fazer em caso de acidente?",
    resposta:
      "Priorize a segurança das pessoas envolvidas e, se necessário, acione os serviços de emergência. Para orientações sobre comunicação do sinistro e documentos exigidos, procure os canais oficiais da sua seguradora. Este protótipo não recebe avisos de sinistro.",
  },
  {
    id: "preco",
    categoria: "seguros",
    pergunta: "O que influencia o preço de um seguro?",
    resposta:
      "O valor pode variar conforme o veículo, perfil de utilização, local de circulação, condutores, coberturas e critérios de avaliação da seguradora. Esta plataforma acadêmica não calcula preços nem realiza cotações reais.",
  },
  {
    id: "motoristas",
    categoria: "seguros",
    pergunta: "Posso incluir outros motoristas na apólice?",
    resposta:
      "As regras para condutores adicionais variam conforme o produto e a seguradora. Para saber como declarar pessoas que utilizam o veículo, consulte as condições da sua apólice e os canais oficiais de atendimento.",
  },
  {
    id: "roubo",
    categoria: "seguros",
    pergunta: "O que fazer se o veículo for roubado ou furtado?",
    resposta:
      "Procure um local seguro, comunique o ocorrido às autoridades e registre a ocorrência conforme as orientações locais. Caso tenha seguro, contate a seguradora pelos canais oficiais para conhecer os próximos passos previstos na apólice.",
  },
  {
    id: "academico",
    categoria: "projeto",
    pergunta: "O Portal Auto é um site oficial da Porto Seguro?",
    resposta:
      "Não. O Portal Auto é um protótipo educacional desenvolvido em 2024, durante um desafio acadêmico da FIAP em parceria com a Porto Seguro. Não é um serviço oficial nem comercializa produtos da empresa.",
  },
  {
    id: "cep",
    categoria: "projeto",
    pergunta: "A consulta de CEP funciona de verdade?",
    resposta:
      "Sim. A funcionalidade consulta a API pública ViaCEP e apresenta os dados de endereço disponíveis para o CEP informado, como logradouro, bairro, cidade e UF. Ela não rastreia a localização do usuário e não aciona um guincho.",
  },
  {
    id: "agendamento",
    categoria: "projeto",
    pergunta: "Consigo agendar uma oficina pelo site?",
    resposta:
      "Você pode testar o fluxo de agendamento e conferir um resumo dos dados preenchidos. Trata-se de uma simulação de interface: nenhuma oficina é contatada e nenhuma reserva é efetuada.",
  },
  {
    id: "planos",
    categoria: "projeto",
    pergunta: "Os planos apresentados podem ser contratados?",
    resposta:
      "Não. As categorias de carro, moto e caminhão são exemplos conceituais para demonstrar a navegação e a organização de informações. Os conteúdos não representam preços, apólices ou coberturas oficiais.",
  },
  {
    id: "tecnologias",
    categoria: "projeto",
    pergunta: "Quais tecnologias foram utilizadas?",
    resposta:
      "O projeto foi desenvolvido com Next.js, React, TypeScript e CSS. Ele reúne páginas interativas, formulários demonstrativos e integração com a API ViaCEP para consultar endereços.",
  },
];

const filtros: { id: Categoria; texto: string }[] = [
  { id: "todos", texto: "Todas as perguntas" },
  { id: "seguros", texto: "Sobre seguros" },
  { id: "projeto", texto: "Sobre o projeto" },
];

export default function Faqs() {
  const [categoria, setCategoria] = useState<Categoria>("todos");
  const [busca, setBusca] = useState("");
  const [aberta, setAberta] = useState<string | null>("cobertura");

  const resultados = useMemo(() => {
    const termo = busca.trim().toLocaleLowerCase("pt-BR");

    return perguntas.filter((item) => {
      const correspondeCategoria =
        categoria === "todos" || item.categoria === categoria;

      const correspondeBusca =
        !termo ||
        `${item.pergunta} ${item.resposta}`
          .toLocaleLowerCase("pt-BR")
          .includes(termo);

      return correspondeCategoria && correspondeBusca;
    });
  }, [categoria, busca]);

  return (
    <div className={styles.pagina}>
      <div className={styles.aviso}>
        <strong>PROJETO ACADÊMICO • FIAP • 2024</strong>
        <span>
          Desenvolvido em um desafio acadêmico em parceria com a Porto Seguro.
          Protótipo educacional, não oficial.
        </span>
      </div>

      <header className={styles.cabecalho}>
        <Link href="/" className={styles.marca}>
          <FiShield /> Portal <span>Auto</span>
        </Link>

        <nav className={styles.menu} aria-label="Navegação principal">
          <Link href="/">Início</Link>
          <Link href="/agendamento">Agendamento</Link>
          <Link href="/guincho">Consulta de CEP</Link>
          <Link href="/planos">Planos</Link>
        </nav>
      </header>

      <main className={styles.conteudo}>
        <Link href="/" className={styles.voltar}>
          <FiArrowLeft /> Voltar ao início
        </Link>

        <section className={styles.hero}>
          <div>
            <span className={styles.etiqueta}>CENTRAL DE AJUDA</span>

            <h1>
              Ficou alguma dúvida?{" "}
              <em>A resposta pode estar aqui.</em>
            </h1>

            <p>
              Encontre informações gerais sobre seguros e descubra
              o que você pode explorar nesta demonstração acadêmica.
            </p>
          </div>

          <div className={styles.heroSelo}>
            <span className={styles.heroIcone}>
              <FiHelpCircle />
            </span>

            <strong>Informação clara, sem complicação.</strong>

            <span>
              Perguntas organizadas para você encontrar
              o que procura.
            </span>
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="titulo-faq">
          <div className={styles.faqTopo}>
            <div>
              <span className={styles.etiqueta}>
                PERGUNTAS FREQUENTES
              </span>
              <h2 id="titulo-faq">Como podemos ajudar?</h2>
            </div>

            <p>
              Pesquise por um assunto ou escolha uma categoria.
            </p>
          </div>

          <div className={styles.busca}>
            <FiSearch aria-hidden="true" />

            <input
              type="search"
              placeholder="Buscar por CEP, cobertura, agendamento..."
              aria-label="Buscar perguntas frequentes"
              value={busca}
              onChange={(event) => {
                setBusca(event.target.value);
                setAberta(null);
              }}
            />

            {busca && (
              <button
                type="button"
                aria-label="Limpar busca"
                onClick={() => setBusca("")}
              >
                <FiX />
              </button>
            )}
          </div>

          <div className={styles.filtros} aria-label="Filtrar perguntas">
            {filtros.map((filtro) => (
              <button
                key={filtro.id}
                type="button"
                aria-pressed={categoria === filtro.id}
                className={
                  categoria === filtro.id ? styles.filtroAtivo : ""
                }
                onClick={() => {
                  setCategoria(filtro.id);
                  setAberta(null);
                }}
              >
                {filtro.texto}
              </button>
            ))}
          </div>

          <p className={styles.contagem} aria-live="polite">
            {resultados.length}{" "}
            {resultados.length === 1
              ? "pergunta encontrada"
              : "perguntas encontradas"}
          </p>

          <div className={styles.lista}>
            {resultados.map((item) => {
              const expandida = aberta === item.id;

              return (
                <article
                  key={item.id}
                  className={`${styles.item} ${
                    expandida ? styles.itemAberto : ""
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={expandida}
                      aria-controls={`resposta-${item.id}`}
                      onClick={() =>
                        setAberta(expandida ? null : item.id)
                      }
                    >
                      <span>{item.pergunta}</span>
                      <FiChevronDown aria-hidden="true" />
                    </button>
                  </h3>

                  <div
                    id={`resposta-${item.id}`}
                    hidden={!expandida}
                    className={styles.resposta}
                  >
                    <p>{item.resposta}</p>
                  </div>
                </article>
              );
            })}

            {resultados.length === 0 && (
              <div className={styles.vazio}>
                <FiSearch />

                <strong>Nenhuma pergunta encontrada.</strong>

                <p>
                  Tente outra palavra ou selecione uma categoria
                  diferente.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setBusca("");
                    setCategoria("todos");
                    setAberta("cobertura");
                  }}
                >
                  Ver todas as perguntas <FiArrowRight />
                </button>
              </div>
            )}
          </div>
        </section>

        <section className={styles.atalhos}>
          <div>
            <span className={styles.etiqueta}>
              EXPLORE O PROJETO
            </span>

            <h2>Quer testar na prática?</h2>

            <p>
              Conheça as funcionalidades interativas desenvolvidas
              para o protótipo acadêmico.
            </p>
          </div>

          <div className={styles.links}>
            <Link href="/guincho">
              Consultar um CEP <FiArrowRight />
            </Link>

            <Link href="/agendamento">
              Simular agendamento <FiArrowRight />
            </Link>
          </div>
        </section>

        <p className={styles.rodape}>
          <FiInfo />
          Conteúdo educativo e demonstrativo. Para informações
          sobre contratos e atendimento, consulte sua seguradora
          pelos canais oficiais.
        </p>
      </main>
    </div>
  );
}
