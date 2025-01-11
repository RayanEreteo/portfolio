interface SectionTitleProps {
    title: string
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className={`section-title bg-red-700 text-center mb-6`}>
        <h2 className="text-4xl text-white">{title}</h2>
    </div>
  )
}

export default SectionTitle