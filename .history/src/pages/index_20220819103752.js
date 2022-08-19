import style from './../styles/Home.module.scss'
import Lottie from 'lottie-react'
import Conat from '../assets/animation/hello.json'

export default function Home() {
  return (
    <>
    <div className={style.Home}>
      <p>Aplicação criada utilizando next-js</p>

      <div className={style.NotFound__animation}>
        <Lottie animationData={Conat} loop={true} />
      </div> 
    </div>
    </>
  )
}
