import React, { useEffect, useState } from "react"
import { View, Text, Image } from "react-native"
import styleBase from "../styles/base"
import Tabs from "../components/Tabs"
import axios from "axios"
import { IPlaceExtended } from "../interfaces"
import moment from "moment"
import { ScrollView } from "react-native-gesture-handler"
import ButtonLink from "../components/ButtonLink"
import { useSelector } from "react-redux"
import styles from "../styles/Place"
import { RootStore } from "../redux/store"

interface IPlaceProps {
  navigation: any
  route: any
}

const Place: React.FC<IPlaceProps> = ({ navigation, route }) => {
  const { placeId } = route.params
  const {
    auth: { user },
  } = useSelector((state: RootStore) => state)
  const [initLoad, setInitLoad] = useState(true)
  const [place, setPlace] = useState<IPlaceExtended>({
    _id: "",
    title: "",
    description: "",
    location: "",
    date: "",
    owner: "",
    image: "",
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://192.168.1.2:4000/place/get-place/${placeId}`
        )

        setPlace(res.data)
        setInitLoad(false)
      } catch (error) {}
    }

    fetchData()
  }, [placeId])

  if (initLoad) {
    return (
      <View>
        <Text>LOADING ...</Text>
      </View>
    )
  }
  return (
    <View style={styleBase.wrapper}>
      <ScrollView contentContainerStyle={styleBase.container}>
        <View>
          <Image source={{ uri: place.image }} style={styles.image} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={styles.title}>{place.title}</Text>
            </View>
            {user && user.role === "admin" && (
              <ButtonLink
                iconName='circle-edit-outline'
                press={() =>
                  navigation.navigate("PlaceEdit", {
                    placeId,
                  })
                }
              />
            )}
          </View>
          <View>
            <Text style={styles.subTitle}>Description:</Text>
            <Text style={styles.info}>{place.description}</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>Location:</Text>
            <Text style={styles.info}>{place.location}</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>Published:</Text>
            <Text style={styles.info}>{moment(place.date).calendar()}</Text>
          </View>
        </View>
      </ScrollView>
      <Tabs navigation={navigation} route={route} />
    </View>
  )
}

export default Place
