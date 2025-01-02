import React from 'react'

interface StylizedButtonProps {
    text: string
    onClick: () => void
}

function StylizedButton({text, onClick}: StylizedButtonProps) {
  return (
    <button onClick={onClick} className="stylized-button bg-[#0D0E25] w-[100px] h-[50px] border-[1.2px] border-[#fff]">{text}</button>
  )
}

export default StylizedButton