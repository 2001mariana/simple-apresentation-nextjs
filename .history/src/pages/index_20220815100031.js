import Navbar from '../components/Navbar'
import style from './../styles/index.module.scss'
export default function Home() {
  return (
    <>
    <Navbar />
    <p>Eu sou a home</p>
    <div className={style.Home}>
          <p>Página about</p>
        </div>
    </>
  )
}
