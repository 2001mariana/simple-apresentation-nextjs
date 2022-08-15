import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <div cl>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/products" className="nav-link-active">
            <div cl>Produtos</div>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <div cl>Sobre</div>
          </Link>
        </li>
        <li>
          <Link href="/contato">
            <div cl>Contato</div>
          </Link>
        </li>
      </ul>
      </div>
  )
}