export type CreateCakeRequest = {
  name: string,
  comment: string,
  imageUrl: string,
  yumFactor: number 
}

export type UpdateCakeRequest = Partial<CreateCakeRequest>

export type CakeResponse = {
  id: number,
  name: string,
  comment: string,
  imageUrl: string,
  yumFactor: number
}