import Navbar from '../components/Navbar'
import style from './../styles/index.module.scss'

export default function Home() {
  return (
    <>
    <Navbar />
    
    <div className={style.Home}>
    <p>Eu sou a home</p>
      </div>
    </>
  )
}
