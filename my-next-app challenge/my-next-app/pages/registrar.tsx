
import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiEye,
  FiEyeOff,
  FiInfo,
  FiShield,
  FiUserPlus,
} from "react-icons/fi";
import styles from "./auth.module.css";

export default function Registrar() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState("");
  const [concluido, setConcluido] = useState(false);

  function simularCadastro(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (senha !== confirmar) {
      setErro("As duas senhas precisam ser iguais.");
      return;
    }

    setErro("");
    setEmail("");
    setSenha("");
    setConfirmar("");
    setConcluido(true);
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
            <span className={styles.etiquetaClara}>
              CADASTRO • DEMONSTRAÇÃO
            </span>
            <h1>
              Tudo começa com uma <em>experiência bem pensada.</em>
            </h1>
            <p>
              Teste como seria criar uma conta em uma plataforma
              de serviços automotivos. O formulário valida os dados
              no navegador, sem criar um cadastro de verdade.
            </p>

            <div className={styles.pontos}>
              <span><FiCheckCircle /> Campos com validação</span>
              <span><FiCheckCircle /> Confirmação de senha</span>
              <span><FiCheckCircle /> Experiência responsiva</span>
            </div>

            <div className={styles.notaLateral}>
              <FiInfo /> Use somente dados inventados para testar.
            </div>
          </section>

          <section className={styles.card} aria-labelledby="titulo-cadastro">
            {concluido ? (
              <div className={styles.conclusao} role="status">
                <div className={styles.iconeSucesso}>
                  <FiCheckCircle />
                </div>
                <span className={styles.etiqueta}>
                  SIMULAÇÃO CONCLUÍDA
                </span>
                <h2 id="titulo-cadastro">Cadastro demonstrado!</h2>
                <p>
                  Você testou a validação e a confirmação dos campos.
                  Nenhuma conta foi criada e nenhuma senha foi enviada
                  ou armazenada.
                </p>
                <Link href="/login" className={styles.botaoPrincipal}>
                  Conhecer a tela de login <FiArrowRight />
                </Link>
                <button
                  type="button"
                  className={styles.botaoSecundario}
                  onClick={() => setConcluido(false)}
                >
                  Fazer outra simulação
                </button>
              </div>
            ) : (
              <>
                <div className={styles.iconeCard}><FiUserPlus /></div>
                <span className={styles.etiqueta}>NOVO CADASTRO</span>
                <h2 id="titulo-cadastro">Comece por aqui.</h2>
                <p className={styles.subtitulo}>
                  Preencha os dados fictícios e teste a experiência.
                </p>

                <form className={styles.formulario} onSubmit={simularCadastro}>
                  <label htmlFor="cad-email">E-mail de teste</label>
                  <input
                    id="cad-email"
                    type="email"
                    autoComplete="off"
                    placeholder="exemplo@teste.com"
                    required
                    maxLength={120}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />

                  <label htmlFor="cad-senha">Senha fictícia</label>
                  <div className={styles.campoSenha}>
                    <input
                      id="cad-senha"
                      type={mostrarSenha ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Mínimo de 6 caracteres"
                      required
                      minLength={6}
                      maxLength={64}
                      value={senha}
                      onChange={(event) => {
                        setSenha(event.target.value);
                        setErro("");
                      }}
                    />
                    <button
                      type="button"
                      aria-label={mostrarSenha ? "Ocultar senhas" : "Mostrar senhas"}
                      aria-pressed={mostrarSenha}
                      onClick={() => setMostrarSenha(!mostrarSenha)}
                    >
                      {mostrarSenha ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>

                  <label htmlFor="cad-confirmar">Confirme a senha</label>
                  <input
                    id="cad-confirmar"
                    type={mostrarSenha ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Repita a senha fictícia"
                    required
                    minLength={6}
                    maxLength={64}
                    value={confirmar}
                    onChange={(event) => {
                      setConfirmar(event.target.value);
                      setErro("");
                    }}
                    aria-invalid={Boolean(erro)}
                    aria-describedby={erro ? "cad-erro" : undefined}
                  />

                  {erro && (
                    <p id="cad-erro" role="alert" className={styles.erro}>
                      <FiInfo /> {erro}
                    </p>
                  )}

                  <button className={styles.botaoPrincipal} type="submit">
                    Simular cadastro <FiArrowRight />
                  </button>
                </form>

                <p className={styles.alternativa}>
                  Já conhece o projeto?{" "}
                  <Link href="/login">Testar login</Link>
                </p>

                <p className={styles.avisoFormulario}>
                  <FiInfo /> Não utilize seu e-mail ou senha reais.
                </p>
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
