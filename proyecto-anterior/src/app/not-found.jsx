import Link from 'next/link'

function NotFound() {
  return (
    <section>
      <h1>404- Estas perdido Muchachon</h1>
      <p>No te cagues, aqui hay un boton para regresar</p>
      <Link href={'/'}>
        <h3>REGRESAR</h3>
      </Link>
    </section>
  )
}

export default NotFound
