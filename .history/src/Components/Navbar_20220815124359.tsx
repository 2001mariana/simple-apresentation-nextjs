import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter()
   const style = {
    //color: router.asPath === href ? 'red' : 'black',
   }

  console.log(router.asPath)
  console.log('locale')
  console.log(router.route)

  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/" locale="Home" style={style}>Home</Link>
        </li>
        <li>
          <Link href="/products" locale="products" style={style}>Produtos</Link>
        </li>
        <li>
          <Link href="/sobre" locale="sobre" style={style}>Sobre</Link>
        </li>
        <li>
          <Link href="/contato" locale="contato" style={style}>Contato</Link>
        </li>
      </ul>
      </div>
  )
}