"use client"
import { b } from "framer-motion/client";
import { useState, useRef } from "react"

type ResponseData = {
    success?: boolean;
    message?: string;
};

function ContactCV() {
    const [loading, setLoading] = useState<boolean>()
    const [responseData, setResponseData] = useState<ResponseData>({})

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const API_LINK = "/api/mail/send"

    async function sendEmail(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setLoading(true);

        const DATA = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value
        }
        const JSON_DATA = JSON.stringify(DATA)

        try {
            const res = await fetch(API_LINK, {
                method: "POST",
                body: JSON_DATA
            })
            const data = await res.json()
            setResponseData({success: data.success, message: data.message})
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
        
    }

    return (
        <div className="skills-wrapper m-auto text-center">
            <h1 className="large-title">Me contacter</h1>
            <p>Pour toute demande, n'hésitez pas à me contacter via téléphone ou par email via ce formulaire.</p>
            <div className="download-button-container mt-5">
                <a href="/CV_Développeur.pdf" download className="download-button bg-blue-500 text-white rounded-lg p-2 m-2 w-48 inline-block hover:bg-blue-600">Télécharger mon CV</a>
            </div>
            <div className="form-container mt-6 border-2 rounded border-black-50 bg-[#f0f0f0] w-[19rem] m-auto">
                <form onSubmit={sendEmail} className="flex flex-col items-center font-bold placeholder:italic p-4">
                    <input ref={nameRef} type="text" name="name" placeholder="Nom Complet" required className="border border-gray-300 rounded-lg p-2 m-2 w-64" />
                    <input ref={emailRef} type="email" name="email" placeholder="Email" required className="border border-gray-300 rounded-lg p-2 m-2 w-64" />
                    <textarea ref={messageRef} name="message" minLength={10} maxLength={150} placeholder="Message" required className="border border-gray-300 rounded-lg p-2 m-2 w-64 h-60 resize-none"></textarea>
                    <button type="submit" disabled={loading} className="bg-blue-500 text-white rounded-lg p-2 m-2 hover:bg-blue-600 hover:cursor-pointer disabled:bg-black disabled:cursor-not-allowed">{loading ? "Envoi en cours..." : "Envoyer"}</button>
                </form>
                <p className="status-message mb-3">{responseData.message}</p>
            </div>
        </div>
    )
}

export default ContactCV