type SoftskillsCardProps = {
  title: string;
  description: string;
};

function SoftskillsCard({ title, description }: SoftskillsCardProps) {
  return (
    <div className="softskills-card text-black bg-[#f0f0f0] p-4 border-2 rounded w-64 m-7 shadow-2xl">
      <h3 className="softskills-card-title lg:text-lg font-semibold">{title}</h3>
      <p className="softskills-card-description text-sm">{description}</p>
    </div>
  )
}

export default SoftskillsCard