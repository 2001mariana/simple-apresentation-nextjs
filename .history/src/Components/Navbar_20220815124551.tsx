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
          <Link href="/" locale="Home" 
          tyle={style}>Home</Link>
        </li>
        <li>
          <Link href="/products" locale="products" 
          tyle={style}>Produtos</Link>
        </li>
        <li>
          <Link href="/sobre" locale="sobre" 
          tyle={style}>Sobre</Link>
        </li>
        <li>
          <Link href="/contato" locale="contato" 
          tyle={style}>Contato</Link>
        </li>
      </ul>
      </div>
  )
}