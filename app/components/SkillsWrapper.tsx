import Image from "next/image"

type SkillsWrapperInfo = {
    src: string,
    alt: string,
    techName: string,
    w?: number
}

function SkillsWrapper({ src, alt, techName,w }: SkillsWrapperInfo) {
    const IMAGE_SIZE: number = 70

    return (
        <div className="skill">
            <Image
                src={src}
                width={w && w || IMAGE_SIZE}
                height={IMAGE_SIZE}
                alt={alt}
            />
            <p className="mt-5">{techName}</p>
        </div>
    )
}

export default SkillsWrapper