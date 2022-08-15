import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <h1>404 - Página não encontrada</h1>
    <Link href="/">
      <a>
        Voltar para home
      </a>
    </Link>
  </>
}