import React, { useEffect, useState } from "react"
import { View, Text, Image } from "react-native"
import styleBase from "../styles/base"
import styles from "../styles/User"
import Tabs from "../components/Tabs"
import axios from "axios"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import moment from "moment"
import ButtonLink from "../components/ButtonLink"

interface IUserProps {
  navigation: any
  route: any
}

const User: React.FC<IUserProps> = ({ route, navigation }) => {
  const { userId } = route.params
  const {
    auth: { user, token },
  } = useSelector((state: RootStore) => state)
  const [exUserData, setExUserData] = useState({
    _id: user && user._id ? user._id : "",
    ava: user && user.ava ? user.ava : "",
    role: user && user.role ? user.role : "",
  })
  const [userData, setUserData] = useState([
    {
      title: "Username",
      param: "username",
      value: user && user.username ? user.username : "",
    },
    {
      title: "Email",
      param: "email",
      value: user && user.email ? user.email : "",
    },
    {
      title: "Firstname",
      param: "firstname",
      value: user && user.firstname ? user.firstname : "",
    },
    {
      title: "Lastname",
      param: "lastname",
      value: user && user.lastname ? user.lastname : "",
    },
    {
      title: "Phone",
      param: "phone",
      value: user && user.phone ? user.phone : "",
    },
    {
      title: "Address",
      param: "address",
      value: user && user.address ? user.address : "",
    },
    {
      title: "Last updated",
      param: "date",
      value: user && user.date ? user.date : "",
    },
  ])
  const [initLoad, setInitLoad] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://192.168.1.2:4000/auth/get-user/${userId}`
        )

        const userInfo: any = res.data
        setExUserData({
          ava: userInfo.ava,
          role: userInfo.role,
          _id: userInfo._id,
        })
        setUserData((prevData) =>
          prevData.map((item) => {
            let newItem = item.value
            Object.keys(userInfo).map((resItem) => {
              if (item.param === resItem) {
                newItem = userInfo[resItem]
              }
            })
            return { ...item, value: newItem }
          })
        )
        setInitLoad(false)
      } catch (error) {}
    }

    if ((user && user._id !== userId) || !token) {
      fetchData()
    } else {
      setInitLoad(false)
    }
  }, [userId, user, token])

  if (initLoad) {
    return (
      <View>
        <Text>LOADING ...</Text>
      </View>
    )
  }
  return (
    <View style={[styleBase.wrapper]}>
      <View style={[styleBase.container, styles.container]}>
        <View style={styles.avaContainer}>
          {user && user._id === userId && (
            <ButtonLink
              iconName='circle-edit-outline'
              exStyle={styles.btnLink}
              press={() =>
                navigation.navigate("UserEdit", {
                  userId,
                })
              }
            />
          )}
          <Image source={{ uri: exUserData.ava }} style={styles.avatar} />
          {exUserData.role === "admin" && (
            <Icon
              name='star-outline'
              size={30}
              style={styles.userIcon}
              color='grey'
            />
          )}
        </View>
        <View>
          {userData.map((info) => {
            return (
              <View style={styles.info} key={info.param}>
                <Text style={styles.title}>{info.title}: </Text>
                <Text style={styles.value}>
                  {info.value ? (
                    info.param === "date" ? (
                      moment(info.value).calendar()
                    ) : (
                      info.value
                    )
                  ) : (
                    <Text style={styles.plugText}>Empty</Text>
                  )}
                </Text>
              </View>
            )
          })}
        </View>
      </View>
      <Tabs route={route} navigation={navigation} />
    </View>
  )
}

export default User
