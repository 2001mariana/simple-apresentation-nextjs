import Link from 'next/link'


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
      </ul>
      <h1>Hello World Next!</h1>
      </div>
    </>
  )
}
