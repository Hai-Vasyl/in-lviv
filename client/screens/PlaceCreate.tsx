import React, { useState } from "react"
import { View, Text, ScrollView } from "react-native"
import styleBase from "../styles/base"
import Tabs from "../components/Tabs"
import axios from "axios"
import Field from "../components/Field"
import Button from "../components/Button"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import { IError } from "../redux/types/auth"
import styles from "../styles/PlaceCreate"
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

interface IPlaceCreateProps {
  navigation: any
  route: any
}

const PlaceCreate: React.FC<IPlaceCreateProps> = ({ route, navigation }) => {
  const {
    auth: { token },
  } = useSelector((state: RootStore) => state)
  const [form, setForm] = useState([
    { param: "title", title: "Title", msg: "", value: "" },
    { param: "description", title: "Description", msg: "", value: "" },
    { param: "location", title: "Location", msg: "", value: "" },
    { param: "image", title: "Image", msg: "", value: "" },
  ])

  const handleSubmitForm = async () => {
    try {
      const [title, description, location, image] = form
      const res = await axios.post(
        "http://192.168.1.2:4000/place/create-place",
        {
          title: title.value,
          description: description.value,
          location: location.value,
          image: image.value,
        },
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      )

      navigation.navigate("Place", {
        placeId: res.data._id,
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
          <Icon name='map-plus' size={40} color='lightgrey' />
          <Text style={styleBase.titleText}>CREATE PLACE</Text>
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
            iconName='plus'
            title='CREATE'
            press={handleSubmitForm}
          />
          <Button
            simple
            iconName='close'
            title='CANCEL'
            press={() => navigation.navigate("Places")}
          />
        </View>
      </View>
      <Tabs route={route} navigation={navigation} />
    </View>
  )
}

export default PlaceCreate
