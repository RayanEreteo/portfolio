"use client"

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

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
    <div id="contact-container" className="h-[80vh] flex justify-center items-center">
      <form action="" className="flex flex-col justify-between min-h-[250px]">
        <input className="p-3" type="email" placeholder="Votre email : " maxLength={50} required />
        <textarea className="p-3" name="" id="" placeholder="Votre message : " maxLength={200} rows={4} required></textarea>
        <ReCAPTCHA sitekey={siteKey}
        ref={recaptchaRef}
        onChange={handleChange}
        onExpired={handleExpired} />
        <button disabled={!isVerified} type="submit" className="bg-red-600 p-3 text-white rounded">Envoyer</button>
      </form>
    </div>
  )
}

export default Contact