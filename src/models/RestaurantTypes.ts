class RestaurantTypes {
  description: string
  image: string
  infos: string[]
  title: string
  id: number
  assessment: number

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    assessment: number
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.assessment = assessment
  }
}

export default RestaurantTypes
