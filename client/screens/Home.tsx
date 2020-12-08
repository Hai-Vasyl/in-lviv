import React from "react"
import { View, Image, Text } from "react-native"
import Button from "../components/Button"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import styleBase from "../styles/base"
import styles from "../styles/Home"
// @ts-ignore
import imgMain from "../images/undraw_quite_town_mg2q.png"
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Tabs from "../components/Tabs"

interface IHomeProps {
  navigation: any
  route: any
}

const Home: React.FC<IHomeProps> = ({ route, navigation }) => {
  const {
    auth: { user, token },
  } = useSelector((state: RootStore) => state)

  const getToProfile = () => {
    if (token) {
      navigation.navigate("User", {
        userId: user._id,
      })
    } else {
      navigation.navigate("Auth")
    }
  }

  return (
    <View style={styleBase.wrapper}>
      <View style={[styleBase.container]}>
        <View style={styles.content}>
          <View style={styles.logotype}>
            <Icon name='map-check' size={40} color='lightgrey' />
            <Text style={styles.logoText}>
              In-
              <Text style={styles.logoTextAccent}>Lviv</Text>
            </Text>
          </View>
          <Image source={imgMain} style={styles.image} />
        </View>
        <View style={styleBase.btns}>
          <Button
            primary
            iconName={token ? "account-circle-outline" : "login-variant"}
            title={token ? "MY PROFILE" : "SIGN IN"}
            press={getToProfile}
          />
          <Button
            simple
            iconName='map-marker-outline'
            title='LVIV PLACES'
            press={() => navigation.navigate("Places")}
          />
        </View>
      </View>
      <Tabs navigation={navigation} route={route} />
    </View>
  )
}

export default Home
