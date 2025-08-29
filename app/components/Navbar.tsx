"use client"
import { motion } from "framer-motion";

function Navbar() {
  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        style={{ backgroundColor: '#dadfe8' }}
        className="navbar hidden md:flex justify-center items-center h-[10vh] text-black"
      >
        <ul className="flex flex-row justify-around w-full">
          <li className="flex flex-row group">
            <img className="mr-5 opacity-0 group-hover:opacity-100 group-hover:scale-50 transition-all duration-300" src="diamond.svg" alt="diamond" width={30} />
            <a className=" font-light text-3xl" href="/skills">Introduction</a>
          </li>
          <li className="flex flex-row group">
            <img className="mr-5 opacity-0 group-hover:opacity-100 group-hover:scale-50 transition-all duration-300" src="diamond.svg" alt="diamond" width={30} />
            <a className=" font-light text-3xl" href="/skills">Compétences</a>
          </li>
          <li className="flex flex-row group">
            <img className="mr-5 opacity-0 group-hover:opacity-100 group-hover:scale-50 transition-all duration-300" src="diamond.svg" alt="diamond" width={30} />
            <a className=" font-light text-3xl" href="/projects">Projets</a>
          </li>
          <li className="flex flex-row group">
            <img className="mr-5 opacity-0 group-hover:opacity-100 group-hover:scale-50 transition-all duration-300" src="diamond.svg" alt="diamond" width={30} />
            <a className=" font-light text-3xl" href="/contact">Contact</a>
          </li>
        </ul>
      </motion.nav>
      {/* Mobile navbar */}
      <div  style={{ backgroundColor: '#dadfe8' }} className="mobile-navbar block md:hidden">
        <ul className="flex flex-col items-center w-full">
          <li className="mb-3">
            <a className="font-light text-3xl" href="/">Introduction</a>
          </li>
          <li className="mb-3">
            <a className="font-light text-3xl" href="/skills">Compétences</a>
          </li>
          <li className="mb-3">
            <a className="font-light text-3xl" href="/projects">Projets</a>
          </li>
          <li className="mb-3">
            <a className="font-light text-3xl" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar