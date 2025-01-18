"use client"

import Image from 'next/image'
import { useState } from 'react'

interface LangFrameworkContainerProps {
    /** Size of the SVG */
    LANGUAGE_SVG_SIZE: number
    /** Name of the SVG file (no .svg needed) */
    SVGName: string,
    /** Name of the technology, the name will appear underneath the SVG */
    TechName: string,
    /** Should SVG be white ? */
    whiteFilter?: boolean
}


function LangFrameworkContainer({LANGUAGE_SVG_SIZE, SVGName, TechName, whiteFilter}: LangFrameworkContainerProps) {

  return (
    <div className="langframeworkcontainer">
        <Image className={whiteFilter ? "white-svg mb-6" : "mb-6"} src={`/langframesvg/${SVGName}.svg`} alt="html5" width={LANGUAGE_SVG_SIZE} height={LANGUAGE_SVG_SIZE} />
        <h2 className='text-center font-semibold'>{TechName}</h2>
    </div>
  )
}

export default LangFrameworkContainer