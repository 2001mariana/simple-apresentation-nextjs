import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/products">Produtos</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      </div>
  )
}