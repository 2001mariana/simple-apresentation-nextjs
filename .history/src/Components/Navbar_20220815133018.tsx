import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter()

  const x = router.asPath.replace("/", '')
  
  const car = x + '-active'

   const navItemStyle = {color: router.asPath === router.route && 'red'}

   console.log(x)
   console.log(car)

  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Produtos</Link>
        </li>
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
      </ul>
      </div>
  )
}