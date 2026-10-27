
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCalendar,
  FiMapPin,
  FiTool,
  FiAlertCircle,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

import foto from "./img/familia feliz.png";

const servicos = [
  {
    titulo: "Agendar oficina",
    descricao: "Organize o cuidado com seu veículo de forma simples.",
    link: "/agendamento",
    Icone: FiCalendar,
  },
  {
    titulo: "Consultar CEP",
    descricao: "Encontre rua, bairro, cidade e UF automaticamente.",
    link: "/guincho",
    Icone: FiMapPin,
  },
  {
    titulo: "Revisão do veículo",
    descricao: "Conheça os principais cuidados com seu carro.",
    link: "/revisao",
    Icone: FiTool,
  },
  {
    titulo: "Problemas no veículo",
    descricao: "Explore as opções para identificar possíveis problemas.",
    link: "/problema",
    Icone: FiAlertCircle,
  },
];

export default function Home() {
  return (
    <div className="site">

      <div className="aviso">
        <strong>PROJETO ACADÊMICO • FIAP • 2024</strong>
        <span>
          Desenvolvido em um desafio acadêmico da FIAP em parceria com
           a Porto Seguro. Protótipo educacional, não oficial.
        </span>
      </div>


      <header className="cabecalho">
        <Link href="/" className="marca">
          <FiShield />
          Portal<span>Auto</span>
        </Link>

        <nav>
          <Link href="#servicos">Serviços</Link>
          <Link href="/guincho">Consulta de CEP</Link>
          <Link href="/planos">Planos</Link>
          <Link href="/faqs">Dúvidas</Link>
        </nav>

        <Link href="/login" className="entrar">
          Entrar <FiArrowUpRight />
        </Link>
      </header>

      <main>
        <section className="hero">
          <div className="heroTexto">
            <span className="etiqueta">
              TECNOLOGIA PARA QUEM ESTÁ EM MOVIMENTO
            </span>

            <h1>
              Seu carro em dia.
              <br />
              <em>Sua vida em movimento.</em>
            </h1>

            <p>
              Serviços automotivos reunidos em uma experiência
              digital simples, intuitiva e prática para o seu dia a dia.
            </p>

            <div className="acoes">
              <Link href="/guincho" className="botao">
                Testar consulta de CEP <FiArrowUpRight />
              </Link>

              <Link href="#servicos" className="botaoClaro">
                Explorar serviços <FiArrowRight />
              </Link>
            </div>

            <div className="beneficios">
              <span><FiCheckCircle /> Interface intuitiva</span>
              <span><FiCheckCircle /> Integração com ViaCEP</span>
            </div>
          </div>

          <div className="heroImagem">
            <Image
              src={foto}
              alt="Pessoas próximas a seus veículos"
              className="foto"
              priority
            />
            <div className="destaqueImagem">
              <FiMapPin />
              <div>
                <strong>Consulta por CEP</strong>
                <small>Dados reais de endereço</small>
              </div>
              <FiCheckCircle />
            </div>
          </div>
        </section>

        <section className="servicos" id="servicos">
          <div className="secaoTitulo">
            <span className="etiqueta">NOSSOS SERVIÇOS</span>
            <h2>Tudo o que você precisa, em um só lugar.</h2>
            <p>
              Explore as funcionalidades e descubra uma nova
              maneira de cuidar do seu veículo.
            </p>
          </div>

          <div className="cards">
            {servicos.map(({ titulo, descricao, link, Icone }) => (
              <Link href={link} className="card" key={link}>
                <div className="cardIcone">
                  <Icone />
                </div>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <span className="cardLink">
                  Explorar <FiArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        .site {
          font-family: Arial, Helvetica, sans-serif;
          color: #182e46;
          background: #fff;
          min-height: 100vh;
        }

        .site :global(*) {
          box-sizing: border-box;
        }

        .site :global(a) {
          text-decoration: none;
        }

        .aviso {
          background: #102f52;
          color: #d6e8f9;
          text-align: center;
          padding: 10px;
          font-size: 11px;
        }

        .cabecalho {
          max-width: 1200px;
          margin: auto;
          padding: 22px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .marca {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 25px;
          font-weight: 800;
          letter-spacing: -1px;
          color: #183551;
        }

        .marca :global(svg) {
          color: #087bf0;
          font-size: 30px;
        }

        .marca span {
          color: #087bf0;
        }

        nav {
          display: flex;
          gap: 26px;
          flex-wrap: wrap;
        }

        nav a, .entrar {
          font-size: 13px;
          font-weight: bold;
          color: #485f76;
        }

        .entrar {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hero {
          max-width: 1200px;
          margin: auto;
          padding: 80px 25px 100px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
        }

        .etiqueta {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #087bf0;
        }

        h1 {
          font-size: clamp(40px, 4vw, 60px);
          line-height: 1.1;
          letter-spacing: -2px;
          margin: 25px 0;
        }

        h1 em {
          color: #087bf0;
          font-style: normal;
        }

        .heroTexto > p {
          font-size: 16px;
          color: #708499;
          line-height: 1.8;
          max-width: 490px;
        }

        .acoes {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .botao, .botaoClaro {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px 21px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: bold;
        }

        .botao {
          background: #087bf0;
          color: white;
          box-shadow: 0 10px 25px #087bf033;
        }

        .botaoClaro {
          background: #eaf3fe;
          color: #23577e;
        }

        .beneficios {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 30px;
          color: #60798e;
          font-size: 12px;
        }

        .beneficios span {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .beneficios :global(svg) {
          color: #18a88e;
        }

        .heroImagem {
          position: relative;
          height: 400px;
          border-radius: 24px;
          box-shadow: 0 25px 50px #142f4c22;
        }

        .heroImagem :global(.foto) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
        }

        .destaqueImagem {
          position: absolute;
          bottom: 25px;
          left: -20px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: white;
          padding: 17px;
          border-radius: 14px;
          box-shadow: 0 10px 30px #122b4b33;
          color: #087bf0;
        }

        .destaqueImagem div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          color: #19354e;
          font-size: 13px;
        }

        .destaqueImagem small {
          font-size: 11px;
          color: #8195a8;
        }

        .servicos {
          background: #f4f8fc;
          padding: 85px 25px 100px;
        }

        .secaoTitulo {
          max-width: 1150px;
          margin: 0 auto 40px;
        }

        h2 {
          font-size: clamp(30px, 3vw, 42px);
          letter-spacing: -1.5px;
          margin: 15px 0;
        }

        .secaoTitulo p {
          color: #708499;
          font-size: 15px;
          line-height: 1.7;
        }

        .cards {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .card {
          background: white;
          padding: 26px;
          border: 1px solid #e0eaf3;
          border-radius: 17px;
          color: #1a324a;
          min-height: 270px;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .cardIcone {
          width: 50px;
          height: 50px;
          border-radius: 13px;
          background: #e7f2ff;
          color: #087bf0;
          display: grid;
          place-items: center;
          font-size: 23px;
        }

        .card h3 {
          font-size: 19px;
          margin: 30px 0 10px;
        }

        .card p {
          color: #708499;
          font-size: 13px;
          line-height: 1.7;
        }

        .cardLink {
          color: #087bf0;
          font-size: 13px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          padding-top: 15px;
        }

        .integracao {
          text-align: center;
          padding: 95px 25px;
          background: #103557;
          color: white;
        }

        .integracao .etiqueta {
          color: #8dcaff;
        }

        .integracao p {
          max-width: 600px;
          margin: 20px auto 30px;
          color: #c4d7e7;
          line-height: 1.8;
        }

        .integracao small {
          display: block;
          color: #b7cce0;
          margin-top: 25px;
          font-size: 11px;
        }

        @media (max-width: 950px) {
          .cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero {
            gap: 25px;
          }
        }

        @media (max-width: 700px) {
          .cabecalho {
            flex-wrap: wrap;
          }

          nav {
            order: 3;
            width: 100%;
            justify-content: center;
          }

          .hero {
            grid-template-columns: 1fr;
            padding: 55px 25px;
          }

          .heroImagem {
            height: 300px;
          }

          .destaqueImagem {
            left: 10px;
          }
        }

        @media (max-width: 480px) {
          .cards {
            grid-template-columns: 1fr;
          }

          .card {
            min-height: 230px;
          }

          nav {
            gap: 12px;
          }
        }
      `}</style>
      
<style jsx global>{`
  .site a {
    text-decoration: none;
  }

  .site .aviso {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px 16px;
    padding: 12px 20px;
  }

  .site .aviso strong {
    color: #fff;
    letter-spacing: 0.5px;
  }

  .site .aviso span {
    color: #d6e8f9;
  }

  .site .cabecalho .marca {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #183551;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -1px;
  }

  .site .cabecalho .marca span {
    color: #087bf0;
  }

  .site .cabecalho nav a,
  .site .cabecalho .entrar {
    color: #485f76;
    font-size: 13px;
    font-weight: 700;
  }

  .site .cabecalho .entrar {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .site .cabecalho nav a:hover,
  .site .cabecalho .entrar:hover {
    color: #087bf0;
  }

  .site .acoes .botao,
  .site .integracao .botao {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 16px 21px;
    background: #087bf0;
    color: #fff;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 700;
    box-shadow: 0 10px 25px #087bf033;
    transition: background 0.2s, transform 0.2s;
  }

  .site .acoes .botao:hover,
  .site .integracao .botao:hover {
    background: #005fc5;
    transform: translateY(-2px);
  }

  .site .acoes .botaoClaro {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 16px 21px;
    background: #eaf3fe;
    color: #23577e;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 700;
  }

  .site .cards .card {
    background: #fff;
    color: #1a324a;
    border: 1px solid #e0eaf3;
    border-radius: 17px;
    padding: 26px;
    min-height: 270px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 24px rgba(16, 47, 82, 0.04);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .site .cards .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(16, 47, 82, 0.1);
  }

  .site .cards .card h3 {
    font-size: 19px;
    font-weight: 700;
    color: #19354e;
    margin: 30px 0 10px;
  }

  .site .cards .card p {
    font-size: 13px;
    line-height: 1.7;
    color: #708499;
  }

  .site .cards .card .cardLink {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #087bf0;
    font-size: 13px;
    font-weight: 700;
    margin-top: auto;
    padding-top: 15px;
  }

  @media (max-width: 700px) {
    .site .aviso {
      flex-direction: column;
      text-align: center;
    }
  }
`}</style>

    </div>
  );
}
