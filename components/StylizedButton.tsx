import React from 'react'

interface StylizedButtonProps {
    text: string
    onClick: () => void
}

function StylizedButton({text, onClick}: StylizedButtonProps) {
  return (
    <button onClick={onClick} className="stylized-button">{text}</button>
  )
}

export default StylizedButton