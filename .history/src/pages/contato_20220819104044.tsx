import React from "react";

import style from './../styles/Home.module.scss'

import Lottie from 'lottie-react'
import ContactAnimation from '../assets/animation/hello.json'
<div className={style.NotFound__animation}>
        <Lottie animationData={ContactAnimation} loop={true} />
      </div> 

export default function Page2() {
  return (
    <div className={style.Home}>
      <p>Esta é a página de contato</p>

      
    </div>
  )
}
