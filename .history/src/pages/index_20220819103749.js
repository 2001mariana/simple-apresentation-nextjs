import style from './../styles/Home.module.scss'
import Lottie from 'lottie-react'
import Hello from '../assets/animation/hello.json'

export default function Home() {
  return (
    <>
    <div className={style.Home}>
      <p>Aplicação criada utilizando next-js</p>

      <div className={style.NotFound__animation}>
        <Lottie animationData={Hello} loop={true} />
      </div> 
    </div>
    </>
  )
}
