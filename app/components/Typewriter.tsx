"use client"
import { useEffect, useState } from "react"

type Typewriter = {
  textToWrite: string,
  typeSpeed: number
}

function Typewriter({textToWrite, typeSpeed}: Typewriter) {
  const [finalText, setfinalText] = useState("")

  useEffect(() => {
    if (finalText.length < textToWrite.length) {
      const timeout = setTimeout(() => setfinalText(textToWrite.substring(0, finalText.length + 1)), typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [finalText]);

  return (
    <p className="mt-5 font-mono font-bold">{finalText}</p>
  )
}

export default Typewriter