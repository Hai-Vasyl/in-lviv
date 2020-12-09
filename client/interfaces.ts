export interface IUser {
  _id: string
  ava: string
  username: string
  email: string
  role: string
}

export interface IPlace {
  title: string
  location: string
  image: string
  _id: string
}

export interface IPlaceExtended {
  title: string
  location: string
  image: string
  _id: string
  description: string
  date: string
  owner: string
}
