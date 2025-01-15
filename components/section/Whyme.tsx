import SoftSkillsCard from "../SoftSkillsCard"

function Whyme() {
    return (
        <div id="skills" className="text-[#FBE2E2] flex flex-col mt-[5rem] h-[100vh]">
            <div className="soft-skills mb-6">
                <h1 className="text-center text-3xl font-extrabold mb-5">Soft Skills : </h1>
                <div className="text-center flex flex-row justify-center items-center">
                    <SoftSkillsCard title="Passionné" desc="Je suis passionné par le développement web. J'aime apprendre de nouvelles technologies et les appliquer dans mes projets." />
                    <SoftSkillsCard title="Curieux" desc="Je suis curieux et j'aime découvrir de nouvelles choses. J'aime explorer de nouvelles technologies et les appliquer dans mes projets." />
                    <SoftSkillsCard title="Autonome" desc="Je suis autonome et je sais travailler seul. J'aime travailler en équipe et je suis capable de mener un projet de A à Z." />
                </div>
            </div>
            <div className="technical-skills">
                <h1 className="text-center text-3xl font-extrabold mb-5">Skills Technique : </h1>
                <div className="text-center flex flex-row justify-center items-center">
                    <SoftSkillsCard title="SEO" desc="Metadonnée, HTML semantic, Optimisation et bien plus pour ameliorer le score SEO de votre site web."/>
                    <SoftSkillsCard title="Responsive" desc="Site web 100% responsive, adapté à tous les supports (mobile, tablette, desktop)."/>
                    <SoftSkillsCard title="Performance" desc="Optimisation des images, du code, du CSS et du JS pour un site web plus rapide."/>
                </div>
            </div>
            <div id="languages-framework">
                <h1 className="text-center text-3xl font-extrabold mb-5 mt-5">Langages : </h1>
                <div className="languages">
                    
                </div>
                <div className="framework"></div>
            </div>
        </div>
    )
}

export default Whyme