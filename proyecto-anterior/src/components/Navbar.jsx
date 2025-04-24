import Link from 'next/link'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar py-5">
      <Link href={'/'}>
        <h1 className="text-3xl font-bold">NextJS Curso</h1>
      </Link>
      <ul>
        <Link href={'/'}>
          <li>Home</li>
        </Link>
        <Link href={'/about'}>
          <li>About</li>
        </Link>
        <Link href={'/tienda'}>
          <li>Tienda</li>
        </Link>
        <Link href={'/posts'}>
          <li>Comentarios</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
