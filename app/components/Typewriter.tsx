// TODO : Corriger le bug de l'index

"use client"
import { useEffect, useState } from "react"

type Typewriter = {
  textToWrite: string,
  typeSpeed: number
}

function Typewriter({textToWrite, typeSpeed}: Typewriter) {
  const [finalText, setfinalText] = useState("")

  useEffect(() => {
    let index: number = 0
    const interval = setInterval(() => {
        setfinalText((prev) => prev += textToWrite[index])
        index++
        if (index >= textToWrite.length - 1) {
          clearInterval(interval)
        }
    }, typeSpeed)
  }, [])
  

  return (
    <p className="mt-5 font-mono font-bold">{finalText}</p>
  )
}

export default Typewriter