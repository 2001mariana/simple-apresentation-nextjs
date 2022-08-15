import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter()
  // const style = {
  //   marginRight: 10,
  //   color: router.asPath === href ? 'red' : 'black',
  // }

  console.log(router.asPath)

  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/"  style={style}>Home</Link>
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