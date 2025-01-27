import { shuffle } from "./random"

export type GameCard = {
  id: number
  image: string
  isSelected: boolean
  isFound: boolean
}


export function createGameDeck(images: string[]): GameCard[] {
  const gameDeck = [...images, ...images]
  const shuffledDeck = shuffle(gameDeck)
  return shuffledDeck.map((image, index) => ({
    id: index,
    image,
    isSelected: false,
    isFound: false,
  }))
}
