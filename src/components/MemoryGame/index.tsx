import { useMemo, useState } from "react";
import { Card } from "../Card";
import { createGameDeck, GameCard} from "./map-images";

export type MemoryGameProps = {
  images: string[]
}

const MemoryGame = ({ images }: MemoryGameProps) => {
  const gameDeck = useMemo(() => createGameDeck(images), [images])
  const [cards, setCards] = useState(gameDeck)

  function handleCardMatch(firstCard: GameCard, secondCard: GameCard) {
    const isMatch = firstCard.image === secondCard.image

    setTimeout(() => {
      setCards((actualCards) => {
        const cardsDraft = [...actualCards]
        cardsDraft[firstCard.id].isSelected = false
        cardsDraft[secondCard.id].isSelected = false

        if (isMatch) {
          cardsDraft[firstCard.id].isFound = true
          cardsDraft[secondCard.id].isFound = true
        }

        return cardsDraft
      })
    }, 900);
  }

  function flipCard(card: GameCard) {
    if (card.isFound || card.isSelected) return

    setCards((actualCards) => {
      const cardsDraft = [...actualCards]
      cardsDraft[card.id].isSelected = true

      const selectedCards = cardsDraft.filter((gameCard) => gameCard.isSelected)
      if (selectedCards.length === 2) {
        handleCardMatch(selectedCards[0], selectedCards[1])
      }

      return cardsDraft
    })
  }

  return (
    <div>
      <h1>Memory Game</h1>
      <div className="card-container" style={{display: 'flex', gap: '16px', flexDirection: 'row', flexWrap: 'wrap'}}>
        {cards.map((gameCard) => (
          <Card
            key={gameCard.id}
            gameCard={gameCard}
            selectCard={flipCard}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
