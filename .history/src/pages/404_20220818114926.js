import Link from 'next/link'
import style from './../styles/Home.module.scss'
import Lottie from 'lottie-react'
import ArrowDownnimation from '../../''

export default function FourOhFour() {
  return <>
  <div className={style.Home}>
    <p>Não encontramos resultados para sua busca.</p>
  </div>
  <div className={style.Home__animation}>
    <Lottie animationData={ArrowDownnimation} loop={true} />
  </div>
    <Link href="/">
        Voltar para home
    </Link>
  </>
}