import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <h1>Não encontramos resultados para sua busca.</h1>
    <Link href="/">
      <a>
        Voltar para home
      </a>
    </Link>
  </>
}