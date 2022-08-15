import Link from 'next/link'

import style from './../styles/index.module.scss'

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/products">Produtos</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
      <h1>Hello World Next!</h1>
    </>
  )
}
