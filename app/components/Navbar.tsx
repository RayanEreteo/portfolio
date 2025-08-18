"use client"
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 12 }}
      style={{ backgroundColor: '#dadfe8' }}
      className="font-franklin navbar flex justify-center items-center h-[20vh] text-black"
    >
      <ul className="flex flex-row justify-around w-full">
        <li className="flex flex-row group">
          <img className="mr-5 opacity-0 group-hover:opacity-100 group-hover:scale-50 transition-all duration-300" src="diamond.svg" alt="diamond" width={30} />
          <a className=" font-light text-3xl" href="">Compétences</a>
        </li>
        <li className="flex flex-row group">
          <img className="mr-5 opacity-0 group-hover:opacity-100 group-hover:scale-50 transition-all duration-300" src="diamond.svg" alt="diamond" width={30} />
          <a className=" font-light text-3xl" href="">Projets</a>
        </li>
        <li className="flex flex-row group">
          <img className="mr-5 opacity-0 group-hover:opacity-100 group-hover:scale-50 transition-all duration-300" src="diamond.svg" alt="diamond" width={30} />
          <a className=" font-light text-3xl" href="">Contact</a>
        </li>
      </ul>
    </motion.nav>
  )
}

export default Navbar