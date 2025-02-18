function Contact() {
  return (
    <div id="contact-container" className="h-[80vh] flex justify-center items-center">
      <form action="" className="flex flex-col justify-between min-h-[250px]">
        <input className="p-3" type="email" placeholder="Votre email : " maxLength={50} required />
        <textarea className="p-3" name="" id="" placeholder="Votre message : " maxLength={200} rows={4} required></textarea>
        <button type="submit" className="bg-red-600 p-3 text-white rounded">Envoyer</button>
      </form>
    </div>
  )
}

export default Contact