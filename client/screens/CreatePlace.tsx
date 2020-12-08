import React from "react"
import { View, Text } from "react-native"
import styleBase from "../styles/base"
import Tabs from "../components/Tabs"

interface ICreatePlaceProps {
  navigation: any
  route: any
}

const CreatePlace: React.FC<ICreatePlaceProps> = ({ route, navigation }) => {
  return (
    <View style={styleBase.wrapper}>
      <View style={styleBase.container}>
        <Text>CreatePlace screen</Text>
      </View>
      <Tabs route={route} navigation={navigation} />
    </View>
  )
}

export default CreatePlace
