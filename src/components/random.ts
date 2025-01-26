export function shuffle<T>(items: T[]): T[] {
  const result: T[] = []
  const unselectedItems = [...items]

  for (let i = 0; i < items.length; i++) {
    const randomItemIndex = Math.ceil(Math.random() * unselectedItems.length - 1)
    result[i] = unselectedItems.splice(randomItemIndex, 1)[0]

  }

  return result
}
