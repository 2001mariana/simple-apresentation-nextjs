import Link from 'next/link'
import style from './../styles/Home.module.scss'

export default function FourOhFour() {
  return <>
  <div className={style.Home}>
    <p>Não encontramos resultados para sua busca.</p>
  </div>
  <div className="NotFound__animation">
            <Lottie animationData={ArrowDownnimation} loop={true} />
        </div>
    <Link href="/">
        Voltar para home
    </Link>
  </>
}