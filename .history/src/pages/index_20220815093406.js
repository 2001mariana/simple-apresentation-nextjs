import Link from 'next/link'

import style from './../styles/index.module.scss'

export default function Home() {
  return (
    <>
    <div>
      <ul>
        <li>
          <Link href="/products">Produtos</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
        <li>
          <Link href="/page2">page2</Link>
        </li>
      </ul>
      </div>
    </>
  )
}
