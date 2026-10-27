
import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
  FiTruck,
  FiAlertCircle,
  FiShield,
} from "react-icons/fi";
import styles from "./guincho.module.css";

type Endereco = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

function formatarCep(valor: string) {
  const numeros = valor.replace(/\D/g, "").slice(0, 8);
  if (numeros.length > 5) {
    return `${numeros.slice(0, 5)}-${numeros.slice(5)}`;
  }
  return numeros;
}

export default function Guincho() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState<Endereco | null>(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function buscarEndereco(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cepLimpo = cep.replace(/\D/g, "");
    setErro("");
    setEndereco(null);

    if (cepLimpo.length !== 8) {
      setErro("Digite um CEP válido com 8 números.");
      return;
    }

    setCarregando(true);

    try {
      const resposta = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );

      if (!resposta.ok) {
        throw new Error("Erro na consulta");
      }

      const dados = await resposta.json();

      if (dados.erro) {
        setErro("CEP não encontrado. Verifique os números.");
        return;
      }

      setEndereco({
        cep: dados.cep || formatarCep(cepLimpo),
        logradouro: dados.logradouro || "Não informado",
        bairro: dados.bairro || "Não informado",
        localidade: dados.localidade || "Não informado",
        uf: dados.uf || "Não informado",
      });
    } catch {
      setErro("Não foi possível consultar o CEP. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className={styles.pagina}>
      <div className={styles.aviso}>
        <strong>PROJETO ACADÊMICO • FIAP • 2024</strong>
        <span>Protótipo educacional desenvolvido em parceria com a Porto Seguro.</span>
      </div>

      <header className={styles.cabecalho}>
        <Link href="/" className={styles.marca}>
          <FiShield />
          Portal <span>Auto</span>
        </Link>

        <nav className={styles.menu}>
          <Link href="/">Início</Link>
          <Link href="/agendamento">Agendamento</Link>
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
            <span className={styles.etiqueta}>
              ASSISTÊNCIA DIGITAL
            </span>

            <h1>
              Sua localização,
              <br />
              <em>em poucos segundos.</em>
            </h1>

            <p className={styles.descricao}>
              Encontre informações de endereço de maneira rápida
              e prática. Basta digitar um CEP para consultar
              automaticamente rua, bairro, cidade e estado.
            </p>

            <div className={styles.vantagens}>
              <div>
                <FiCheckCircle />
                <span>Consulta integrada à API ViaCEP</span>
              </div>
              <div>
                <FiCheckCircle />
                <span>Dados reais de localização</span>
              </div>
              <div>
                <FiCheckCircle />
                <span>Preenchimento automático</span>
              </div>
            </div>

            <div className={styles.observacao}>
              <FiAlertCircle />
              <p>
                <strong>Sobre esta demonstração</strong>
                Esta funcionalidade faz parte de um projeto
                acadêmico. A consulta de CEP é real, mas não
                solicita nem aciona um guincho.
              </p>
            </div>
          </section>

          <section className={styles.card}>
            <div className={styles.cardTopo}>
              <div className={styles.icone}>
                <FiMapPin />
              </div>
              <span>CONSULTA DE ENDEREÇO</span>
            </div>

            <h2>Onde você está?</h2>
            <p className={styles.cardDescricao}>
              Digite um CEP para encontrar o endereço correspondente.
            </p>

            <form onSubmit={buscarEndereco}>
              <label htmlFor="cep">CEP</label>

              <input
                id="cep"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                placeholder="00000-000"
                value={cep}
                maxLength={9}
                onChange={(event) => {
                  setCep(formatarCep(event.target.value));
                  setErro("");
                  setEndereco(null);
                }}
                aria-invalid={Boolean(erro)}
              />

              <button
                type="submit"
                className={styles.botao}
                disabled={carregando}
              >
                {carregando ? "Consultando..." : "Consultar endereço"}
                <FiArrowRight />
              </button>
            </form>

            {erro && (
              <div className={styles.erro} role="alert">
                <FiAlertCircle />
                {erro}
              </div>
            )}

            {endereco && (
              <div className={styles.resultado} aria-live="polite">
                <div className={styles.resultadoTitulo}>
                  <FiCheckCircle />
                  Endereço encontrado
                </div>

                <div className={styles.linha}>
                  <span>CEP</span>
                  <strong>{endereco.cep}</strong>
                </div>

                <div className={styles.linha}>
                  <span>Rua</span>
                  <strong>{endereco.logradouro}</strong>
                </div>

                <div className={styles.linha}>
                  <span>Bairro</span>
                  <strong>{endereco.bairro}</strong>
                </div>

                <div className={styles.linha}>
                  <span>Cidade</span>
                  <strong>{endereco.localidade}</strong>
                </div>

                <div className={styles.linha}>
                  <span>UF</span>
                  <strong>{endereco.uf}</strong>
                </div>
              </div>
            )}

            <p className={styles.rodapeCard}>
              <FiTruck />
              Consulta demonstrativa. Nenhum atendimento é solicitado.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
