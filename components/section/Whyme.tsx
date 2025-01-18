import LangFrameworkContainer from "../LangFrameworkContainer"
import SoftSkillsCard from "../SoftSkillsCard"
import Image from "next/image"

function Whyme() {
    const LANGUAGE_SVG_SIZE = 80

    return (
        <div className="text-[#FBE2E2] flex flex-col mt-[5rem] h-[90vh]">
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
                    <div className="svg-container flex flex-row justify-around p-4 w-[40rem]">
                        <LangFrameworkContainer LANGUAGE_SVG_SIZE={LANGUAGE_SVG_SIZE} SVGName="html5" TechName="HTML5" />
                        <LangFrameworkContainer LANGUAGE_SVG_SIZE={LANGUAGE_SVG_SIZE} SVGName="css3" TechName="CSS3" />
                        <LangFrameworkContainer LANGUAGE_SVG_SIZE={LANGUAGE_SVG_SIZE} SVGName="typescript" TechName="Typescript" />
                        <LangFrameworkContainer LANGUAGE_SVG_SIZE={LANGUAGE_SVG_SIZE} SVGName="php" TechName="PHP" />
                        <LangFrameworkContainer LANGUAGE_SVG_SIZE={LANGUAGE_SVG_SIZE} SVGName="java" TechName="Java" />
                        <LangFrameworkContainer LANGUAGE_SVG_SIZE={LANGUAGE_SVG_SIZE} SVGName="mysql" TechName="MySQL" />

                    </div>
                </div>
                <div className="framework bg-[#0f327e] rounded border border-blue-400">
                    <h1 className="text-center text-3xl font-extrabold mb-5">Framework :</h1>
                    <div className="svg-container flex flex-row justify-around p-4 w-[40rem]">
                        <LangFrameworkContainer LANGUAGE_SVG_SIZE={LANGUAGE_SVG_SIZE} SVGName="nodejs" TechName="NODEJS" />
                        <LangFrameworkContainer LANGUAGE_SVG_SIZE={LANGUAGE_SVG_SIZE} SVGName="express" TechName="EXPRESS" whiteFilter/>
                        <LangFrameworkContainer LANGUAGE_SVG_SIZE={LANGUAGE_SVG_SIZE} SVGName="nextjs" TechName="NextJS" whiteFilter/>
                        <LangFrameworkContainer LANGUAGE_SVG_SIZE={LANGUAGE_SVG_SIZE} SVGName="spring" TechName="Spring" />
                        <LangFrameworkContainer LANGUAGE_SVG_SIZE={LANGUAGE_SVG_SIZE} SVGName="symfony" TechName="Symfony" whiteFilter/>
                        <LangFrameworkContainer LANGUAGE_SVG_SIZE={LANGUAGE_SVG_SIZE} SVGName="tailwind" TechName="TailwindCSS" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyme