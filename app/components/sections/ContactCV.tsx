function ContactCV() {
    return (
        <div className="skills-wrapper m-auto text-center">
            <h1 className="large-title">Me contacter</h1>
            <p>Pour toute demande, n'hésitez pas à me contacter via téléphone ou par email via ce formulaire.</p>
            <div className="download-button-container">
                <a href="/CV_Développeur.pdf" download className="download-button bg-blue-500 text-white rounded-lg p-2 m-2 w-48 inline-block hover:bg-blue-600">Télécharger mon CV</a>
            </div>
            <div className="form-container">
                <form action="https://formspree.io/f/mayvlrdo" method="POST" className="flex flex-col items-center">
                    <input type="text" name="name" placeholder="Nom" required className="border border-gray-300 rounded-lg p-2 m-2 w-64" />
                    <input type="email" name="email" placeholder="Email" required className="border border-gray-300 rounded-lg p-2 m-2 w-64" />
                    <textarea name="message" placeholder="Message" required className="border border-gray-300 rounded-lg p-2 m-2 w-64 h-32"></textarea>
                    <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 m-2 w-32 hover:bg-blue-600">Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default ContactCV