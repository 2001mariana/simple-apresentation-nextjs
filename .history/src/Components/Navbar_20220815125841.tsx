import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter()
  

   const navItemStyle = {color: router.asPath === router.route ? 'red' : 'black'}

   console.log('router.asPath')
   console.log(router.asPath)

   console.log('router.route')
   console.log(router.route)

  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/" style={navItemStyle}>Home</Link>
        </li>
        <li>
          <Link href="/products" >Produtos</Link>
        </li>
        <li>
          <Link href="/sobre" >Sobre</Link>
        </li>
        <li>
          <Link href="/contato" >Contato</Link>
        </li>
      </ul>
      </div>
  )
}