import React from "react"
import { View, Text } from "react-native"
import styleBase from "../styles/base"
import Tabs from "../components/Tabs"

interface IPlacesProps {
  navigation: any
  route: any
}

const Places: React.FC<IPlacesProps> = ({ navigation, route }) => {
  return (
    <View style={styleBase.wrapper}>
      <View style={styleBase.container}>
        <Text>Places screen</Text>
      </View>
      <Tabs route={route} navigation={navigation} />
    </View>
  )
}

export default Places
