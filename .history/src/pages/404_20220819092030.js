import Link from 'next/link'
import style from './../styles/404.module.scss'
import Lottie from 'lottie-react'
import ArrowDownnimation from '../assets/animation/'

export default function FourOhFour() {
  return <>
  <div className={style.NotFound}>
    <p>Não encontramos resultados para sua busca.</p>
  </div>
  <div className={style.NotFound__animation}>
    <Lottie animationData={ArrowDownnimation} loop={true} />
  </div>
    <Link href="/">
        Voltar para home
    </Link>
  </>
}