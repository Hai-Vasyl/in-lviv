import {
  FETCH_START_AUTH,
  FETCH_SUCCESS_AUTH,
  FETCH_FAILURE_AUTH,
  CLEAR_ERROR_AUTH,
  RESET_ERRORS_AUTH,
  typeDispatchActions,
  IAuth,
  IError,
} from "../types/auth"

interface IInitState extends IAuth {
  loading: boolean
  errors: IError[]
}

const initUser = {
  _id: "",
  ava: "",
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  role: "",
  date: "",
}

const initState: IInitState = {
  loading: false,
  user: initUser,
  token: "",
  errors: [],
}

const authReducer = (
  state = initState,
  action: typeDispatchActions
): IInitState => {
  switch (action.type) {
    case FETCH_START_AUTH:
      return {
        ...state,
        loading: true,
        errors: [],
      }
    case FETCH_SUCCESS_AUTH:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        errors: [],
      }
    case FETCH_FAILURE_AUTH:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      }
    case CLEAR_ERROR_AUTH:
      return {
        ...state,
        errors: [...state.errors].map((err) => {
          if (err.param === action.payload) {
            return { ...err, msg: "" }
          }
          return err
        }),
      }
    case RESET_ERRORS_AUTH:
      return {
        ...state,
        errors: [...state.errors].map((err) => {
          return { ...err, msg: "" }
        }),
      }
    default:
      return state
  }
}

export default authReducer
