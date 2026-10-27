
import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiEye,
  FiEyeOff,
  FiInfo,
  FiLock,
  FiShield,
} from "react-icons/fi";
import styles from "./auth.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [concluido, setConcluido] = useState(false);

  function simularLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEmail("");
    setSenha("");
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
              ACESSO • DEMONSTRAÇÃO
            </span>
            <h1>
              Uma experiência simples <em>desde o primeiro acesso.</em>
            </h1>
            <p>
              Explore como seria entrar em uma plataforma de serviços
              automotivos. Esta tela demonstra interface e validação de
              formulário, sem autenticação real.
            </p>

            <div className={styles.pontos}>
              <span><FiCheckCircle /> Interface responsiva</span>
              <span><FiCheckCircle /> Validação dos campos</span>
              <span><FiCheckCircle /> Projeto acadêmico FIAP</span>
            </div>

            <div className={styles.notaLateral}>
              <FiInfo /> Use somente dados inventados para testar.
            </div>
          </section>

          <section className={styles.card} aria-labelledby="titulo-login">
            {concluido ? (
              <div className={styles.conclusao} role="status">
                <div className={styles.iconeSucesso}>
                  <FiCheckCircle />
                </div>
                <span className={styles.etiqueta}>
                  SIMULAÇÃO CONCLUÍDA
                </span>
                <h2 id="titulo-login">Fluxo de login testado!</h2>
                <p>
                  Você concluiu uma demonstração da interface de acesso.
                  Nenhum usuário foi autenticado e nenhuma senha foi enviada
                  ou armazenada.
                </p>
                <Link href="/" className={styles.botaoPrincipal}>
                  Explorar o Portal Auto <FiArrowRight />
                </Link>
                <button
                  type="button"
                  className={styles.botaoSecundario}
                  onClick={() => setConcluido(false)}
                >
                  Testar novamente
                </button>
              </div>
            ) : (
              <>
                <div className={styles.iconeCard}><FiLock /></div>
                <span className={styles.etiqueta}>ÁREA DE ACESSO</span>
                <h2 id="titulo-login">Bem-vindo de volta.</h2>
                <p className={styles.subtitulo}>
                  Preencha os campos fictícios para experimentar o login.
                </p>

                <form className={styles.formulario} onSubmit={simularLogin}>
                  <label htmlFor="login-email">E-mail de teste</label>
                  <input
                    id="login-email"
                    type="email"
                    autoComplete="off"
                    placeholder="exemplo@teste.com"
                    required
                    maxLength={120}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />

                  <label htmlFor="login-senha">Senha fictícia</label>
                  <div className={styles.campoSenha}>
                    <input
                      id="login-senha"
                      type={mostrarSenha ? "text" : "password"}
                      autoComplete="off"
                      placeholder="Mínimo de 6 caracteres"
                      required
                      minLength={6}
                      maxLength={64}
                      value={senha}
                      onChange={(event) => setSenha(event.target.value)}
                    />
                    <button
                      type="button"
                      aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                      aria-pressed={mostrarSenha}
                      onClick={() => setMostrarSenha(!mostrarSenha)}
                    >
                      {mostrarSenha ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>

                  <button className={styles.botaoPrincipal} type="submit">
                    Simular entrada <FiArrowRight />
                  </button>
                </form>

                <p className={styles.alternativa}>
                  Ainda não tem conta?{" "}
                  <Link href="/registrar">Testar cadastro</Link>
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
