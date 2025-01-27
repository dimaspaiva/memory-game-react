import './styles.css'
import { GameCard } from "../MemoryGame/map-images"

export type CardProps = {
  gameCard: GameCard
  selectCard: (card: GameCard) => void
}

export function Card({gameCard, selectCard}: CardProps) {
  const { isFound, image, isSelected } = gameCard

  if (!isSelected && !isFound) {
    return (
      <div
        className="image-placeholder"
        onClick={() => selectCard(gameCard)}
      />
    )
  }

  return (
    <div
      style={{backgroundImage: `url(${image})`}}
      className="image-container"
    />
  )
}
