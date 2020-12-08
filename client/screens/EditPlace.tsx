import React from "react"
import { View, Text } from "react-native"
import styleBase from "../styles/base"
import Tabs from "../components/Tabs"

interface IEditPlaceProps {
  navigation: any
  route: any
}

const EditPlace: React.FC<IEditPlaceProps> = ({ navigation, route }) => {
  return (
    <View style={styleBase.wrapper}>
      <View style={styleBase.container}>
        <Text>EditPlace screen</Text>
      </View>
      <Tabs route={route} navigation={navigation} />
    </View>
  )
}

export default EditPlace
