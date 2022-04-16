import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Programando Python</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> 
      <h1 className="title">
        Turma de Programação Python
      </h1>

        <div className="grid">
          <a href="https://drive.google.com/drive/folders/1oz3bpui66yaZ-lixRg2OTPFYIBg4TaJv?usp=sharing" className="card">
            <h3>Aulas em Vídeo &rarr;</h3>
            <p>Todas as aulas até o momento.</p>
          </a>

          <a href="https://drive.google.com/drive/folders/1DZqRp_B_Tu6A5NWvIwuGt4Fp7O21UFu_?usp=sharing" className="card">
            <h3>Documentos &rarr;</h3>
            <p>Slides das aulas com atividades</p>
          </a>

          <a
            href="https://wiki.python.org.br/ListaDeExercicios"
            className="card"
          >
            <h3>Lista de Atividades &rarr;</h3>
            <p>Aprimore seu conhecimento com exercicios sequenciais</p>
          </a>

          <a href="/posts/first-post" className="card">
            <h3>Conheça a turma &rarr;</h3>
            <p>Veja o nome dos integrantes</p>
          </a>

          <a
            href="https://us05web.zoom.us/j/9273830676?pwd=djR5SVI5anZxRDVxUTM1Q3BWSGZyZz09"
            className="card"
          >
            <h3>Entre na Aula &rarr;</h3>
            <p>
              Aulas via zoom
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Produzido por Jones Melo
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 3rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
