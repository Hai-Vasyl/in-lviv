import React from "react"
import { TouchableOpacity, View } from "react-native"
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "../styles/Tabs"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"

interface ITabsProps {
  navigation: any
  route: any
}

const Tabs: React.FC<ITabsProps> = ({ navigation, route }) => {
  const routeName = route.name
  const {
    auth: { token, user },
  } = useSelector((state: RootStore) => state)

  const tabs = [
    { name: "Home", iconName: "home-outline" },
    { name: "Places", iconName: "map-marker-outline" },
    { name: "Users", iconName: "account-group-outline" },
    { name: "User", iconName: "account-outline" },
  ]

  return (
    <View style={styles.wrapper}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tab}
          onPress={() =>
            tab.name === "User"
              ? token
                ? navigation.navigate("User", { userId: user._id })
                : navigation.navigate("Auth")
              : navigation.navigate(tab.name)
          }
        >
          <Icon
            name={tab.iconName}
            size={30}
            color={routeName === tab.name ? "red" : "grey"}
            style={styles.icon}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Tabs
