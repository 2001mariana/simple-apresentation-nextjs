import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <div className={styles.}>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/products" className="nav-link-active">
            <div className={styles.}>Produtos</div>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <div className={styles.}>Sobre</div>
          </Link>
        </li>
        <li>
          <Link href="/contato">
            <div className={styles.}>Contato</div>
          </Link>
        </li>
      </ul>
      </div>
  )
}