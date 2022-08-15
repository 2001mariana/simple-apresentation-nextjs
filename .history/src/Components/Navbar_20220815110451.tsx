import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }


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