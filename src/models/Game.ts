class Game {
  description: string
  image: string
  infos: string[]
  title: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
  }
}

export default Game
