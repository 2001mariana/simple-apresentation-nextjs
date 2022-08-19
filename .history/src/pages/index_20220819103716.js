import style from './../styles/Home.module.scss'

export default function Home() {
  return (
    <>
    <div className={style.Home}>
      <p>Aplicação criada utilizando next-js</p>

      <div className={style.NotFound__animation}>
        <Lottie animationData={NotFoundAnimation} loop={true} />
      </div> 
    </div>
    </>
  )
}
