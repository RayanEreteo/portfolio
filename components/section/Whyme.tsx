import SoftSkillsCard from "../SoftSkillsCard"

function Whyme() {
    return (
        <div id="whyme" className="text-[#FBE2E2] flex flex-col justify-center items-center h-[60vh]">
            <div className="soft-skills">
                <h1 className="text-center text-3xl font-extrabold mb-5">Soft Skills : </h1>
                <div className="ss-cards text-center flex flex-row justify-center items-center">
                    <SoftSkillsCard title="Passionné" desc="Je suis passionné par le développement web. J'aime apprendre de nouvelles technologies et les appliquer dans mes projets." />
                    <SoftSkillsCard title="Curieux" desc="Je suis curieux et j'aime découvrir de nouvelles choses. J'aime explorer de nouvelles technologies et les appliquer dans mes projets." />
                    <SoftSkillsCard title="Autonome" desc="Je suis autonome et je sais travailler seul. J'aime travailler en équipe et je suis capable de mener un projet de A à Z." />
                </div>
            </div>
        </div>
    )
}

export default Whyme