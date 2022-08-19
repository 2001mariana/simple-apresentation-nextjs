import Link from 'next/link'
import style from './../styles/404.module.scss'
import Lottie from 'lottie-react'
import NotFoundAnimation from '../assets/animation/404.json'

export default function FourOhFour() {
  return <>
  <div className={style.NotFound}>
    <p>Não encontramos resultados para sua busca.</p>
  </div>
  <div className={style.NotFound__animation}>
    <Lottie animationData={NotFoundAnimation} loop={true} />
  </div>
    
    <button className={style.NotFound__button}>
    <Link href="/">
        Voltar para home
    </Link>
    </button>
  </>
}