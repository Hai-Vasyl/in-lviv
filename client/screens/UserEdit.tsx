import React, { useState } from "react"
import { View, Text, ScrollView } from "react-native"
import styleBase from "../styles/base"
import Tabs from "../components/Tabs"
import axios from "axios"
import Field from "../components/Field"
import Button from "../components/Button"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../redux/store"
import { IError } from "../redux/types/auth"
import styles from "../styles/PlaceCreate"
import { UPDATE_AUTH } from "../redux/types/auth"
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

interface IUserEditProps {
  navigation: any
  route: any
}

const UserEdit: React.FC<IUserEditProps> = ({ route, navigation }) => {
  const { userId } = route.params
  const {
    auth: { token, user },
  } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
  const [form, setForm] = useState([
    {
      param: "username",
      title: "Username",
      msg: "",
      value: user && user.username ? user.username : "",
    },
    {
      param: "email",
      title: "Email address",
      msg: "",
      value: user && user.email ? user.email : "",
    },
    {
      param: "firstname",
      title: "Firstname",
      msg: "",
      value: user && user.firstname ? user.firstname : "",
    },
    {
      param: "lastname",
      title: "Lastname",
      msg: "",
      value: user && user.lastname ? user.lastname : "",
    },
    {
      param: "ava",
      title: "Avatar",
      msg: "",
      value: user && user.ava ? user.ava : "",
    },
    {
      param: "phone",
      title: "Phone",
      msg: "",
      value: user && user.phone ? user.phone : "",
    },
    {
      param: "address",
      title: "Address",
      msg: "",
      value: user && user.address ? user.address : "",
    },
  ])

  const handleSubmitForm = async () => {
    try {
      const [username, email, firstname, lastname, ava, phone, address] = form

      const res = await axios.post(
        "http://192.168.1.2:4000/auth/update-user",
        {
          username: username.value,
          email: email.value,
          firstname: firstname.value,
          lastname: lastname.value,
          ava: ava.value,
          phone: phone.value,
          address: address.value,
        },
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      )

      dispatch({ type: UPDATE_AUTH, payload: res.data })
      navigation.navigate("User", {
        userId,
      })
    } catch (error) {
      const errors = error.response.data.errors
      setForm((prevForm) =>
        prevForm.map((field) => {
          let fieldMsg = field.msg
          errors.forEach((err: IError) => {
            if (field.param === err.param) {
              fieldMsg = err.msg
            }
          })
          return { ...field, msg: fieldMsg }
        })
      )
    }
  }

  const handleChangeField = (value: string, param: string) => {
    setForm((prevForm) =>
      prevForm.map((field) => {
        if (field.param === param) {
          return { ...field, value, msg: "" }
        }
        return field
      })
    )
  }

  return (
    <View style={styleBase.wrapper}>
      <View style={styleBase.container}>
        <View style={styleBase.title}>
          <Icon name='circle-edit-outline' size={40} color='lightgrey' />
          <Text style={styleBase.titleText}>EDIT USER</Text>
        </View>
        <View style={styles.fields}>
          <ScrollView>
            {form.map((field) => (
              <Field
                key={field.param}
                {...field}
                change={(value) => handleChangeField(value, field.param)}
              />
            ))}
          </ScrollView>
        </View>
        <View style={[styleBase.btns, styles.btns]}>
          <Button
            primary
            iconName='check'
            title='EDIT'
            press={handleSubmitForm}
          />
          <Button
            simple
            iconName='close'
            title='CANCEL'
            press={() => navigation.navigate("User", { userId })}
          />
        </View>
      </View>
      <Tabs route={route} navigation={navigation} />
    </View>
  )
}

export default UserEdit
