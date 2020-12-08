import React from "react"
import { View, Text } from "react-native"
import styleBase from "../styles/base"
import Tabs from "../components/Tabs"

interface IUserEditProps {
  navigation: any
  route: any
}

const UserEdit: React.FC<IUserEditProps> = ({ navigation, route }) => {
  return (
    <View style={styleBase.wrapper}>
      <View style={styleBase.container}>
        <Text>UserEdit screen</Text>
      </View>
      <Tabs route={route} navigation={navigation} />
    </View>
  )
}

export default UserEdit
