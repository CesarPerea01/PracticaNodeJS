import Link from 'next/link'

export const metadata = {
  title: 'Tienda Oficial Dku',
  description: 'Pagina principal de la tienda vo',
}

function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>
        <ul>
          <Link href={'/tienda/categorias'}>
            <li>Categorias</li>
          </Link>

          <Link href={'/tienda/categorias/computadoras'}>
            <li>Computadoras</li>
          </Link>
        </ul>
      </nav>
      {children}
    </>
  )
}

export default TiendaLayout
