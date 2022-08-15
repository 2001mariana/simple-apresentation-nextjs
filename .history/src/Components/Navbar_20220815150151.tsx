import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <div className={styles.link}>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/products" className="nav-link-link">
            <div className={styles.link}>Produtos</div>
          </Link>
        </li>
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/contato" className={styles.link}>
            Contato
          </Link>
        </li>
      </ul>
      </div>
  )
}