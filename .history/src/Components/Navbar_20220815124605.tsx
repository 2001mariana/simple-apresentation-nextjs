import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter()
  

   const navItemStyle = router.asPath === router.route && 'isActive'


  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/" locale="Home" >Home</Link>
        </li>
        <li>
          <Link href="/products" locale="products" >Produtos</Link>
        </li>
        <li>
          <Link href="/sobre" locale="sobre" >Sobre</Link>
        </li>
        <li>
          <Link href="/contato" locale="contato" >Contato</Link>
        </li>
      </ul>
      </div>
  )
}