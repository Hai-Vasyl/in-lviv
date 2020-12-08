import React from "react"
import { View, Text } from "react-native"
import styleBase from "../styles/base"
import Tabs from "../components/Tabs"

interface IUsersProps {
  navigation: any
  route: any
}

const Users: React.FC<IUsersProps> = ({ navigation, route }) => {
  return (
    <View style={styleBase.wrapper}>
      <View style={styleBase.container}>
        <Text>Users screen</Text>
      </View>
      <Tabs route={route} navigation={navigation} />
    </View>
  )
}

export default Users
