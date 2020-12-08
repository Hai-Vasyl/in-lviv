import {
  FETCH_START_AUTH,
  FETCH_SUCCESS_AUTH,
  FETCH_FAILURE_AUTH,
  DispatchActionsFetch,
} from "../types/auth"
import { Dispatch } from "redux"
import axios from "axios"

interface ICredentials {
  username?: string
  email: string
  password: string
}

export const fetchAuth = (
  isLogin: boolean,
  credentials: ICredentials
) => async (dispatch: Dispatch<DispatchActionsFetch>) => {
  try {
    dispatch({ type: FETCH_START_AUTH })
    const res = await axios.post(
      `http://192.168.1.2:4000/auth/${isLogin ? "login" : "register"}`,
      { ...credentials }
    )

    dispatch({ type: FETCH_SUCCESS_AUTH, payload: res.data })
  } catch (error) {
    dispatch({
      type: FETCH_FAILURE_AUTH,
      payload: error.response.data.errors ? error.response.data.errors : [],
    })
  }
}
