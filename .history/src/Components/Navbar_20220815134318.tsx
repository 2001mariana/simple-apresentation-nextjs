import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <div style={}>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/products" className="nav-link-active">
            <div style={}>Produtos</div>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <div style={}>Sobre</div>
          </Link>
        </li>
        <li>
          <Link href="/contato">
            <div style={}>Contato</div>
          </Link>
        </li>
      </ul>
      </div>
  )
}