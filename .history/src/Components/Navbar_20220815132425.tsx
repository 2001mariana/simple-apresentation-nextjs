import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter()

  cont x = router.asPath 
  
  const car = router.asPath + '-active'

   const navItemStyle = {color: router.asPath === router.route && 'red'}

   console.log(car)

  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/" className={car}>Home</Link>
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