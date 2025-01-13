"use client"

import React from 'react'
import StylizedButton from './StylizedButton'

function Navbar() {
    function downloadCV() {
        window.open('/CV_Développeur.pdf')
    }
    
    return (
        <nav>
            <div id='navbar' className="navbar-container flex flex-row items-center justify-around h-[5rem] text-[#FBE2E2] bg-[#002654] border-b-[1.2px] border-[#263d6c]">
                <div className="name glow text-[30px]">Rayan Ereteo</div>
                <div className="right-side inline-flex items-center">
                    <div className="links flex justify-between w-[470px]">
                        <a href="#about" className='text-[1.2rem] hover:underline hover:scale-105 transition-all'>A propos</a>
                        <a href="#skills" className='text-[1.2rem] hover:underline hover:scale-105 transition-all'>Compétences</a>
                        <a href="#projects" className='text-[1.2rem] hover:underline hover:scale-105 transition-all'>Projects</a>
                        <a href="#contact" className='text-[1.2rem] hover:underline hover:scale-105 transition-all'>Contact</a>
                    </div>
                    <div className="button-container ml-6">
                        <StylizedButton text='CV' onClick={downloadCV}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar