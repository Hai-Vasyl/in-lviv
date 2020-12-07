export const FETCH_START_AUTH = "FETCH_START_AUTH"
export const FETCH_SUCCESS_AUTH = "FETCH_SUCCESS_AUTH"
export const FETCH_FAILURE_AUTH = "FETCH_FAILURE_AUTH"

export interface IUser {
  _id: string
  ava: string
  username: string
  firstname: string
  lastname: string
  email: string
  phone: string
  address: string
  role: string
  date: string
}

export interface IAuth {
  token: string
  user: IUser
}

export interface IError {
  value?: string
  msg: string
  param: string
  location?: string
}

export interface fetchStartAuth {
  type: typeof FETCH_START_AUTH
}

export interface fetchSuccessAuth {
  type: typeof FETCH_SUCCESS_AUTH
  payload: IAuth
}

export interface fetchFailureAuth {
  type: typeof FETCH_FAILURE_AUTH
  payload: IError[]
}

export type DispatchActionsFetch =
  | fetchStartAuth
  | fetchSuccessAuth
  | fetchFailureAuth
export type typeDispatchActions = DispatchActionsFetch
