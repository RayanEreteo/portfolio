import SoftSkillsCard from "../SoftSkillsCard"
import Image from "next/image"

function Whyme() {
    const LANGUAGE_SVG_SIZE = 80

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
                    <SoftSkillsCard title="SEO" desc="Métadonnée, HTML semantic, Optimisation et bien plus pour ameliorer le score SEO de votre site web."/>
                    <SoftSkillsCard title="Responsive" desc="Site web 100% responsive, adapté à tous les supports (mobile, tablette, desktop)."/>
                    <SoftSkillsCard title="Performance" desc="Optimisation des images, du code, du CSS et du JS pour un site web plus rapide."/>
                </div>
            </div>
            <div id="languages-framework" className="flex flex-row justify-around mt-[5rem]">
                <div className="languages bg-[#0f327e] rounded border border-blue-400">
                    <h1 className="text-center text-3xl font-extrabold mb-5 ">Langages :</h1>
                    <div className="svg-container flex flex-row">
                        <Image src="/langframesvg/html5.svg" alt="html5" width={LANGUAGE_SVG_SIZE} height={LANGUAGE_SVG_SIZE} />
                        <Image src="/langframesvg/css3.svg" alt="css3" width={LANGUAGE_SVG_SIZE} height={LANGUAGE_SVG_SIZE} />
                        <Image src="/langframesvg/typescript.svg" alt="typescript" width={LANGUAGE_SVG_SIZE} height={LANGUAGE_SVG_SIZE} />
                    </div>
                </div>
                <div className="framework">
                    <h1 className="text-center text-3xl font-extrabold mb-5">Framework :</h1>
                </div>
            </div>
        </div>
    )
}

export default Whyme