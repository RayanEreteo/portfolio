import SkillsWrapper from "../components/SkillsWrapper"

function Competences() {
    return (
        <div className="skill-wrapper w-fit m-auto text-center">
            <h1 className="large-title">Mes Compétences</h1>
            <div className="languages-container-section bg-[#f0f0f0] w-[30vw] p-4 border-2 rounded m-7">
                <p className="normal-text">Langages de programmation</p>
                <div className="languages-container flex flex-row justify-around">
                    <SkillsWrapper src="skillslogo/HTML.svg" techName="HTML" alt="HTML"/>
                    <SkillsWrapper src="skillslogo/CSS.svg" techName="CSS" alt="CSS"/>
                    <SkillsWrapper src="skillslogo/JS.svg" techName="JavaScript" alt="JS"/>
                    <SkillsWrapper src="skillslogo/C.svg" techName="C" alt="C"/>
                    <SkillsWrapper src="skillslogo/JAVA.svg" techName="Java" alt="JAVA"/>
                </div>
            </div>
            <div className="frameworks-container-section bg-[#f0f0f0] p-4 border-2 rounded m-7">
                <p className="normal-text">Frameworks / Librairie</p>
                <div className="frameworks-container flex flex-row justify-around">
                    <SkillsWrapper src="skillslogo/REACT.svg" techName="React" alt="REACT"/>
                    <SkillsWrapper src="skillslogo/NEXT.svg" techName="NextJS" alt="NEXTJS"/>
                    <SkillsWrapper src="skillslogo/NODE.svg" techName="NodeJS" alt="NODE"/>
                    <SkillsWrapper src="skillslogo/EXPRESS.svg" techName="ExpressJS" alt="EXPRESS"/>
                    <SkillsWrapper src="skillslogo/TAILWIND.svg" techName="Tailwind" alt="TAILWIND"/>
                </div>
            </div>
        </div>
    )
}
export default Competences