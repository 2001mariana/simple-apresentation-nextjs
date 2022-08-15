import Header from '../Components/Header/Header'
import style from './../styles/index.module.scss'

export default function Home() {
  return (
    <div className={style.Home}>
      <Header />
      <p>Oi, eu sou uma aplicação Next</p>
    </div>
  )
}
