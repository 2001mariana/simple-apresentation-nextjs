import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <div className='sty'>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/products" className="nav-link-active">
            <div className='sty'>Produtos</div>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <div className='sty'>Sobre</div>
          </Link>
        </li>
        <li>
          <Link href="/contato">
            <div className='sty'>Contato</div>
          </Link>
        </li>
      </ul>
      </div>
  )
}