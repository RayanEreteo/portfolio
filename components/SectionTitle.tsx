interface SectionTitleProps {
    title: string
    id?: string
}

function SectionTitle({ title, id }: SectionTitleProps) {
  return (
    <div id={id} className={`section-title bg-red-700 text-center`}>
        <h2 className="text-4xl text-white">{title}</h2>
    </div>
  )
}

export default SectionTitle