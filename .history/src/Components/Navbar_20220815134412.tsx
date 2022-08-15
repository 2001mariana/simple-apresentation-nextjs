import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <div className=''>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/products" className="nav-link-active">
            <div className=''>Produtos</div>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <div className=''>Sobre</div>
          </Link>
        </li>
        <li>
          <Link href="/contato">
            <div className=''>Contato</div>
          </Link>
        </li>
      </ul>
      </div>
  )
}