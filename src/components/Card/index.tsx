import { useState } from "react"

import './styles.css'

export type CardProps = {
  selected: boolean
  image: string
}

export function Card({image, selected}: CardProps) {
  const [isSelected, toggleSelect] = useState(selected)

  if (!isSelected) {
    return (
      <div
        className="image-placeholder"
        onClick={() => toggleSelect((selectState) => !selectState)}
      />
    )
  }

  return (
    <div
      onClick={() => toggleSelect((selectState) => !selectState)}
      style={{backgroundImage: `url(${image})`}}
      className="image-container"
    />
  )
}
