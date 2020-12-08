import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import Field from "../components/Field"
import Button from "../components/Button"
import styleBase from "../styles/base"
import { fetchAuth } from "../redux/actions/auth"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../redux/store"
import { CLEAR_ERROR_AUTH, RESET_ERRORS_AUTH } from "../redux/types/auth"
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Tabs from "../components/Tabs"

interface IAuthProps {
  navigation: any
  route: any
}

const Auth: React.FC<IAuthProps> = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const {
    auth: { token, loading, errors },
  } = useSelector((state: RootStore) => state)
  const [form, setForm] = useState([
    { param: "username", value: "", msg: "", title: "Username" },
    { param: "email", value: "", msg: "", title: "Email address" },
    { param: "password", value: "", msg: "", title: "Password" },
  ])
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    if (!loading && !token.length) {
      setForm((prevForm) =>
        prevForm.map((field) => {
          let fieldMsg = field.msg
          errors.forEach((err) => {
            if (err.param === field.param) {
              fieldMsg = err.msg
            }
          })
          return { ...field, msg: fieldMsg }
        })
      )
    } else if (!errors.length && !loading && token.length) {
      navigation.navigate("Home")
    }
  }, [errors, loading, token])

  const handleChangeField = (value: string, param: string) => {
    setForm((prevForm) =>
      prevForm.map((field) => {
        if (field.param === param) {
          return { ...field, value }
        }
        return field
      })
    )
    dispatch({ type: CLEAR_ERROR_AUTH, payload: param })
  }

  const handleSubmitForm = () => {
    const [username, email, password] = form
    const loginParams = { email: email.value, password: password.value }
    const registerParams = { username: username.value, ...loginParams }
    dispatch(fetchAuth(isLogin, isLogin ? loginParams : registerParams))
  }

  const handleFlipForm = () => {
    setIsLogin((prev) => !prev)
    dispatch({ type: RESET_ERRORS_AUTH })
  }

  return (
    <View style={styleBase.wrapper}>
      <View style={[styleBase.container]}>
        <View style={styleBase.title}>
          <Icon
            name={isLogin ? "login-variant" : "checkbox-marked-circle-outline"}
            size={40}
            color='lightgrey'
          />
          <Text style={styleBase.titleText}>
            {isLogin ? "LOGIN" : "REGISTER"}
          </Text>
        </View>
        <View>
          {form.map((field) => (
            <Field
              exStyle={
                field.param === "username" && isLogin ? { display: "none" } : {}
              }
              key={field.param}
              {...field}
              change={(value) => handleChangeField(value, field.param)}
            />
          ))}
        </View>
        <View style={[styleBase.btns, { marginTop: 20 }]}>
          <Button
            primary
            iconName={
              isLogin ? "login-variant" : "checkbox-marked-circle-outline"
            }
            title={isLogin ? "SIGN IN" : "SIGN UP"}
            press={handleSubmitForm}
          />
          <Button
            simple
            iconName={
              isLogin ? "checkbox-marked-circle-outline" : "login-variant"
            }
            title={isLogin ? "SIGN UP" : "SIGN IN"}
            press={handleFlipForm}
          />
        </View>
      </View>
      <Tabs navigation={navigation} route={route} />
    </View>
  )
}

export default Auth
