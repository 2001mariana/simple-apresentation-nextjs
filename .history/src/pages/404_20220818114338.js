import Link from 'next/link'
import style from './../styles/Home.module.scss'

export default function FourOhFour() {
  return <>
  <div className={style.Home}></div>
    <h2>Não encontramos resultados para sua busca.</h2>
    <Link href="/">
        Voltar para home
    </Link>
  </>
}