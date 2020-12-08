import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native"
import styleBase from "../styles/base"
import Tabs from "../components/Tabs"
import axios from "axios"
import { IUser } from "../interfaces"
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "../styles/Users"

interface IUsersProps {
  navigation: any
  route: any
}

const Users: React.FC<IUsersProps> = ({ navigation, route }) => {
  const [users, setUsers] = useState<IUser[]>([])
  const [initLoad, setInitLoad] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://192.168.1.2:4000/auth/get-users")

        setUsers(res.data)
        setInitLoad(false)
      } catch (error) {}
    }

    fetchData()
  }, [])

  if (initLoad) {
    return (
      <View>
        <Text>LOADING ...</Text>
      </View>
    )
  }
  return (
    <View style={styleBase.wrapper}>
      <View style={styleBase.container}>
        <FlatList
          data={users}
          keyExtractor={(user) => user._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item._id}
              style={styles.wrapperUser}
              onPress={() => navigation.navigate("User", { userId: item._id })}
            >
              <View style={styles.avatarWrapper}>
                <Image source={{ uri: item.ava }} style={styles.avatar} />
                {item.role === "admin" && (
                  <Icon
                    name='star-outline'
                    size={18}
                    color='grey'
                    style={styles.userIcon}
                  />
                )}
              </View>
              <View style={styles.userContent}>
                <Text style={styles.userUsername}>{item.username}</Text>
                <Text>{item.email}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <Tabs route={route} navigation={navigation} />
    </View>
  )
}

export default Users
