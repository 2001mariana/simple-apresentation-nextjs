import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter()
  

   const navItemStyle = router.asPath === router.route ? 'isActive' : ''

   console.log('router.asPath')
   console.log(router.asPath)

   console.log('router.route')
   console.log(router.route)

  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/" className={`${navItemStyle}`}>Home</Link>
        </li>
        <li>
          <Link href="/products" className={navItemStyle}>Produtos</Link>
        </li>
        <li>
          <Link href="/sobre" className={navItemStyle}>Sobre</Link>
        </li>
        <li>
          <Link href="/contato" className={navItemStyle}>Contato</Link>
        </li>
      </ul>
      </div>
  )
}