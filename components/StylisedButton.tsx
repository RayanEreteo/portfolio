import React from 'react'

interface StylisedButtonProps {
    text: string
    onClick: () => void
}

function StylisedButton({text, onClick}: StylisedButtonProps) {
  return (
    <button onClick={onClick} className="btn">{text}</button>
  )
}

export default StylisedButton