import { resolveHref } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === resolveHref ? 'red' : 'black',
  }

  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/" onClick={() => router.push('/')}>Home</Link>
        </li>
        <li>
          <Link href="/products" onClick={() => router.push('/products')}>Produtos</Link>
        </li>
        <li>
          <Link href="/sobre" onClick={() => router.push('/sobre')}>Sobre</Link>
        </li>
        <li>
          <Link href="/contato" onClick={() => router.push('/contato')}>Contato</Link>
        </li>
      </ul>
      </div>
  )
}