const Link = require('next/link')

function Navbar() {
  return (
    <nav className="bg-slate-300 mb-4 flex justify-between items-center px-20 py-4 font-bold text-black">
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
