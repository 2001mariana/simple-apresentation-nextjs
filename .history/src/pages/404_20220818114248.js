import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <h2>Não encontramos resultados para sua busca.</h2>
    <Link href="/">
        Voltar para home
    </Link>
  </>
}