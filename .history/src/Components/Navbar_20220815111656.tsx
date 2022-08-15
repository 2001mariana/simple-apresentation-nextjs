import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter()
   const style = {
     marginRight: 10,
     color: router.asPath === href ? 'red' : 'black',
   }

  console.log(router.asPath)

  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/" passHref style={style}>Home</Link>
        </li>
        <li>
          <Link href="/products" passHref style={style}>Produtos</Link>
        </li>
        <li>
          <Link href="/sobre" passHref style={style}>Sobre</Link>
        </li>
        <li>
          <Link href="/contato" passHref style={style}>Contato</Link>
        </li>
      </ul>
      </div>
  )
}