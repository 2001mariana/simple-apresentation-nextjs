import style from './../styles/Home.module.scss'

import Lottie from 'lottie-react'
import ContactAnimation from '../assets/animation/hello.json'
<div className={style.NotFound__animation}>
        <Lottie animationData={ContactAnimation} loop={true} />
      </div> 

export default function Home() {
  return (
    <>
    <div className={style.Home}>
      <p>Aplicação criada utilizando next-js</p>    
    </div>
    </>
  )
}
