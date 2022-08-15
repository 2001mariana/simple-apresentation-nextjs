import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter()
  

   const navItemStyle = router.asPath === router.route ? 'isActive' : ''


  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/"  className={navItemStyle}>Home</Link>
        </li>
        <li>
          <Link href="/products" loca className={navItemStyle}>Produtos</Link>
        </li>
        <li>
          <Link href="/sobre" className={navItemStyle}>Sobre</Link>
        </li>
        <li>
          <Link href="/contato" loc className={navItemStyle}>Contato</Link>
        </li>
      </ul>
      </div>
  )
}