import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const 

  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <div className={styles.link} onClick={() => console.log('click')}>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/products" className="nav-link-link">
            <div className={styles.link} onClick={() => console.log('click')}>Produtos</div>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <div className={styles.link} onClick={() => console.log('click')}>Sobre</div>
          </Link>
        </li>
        <li>
          <Link href="/contato">
            <div className={styles.link} onClick={() => console.log('click')}>Contato</div>
          </Link>
        </li>
      </ul>
      </div>
  )
}