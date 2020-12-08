import React from "react"
import { View, Text } from "react-native"
import styleBase from "../styles/base"
import Tabs from "../components/Tabs"

interface IUserProps {
  navigation: any
  route: any
}

const User: React.FC<IUserProps> = ({ route, navigation }) => {
  return (
    <View style={styleBase.wrapper}>
      <View style={styleBase.container}>
        <Text>User screen</Text>
      </View>
      <Tabs route={route} navigation={navigation} />
    </View>
  )
}

export default User
