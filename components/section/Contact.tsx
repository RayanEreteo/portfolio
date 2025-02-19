"use client"

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Contact() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  return (
    <div id="contact-container" className="h-[80vh] w-[100vw] flex justify-around items-center">
      <form action="" className="flex flex-col justify-between min-h-[400px] bg-blue-900 p-5 border border-white rounded">
        <input className="p-3" type="email" placeholder="Votre email : " maxLength={50} required />
        <textarea className="p-3" name="" id="" placeholder="Votre message : " maxLength={200} rows={4} required></textarea>
        <ReCAPTCHA sitekey={siteKey}
        ref={recaptchaRef}
        onChange={handleChange}
        onExpired={handleExpired} />
        <button disabled={!isVerified} type="submit" className="bg-red-600 p-3 text-white rounded disabled:bg-black disabled:cursor-not-allowed">Envoyer</button>
      </form>
      <div className="contact-info-container text-white">
        <div className="contact-info flex items-center mb-5">
          <MdEmail size={50} color="white"/>
          <p className="font-semibold ml-5">rayabf5@gmail.com</p>
        </div>
        <div className="contact-info flex items-center mb-5">
          <MdPhone size={50} color="white"/>
          <p className="font-semibold ml-5">07 44 54 35 56</p>
        </div>
        <div className="contact-info flex items-center mb-5">
          <BsGithub size={50} color="white"/>
          <p className="font-semibold ml-5">rayabf5@gmail.com</p>
        </div>
        <div className="contact-info flex items-center mb-5">
          <BsLinkedin size={50} color="white"/>
          <p className="font-semibold ml-5">07 44 54 35 56</p>
        </div>
      </div>
    </div>
  )
}

export default Contact