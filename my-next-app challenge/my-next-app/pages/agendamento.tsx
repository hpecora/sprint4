import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiInfo,
  FiShield,
  FiTool,
} from "react-icons/fi";
import styles from "./agendamento.module.css";

function dataAtualLocal() {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  return `${ano}-${mes}-${dia}`;
}

function dataParaExibicao(valor: string) {
  const [ano, mes, dia] = valor.split("-");
  return `${dia}/${mes}/${ano}`;
}

export default function Agendamento() {
  const [data, setData] = useState("");
  const [placa, setPlaca] = useState("");
  const [oficina, setOficina] = useState("");
  const [erro, setErro] = useState("");
  const [concluido, setConcluido] = useState(false);

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setErro("");

    const placaLimpa = placa.replace(/-/g, "");
    const placaValida =
      /^[A-Z]{3}[0-9]{4}$/.test(placaLimpa) ||
      /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/.test(placaLimpa);

    if (!placaValida) {
      setErro("Digite uma placa válida, como ABC-1234 ou ABC1D23.");
      return;
    }

    if (data < dataAtualLocal()) {
      setErro("Escolha uma data de hoje em diante.");
      return;
    }

    setConcluido(true);
  }

  function reiniciar() {
    setData("");
    setPlaca("");
    setOficina("");
    setErro("");
    setConcluido(false);
  }

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
          <Link href="/guincho">Consulta de CEP</Link>
          <Link href="/planos">Planos</Link>
          <Link href="/faqs">Dúvidas</Link>
        </nav>
      </header>

      <main className={styles.conteudo}>
        <Link href="/" className={styles.voltar}>
          <FiArrowLeft /> Voltar ao início
        </Link>

        <div className={styles.layout}>
          <section className={styles.apresentacao}>
            <span className={styles.etiqueta}>CUIDADOS COM SEU VEÍCULO</span>
            <h1>
              Sua próxima revisão,
              <br />
              <em>mais fácil de planejar.</em>
            </h1>
            <p className={styles.descricao}>
              Experimente como seria agendar um serviço de oficina em poucos
              passos, com uma interface simples e organizada.
            </p>

            <div className={styles.passos}>
              <div className={styles.passo}>
                <div className={styles.passoIcone}><FiCalendar /></div>
                <div>
                  <strong>01. Escolha a data</strong>
                  <span>Selecione o dia de sua preferência.</span>
                </div>
              </div>
              <div className={styles.passo}>
                <div className={styles.passoIcone}><FiTool /></div>
                <div>
                  <strong>02. Informe o veículo</strong>
                  <span>Use uma placa fictícia para testar.</span>
                </div>
              </div>
              <div className={styles.passo}>
                <div className={styles.passoIcone}><FiCheckCircle /></div>
                <div>
                  <strong>03. Visualize o resumo</strong>
                  <span>Confira os dados inseridos no formulário.</span>
                </div>
              </div>
            </div>

            <div className={styles.nota}>
              <FiInfo />
              <p>
                <strong>Experiência demonstrativa</strong>
                Este formulário não está conectado a oficinas e não agenda
                serviços reais. Nenhum dado é enviado ou armazenado.
              </p>
            </div>
          </section>

          <section className={styles.card} aria-label="Simulação de agendamento">
            {concluido ? (
              <div className={styles.sucesso} role="status">
                <div className={styles.iconeSucesso}><FiCheckCircle /></div>
                <span className={styles.cardEtiqueta}>SIMULAÇÃO CONCLUÍDA</span>
                <h2>Pronto! Você testou o agendamento.</h2>
                <p>
                  Veja o resumo abaixo. Nenhuma oficina foi contatada e nenhum
                  serviço foi agendado.
                </p>

                <div className={styles.resumo}>
                  <div><span>Data selecionada</span><strong>{dataParaExibicao(data)}</strong></div>
                  <div><span>Placa informada</span><strong>{placa}</strong></div>
                  <div><span>Oficina ou região</span><strong>{oficina}</strong></div>
                </div>

                <button className={styles.botao} onClick={reiniciar} type="button">
                  Fazer outra simulação <FiArrowRight />
                </button>
              </div>
            ) : (
              <>
                <div className={styles.cardTopo}>
                  <div className={styles.icone}><FiCalendar /></div>
                  <span className={styles.cardEtiqueta}>AGENDAMENTO • DEMONSTRAÇÃO</span>
                </div>
                <h2>Planeje uma visita à oficina</h2>
                <p className={styles.cardDescricao}>
                  Preencha os campos para testar o fluxo de agendamento.
                </p>

                <form onSubmit={enviar} className={styles.formulario}>
                  <label htmlFor="dataAgendamento">Data preferida</label>
                  <input
                    id="dataAgendamento"
                    type="date"
                    value={data}
                    onChange={(evento) => setData(evento.target.value)}
                    required
                  />

                  <label htmlFor="placaVeiculo">Placa do veículo</label>
                  <input
                    id="placaVeiculo"
                    type="text"
                    placeholder="Ex.: ABC-1234 ou ABC1D23"
                    autoComplete="off"
                    maxLength={8}
                    value={placa}
                    onChange={(evento) => {
                      setPlaca(evento.target.value.toUpperCase().replace(/[^A-Z0-9-]/g, ""));
                      setErro("");
                    }}
                    required
                  />

                  <label htmlFor="oficinaProxima">Oficina ou região de preferência</label>
                  <input
                    id="oficinaProxima"
                    type="text"
                    placeholder="Ex.: Região central"
                    maxLength={80}
                    value={oficina}
                    onChange={(evento) => setOficina(evento.target.value)}
                    required
                  />

                  {erro && (
                    <p className={styles.erro} role="alert">
                      <FiInfo /> {erro}
                    </p>
                  )}

                  <button className={styles.botao} type="submit">
                    Simular agendamento <FiArrowRight />
                  </button>
                </form>
                <p className={styles.rodapeCard}>
                  <FiInfo /> Protótipo acadêmico: nenhuma reserva é efetuada.
                </p>
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
