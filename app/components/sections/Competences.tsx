import SkillsWrapper from "../SkillsWrapper"
import SoftskillsCard from "../Softskillscard"

function Competences() {
    return (
        <div className="skill-wrapper m-auto text-center flex flex-col justify-center items-center">
            <h1 className="large-title">Mes Compétences</h1>
            <div className="languages-container-section bg-[#f0f0f0] w-[30vw] p-4 border-2 rounded">
                <p className="normal-text">Langages de programmation</p>
                <div className="languages-container flex flex-row justify-around">
                    <SkillsWrapper src="skillslogo/HTML.svg" techName="HTML" alt="HTML" />
                    <SkillsWrapper src="skillslogo/CSS.svg" techName="CSS" alt="CSS" />
                    <SkillsWrapper src="skillslogo/JS.svg" techName="JavaScript" alt="JS" />
                    <SkillsWrapper src="skillslogo/C.svg" techName="C" alt="C" />
                    <SkillsWrapper src="skillslogo/JAVA.svg" techName="Java" alt="JAVA" />
                </div>
            </div>
            <div className="frameworks-container-section bg-[#f0f0f0] w-[30vw] p-4 border-2 rounded m-7">
                <p className="normal-text">Frameworks / Librairie</p>
                <div className="frameworks-container flex flex-row justify-around">
                    <SkillsWrapper src="skillslogo/REACT.svg" techName="React" alt="REACT" />
                    <SkillsWrapper src="skillslogo/NEXT.svg" techName="NextJS" alt="NEXTJS" />
                    <SkillsWrapper src="skillslogo/NODE.svg" techName="NodeJS" alt="NODE" />
                    <SkillsWrapper src="skillslogo/EXPRESS.svg" techName="ExpressJS" alt="EXPRESS" />
                    <SkillsWrapper src="skillslogo/TAILWIND.svg" techName="Tailwind" alt="TAILWIND" />
                </div>
            </div>
            <div className="tech-skills-section flex flex-row">
                <SoftskillsCard title="SEO" description="Capacité à optimiser le contenu pour les moteurs de recherche." />
                <SoftskillsCard title="Optimisation" description="Capacité à améliorer les performances et l'efficacité des systèmes." />
                <SoftskillsCard title="Responsive" description="Capacité à créer des designs adaptatifs et à résoudre des problèmes d'affichage." />
            </div>
        </div>
    )
}
export default Competences