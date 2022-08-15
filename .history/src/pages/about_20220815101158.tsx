import Link from 'next/link'
import style from './../styles/index.module.scss'

export default function About() {
    return (
        <div className={style.Home}>
          <Link href="/">
        <a>Voltar</a>
      </Link>
          <p>Página about</p>
        </div>
      )
}