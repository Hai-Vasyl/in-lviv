import React from "react"
import { View, Text } from "react-native"
import Tabs from "../components/Tabs"
import styleBase from "../styles/base"

interface IAboutProps {
  navigation: any
  route: any
}

const About: React.FC<IAboutProps> = ({ navigation, route }) => {
  return (
    <View style={styleBase.wrapper}>
      <View style={styleBase.container}>
        <Text>About screen</Text>
      </View>
      <Tabs navigation={navigation} route={route} />
    </View>
  )
}

export default About
