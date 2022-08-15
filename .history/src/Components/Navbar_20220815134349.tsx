import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <><div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <div style={color} />: #FFFFFF}>Home</div>
        </Link>
      </li>
      <li>
        <Link href="/products" className="nav-link-active">
          <div style={color} />: #FFFFFF}>Produtos</div>
      </Link>
    </li><li>
        <Link href="/sobre">
          <div style={color} />: #FFFFFF}>Sobre</div>
      </Link></>
        </li>
        <li>
          <Link href="/contato">
            <div style={color: #FFFFFF}>Contato</div>
          </Link>
        </li>
      </ul>
      </div>
  )
}