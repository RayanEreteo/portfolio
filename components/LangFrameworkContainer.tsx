import Image from 'next/image'

interface LangFrameworkContainerProps {
    LANGUAGE_SVG_SIZE: number
    SVGName: string,
    TechName: string
}

function LangFrameworkContainer({LANGUAGE_SVG_SIZE, SVGName, TechName}: LangFrameworkContainerProps) {
  return (
    <div className="langframeworkcontainer">
        <Image src={`/langframesvg/${SVGName}.svg`} alt="html5" width={LANGUAGE_SVG_SIZE} height={LANGUAGE_SVG_SIZE} />
        <h2 className='text-center font-semibold'>{TechName}</h2>
    </div>
  )
}

export default LangFrameworkContainer