interface SoftSkillsCardProps {
    title: string,
    desc: string
}


function SoftSkillsCard({title, desc}: SoftSkillsCardProps){
  return (
    <div className="ss-card h-[122px] w-[400px] text-[#FFF] bg-[#0f327e] rounded border border-blue-400 mr-6">
        <p className="ss-title mb-6 font-semibold">{title}</p>
        <p className="ss-desc">{desc}</p>
    </div>
  )
}

export default SoftSkillsCard