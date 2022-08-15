import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter()
  

   const navItemStyle = {color: router.asPath === router.route && 'red'}

   console.log('router.asPath')
   console.log(router.asPath)

   console.log('router.route')
   console.log(router.route)

   console.log('router.asPath === router.route')
   console.log(router.asPath === router.route)

  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/" className={router.asPath === router.route && styles.isActive} >Home</Link>
        </li>
        <li>
          <Link href="/products" style={navItemStyle}>Produtos</Link>
        </li>
        <li>
          <Link href="/sobre" style={navItemStyle}>Sobre</Link>
        </li>
        <li>
          <Link href="/contato" style={navItemStyle}>Contato</Link>
        </li>
      </ul>
      </div>
  )
}