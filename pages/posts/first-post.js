import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>INTEGRANTES</h1>
      <h2>PROFESSOR: GUSTAVO</h2>
      <h3>ALUNOS: JONES, JOHN, YOSHIO, KEVIN</h3>
      <h2>
        <Link href="/">
          <a>Volte para o inicio</a>
        </Link>
      </h2>
    </>
  )
}