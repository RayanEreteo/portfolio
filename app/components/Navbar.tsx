function Navbar() {
  return (
    <nav className="navbar font-franklin flex justify-center items-center h-[20vh] bg-cyan-900 text-white">
        <ul className="flex flex-row justify-around w-full">
            <li><a className="font-extrabold text-3xl" href="">Introduction</a></li>
            <li><a className="font-extrabold text-3xl" href="">Competences</a></li>
            <li><a className="font-extrabold text-3xl" href="">Projets</a></li>
            <li><a className="font-extrabold text-3xl" href="">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar