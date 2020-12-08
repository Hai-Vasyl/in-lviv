import React from "react"
import { View, Text } from "react-native"
import styleBase from "../styles/base"
import Tabs from "../components/Tabs"

interface IPlaceProps {
  navigation: any
  route: any
}

const Place: React.FC<IPlaceProps> = ({ navigation, route }) => {
  return (
    <View style={styleBase.wrapper}>
      <View style={styleBase.container}>
        <Text>Place screen</Text>
      </View>
      <Tabs navigation={navigation} route={route} />
    </View>
  )
}

export default Place
