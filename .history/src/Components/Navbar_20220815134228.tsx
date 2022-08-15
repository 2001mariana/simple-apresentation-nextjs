import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/products" className="nav-link-active">
            <div>Produtos</div>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            
          </Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
      </ul>
      </div>
  )
}