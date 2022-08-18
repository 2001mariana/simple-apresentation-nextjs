import Link from 'next/link'
import style from './../styles/Home.module.scss'

export default function FourOhFour() {
  return <>
  <div className={style.Home}>
    <>Não encontramos resultados para sua busca.</h2>
  </div>
    <Link href="/">
        Voltar para home
    </Link>
  </>
}