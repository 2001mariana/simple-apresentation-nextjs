import Link from 'next/link'
import style from './../styles/Home.module.scss'

export default function About() {
    return (
        <div className={style.Home}>
          <Link href="/">
            <a>Voltar</a>
          </Link>

          <p>Página de informações sobre...</p>

        </div>
      )
}