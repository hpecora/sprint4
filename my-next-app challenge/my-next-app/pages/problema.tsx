
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiActivity,
  FiAlertTriangle,
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiChevronRight,
  FiInfo,
  FiLayers,
  FiShield,
  FiTool,
} from "react-icons/fi";
import styles from "./problema.module.css";

type Categoria = "motor" | "suspensao" | "funilaria";

const categorias = [
  {
    id: "motor" as const,
    numero: "01",
    titulo: "Motor",
    descricao: "Ruídos, falhas, temperatura e funcionamento.",
    Icone: FiTool,
    sinais: [
      "Luzes de advertência acesas no painel",
      "Ruídos ou vibrações fora do comum",
      "Perda de desempenho ou aquecimento anormal",
    ],
    orientacao:
      "Se houver superaquecimento, fumaça ou perda acentuada de potência, pare em um local seguro, desligue o motor e procure assistência especializada. Não abra o reservatório de arrefecimento quente.",
  },
  {
    id: "suspensao" as const,
    numero: "02",
    titulo: "Suspensão",
    descricao: "Estabilidade, impactos e comportamento do carro.",
    Icone: FiActivity,
    sinais: [
      "Batidas secas ao passar por irregularidades",
      "Instabilidade ou oscilação excessiva",
      "Desgaste irregular dos pneus",
    ],
    orientacao:
      "Alterações no controle do veículo precisam de avaliação profissional. Se a direção ou a estabilidade estiver comprometida, interrompa o trajeto em segurança e solicite assistência.",
  },
  {
    id: "funilaria" as const,
    numero: "03",
    titulo: "Funilaria",
    descricao: "Amassados, pintura e danos externos.",
    Icone: FiLayers,
    sinais: [
      "Amassados ou riscos na carroceria",
      "Danos em para-choques, portas ou capô",
      "Peças desalinhadas depois de uma colisão",
    ],
    orientacao:
      "Depois de um impacto, verifique se há riscos imediatos e procure avaliação especializada antes de voltar a circular. Danos visíveis podem estar associados a problemas estruturais não aparentes.",
  },
];

export default function Problema() {
  const [categoria, setCategoria] = useState<Categoria>("motor");
  const [respostaApi, setRespostaApi] = useState<string[]>([]);
  const [statusApi, setStatusApi] = useState<
    "inativa" | "consultando" | "ok" | "erro"
  >("inativa");

  const atual = categorias.find((item) => item.id === categoria)!;

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
    setRespostaApi([]);

    if (!base) {
      setStatusApi("inativa");
      return;
    }

    const controller = new AbortController();
    setStatusApi("consultando");

    async function consultarApi() {
      try {
        const resposta = await fetch(`${base}/problema/${categoria}`, {
          signal: controller.signal,
        });

        if (!resposta.ok) throw new Error("Falha na consulta");

        const dados: { solucao?: unknown } = await resposta.json();

        const itens = Array.isArray(dados.solucao)
          ? dados.solucao.filter(
              (valor): valor is string => typeof valor === "string"
            )
          : typeof dados.solucao === "string"
          ? [dados.solucao]
          : [];

        setRespostaApi(itens);
        setStatusApi(itens.length > 0 ? "ok" : "inativa");
      } catch (erro) {
        if (controller.signal.aborted) return;
        setStatusApi("erro");
      }
    }

    consultarApi();

    return () => controller.abort();
  }, [categoria]);

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
          <Link href="/faqs">Dúvidas</Link>
        </nav>
      </header>

      <main className={styles.conteudo}>
        <Link href="/" className={styles.voltar}>
          <FiArrowLeft /> Voltar ao início
        </Link>

        <section className={styles.introducao}>
          <div>
            <span className={styles.etiqueta}>ORIENTAÇÃO AUTOMOTIVA</span>

            <h1>
              Algo diferente no seu carro? <em>Comece por aqui.</em>
            </h1>

            <p>
              Selecione a área em que percebeu o problema para conhecer
              sinais comuns e orientações gerais. Uma experiência de
              consulta educativa, desenvolvida para o projeto acadêmico.
            </p>
          </div>

          <div className={styles.avisoSeguranca}>
            <FiAlertTriangle />
            <div>
              <strong>Segurança em primeiro lugar</strong>
              <p>
                Se o carro apresentar fumaça, superaquecimento,
                falha nos freios ou perda de controle, pare em local
                seguro e busque assistência.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.secao} aria-labelledby="titulo-escolha">
          <span className={styles.etiqueta}>
            PASSO 01 • IDENTIFIQUE A ÁREA
          </span>

          <h2 id="titulo-escolha">Onde está o problema?</h2>

          <p className={styles.subtitulo}>
            Escolha uma das categorias para visualizar os detalhes.
          </p>

          <div className={styles.grade}>
            {categorias.map(
              ({ id, numero, titulo, descricao, Icone }) => (
                <button
                  key={id}
                  type="button"
                  className={`${styles.card} ${
                    categoria === id ? styles.cardAtivo : ""
                  }`}
                  aria-pressed={categoria === id}
                  onClick={() => setCategoria(id)}
                >
                  <div className={styles.cardTopo}>
                    <span className={styles.icone}>
                      <Icone />
                    </span>
                    <span className={styles.numero}>{numero}</span>
                  </div>

                  <strong>{titulo}</strong>
                  <span className={styles.descricaoCard}>{descricao}</span>

                  <span className={styles.acaoCard}>
                    {categoria === id ? "Selecionado" : "Ver orientações"}
                    <FiChevronRight />
                  </span>
                </button>
              )
            )}
          </div>

          <div className={styles.resultado} aria-live="polite">
            <div className={styles.resultadoTopo}>
              <span className={styles.etiqueta}>
                PASSO 02 • ENTENDA OS SINAIS
              </span>
              <h3>{atual.titulo}</h3>
              <p>Alguns exemplos do que merece atenção:</p>
            </div>

            <div className={styles.resultadoGrade}>
              <div>
                <h4>Sinais que podem aparecer</h4>
                <ul className={styles.sinais}>
                  {atual.sinais.map((sinal) => (
                    <li key={sinal}>
                      <FiCheckCircle />
                      {sinal}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.orientacao}>
                <FiInfo />
                <strong>Como proceder com segurança</strong>
                <p>{atual.orientacao}</p>
              </div>
            </div>

            {statusApi === "ok" && respostaApi.length > 0 && (
              <div className={styles.api}>
                <strong>
                  Informação adicional do protótipo original
                </strong>
                <ul>
                  {respostaApi.map((item, indice) => (
                    <li key={`${indice}-${item}`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {statusApi === "erro" && (
              <p className={styles.apiNota}>
                A API original não respondeu. As orientações educativas
                desta página continuam disponíveis.
              </p>
            )}

            <p className={styles.disclaimer}>
              <FiInfo />
              Estas informações não identificam a causa do defeito
              nem substituem diagnóstico técnico.
            </p>
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <span className={styles.etiqueta}>PRÓXIMO PASSO</span>
            <h2>Quer planejar uma avaliação?</h2>
            <p>
              Experimente o fluxo demonstrativo de agendamento
              do Portal Auto.
            </p>
          </div>

          <Link href="/agendamento" className={styles.botao}>
            Simular agendamento <FiArrowRight />
          </Link>
        </section>

        <p className={styles.rodape}>
          <FiInfo />
          Protótipo educacional: nenhum diagnóstico ou atendimento
          real é realizado por esta página.
        </p>
      </main>
    </div>
  );
}
