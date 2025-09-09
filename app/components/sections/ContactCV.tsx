"use client"
import { useState } from "react"

function ContactCV() {
    const [loading, setLoading] = useState<boolean>()

    function onSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setLoading(true);
    }

    return (
        <div className="skills-wrapper m-auto text-center">
            <h1 className="large-title">Me contacter</h1>
            <p>Pour toute demande, n'hésitez pas à me contacter via téléphone ou par email via ce formulaire.</p>
            <div className="download-button-container mt-5">
                <a href="/CV_Développeur.pdf" download className="download-button bg-blue-500 text-white rounded-lg p-2 m-2 w-48 inline-block hover:bg-blue-600">Télécharger mon CV</a>
            </div>
            <div className="form-container mt-6 border-2 rounded border-black-50 bg-[#f0f0f0] w-[19rem] m-auto">
                <form onSubmit={onSubmit} className="flex flex-col items-center font-bold placeholder:italic p-4">
                    <input type="text" name="name" placeholder="Nom" required className="border border-gray-300 rounded-lg p-2 m-2 w-64" />
                    <input type="email" name="email" placeholder="Email" required className="border border-gray-300 rounded-lg p-2 m-2 w-64" />
                    <textarea name="message" minLength={10} maxLength={150} placeholder="Message" required className="border border-gray-300 rounded-lg p-2 m-2 w-64 h-60 resize-none"></textarea>
                    <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 m-2 hover:bg-blue-600 hover:cursor-pointer">{loading ? "Envoi en cours..." : "Envoyer"}</button>
                </form>
            </div>
        </div>
    )
}

export default ContactCV