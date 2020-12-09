import React, { useEffect, useState } from "react"
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native"
import styleBase from "../styles/base"
import Tabs from "../components/Tabs"
import axios from "axios"
import { IPlace } from "../interfaces"
import styles from "../styles/Places"
import ButtonLink from "../components/ButtonLink"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"

interface IPlacesProps {
  navigation: any
  route: any
}

const Places: React.FC<IPlacesProps> = ({ navigation, route }) => {
  const [initLoad, setInitLoad] = useState(true)
  const [places, setPlaces] = useState<IPlace[]>([])
  const {
    auth: { user },
  } = useSelector((state: RootStore) => state)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://192.168.1.2:4000/place/get-places")

        setPlaces(res.data)
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
          data={places}
          keyExtractor={(place) => place._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() =>
                  navigation.navigate("Place", {
                    placeId: item._id,
                  })
                }
              >
                <View>
                  <Image source={{ uri: item.image }} style={styles.image} />
                </View>
                <View style={styles.content}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text>{item.location}</Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
        {user && user.role === "admin" && (
          <View style={styles.btnCreate}>
            <ButtonLink
              iconName='plus'
              press={() => navigation.navigate("PlaceCreate")}
            />
          </View>
        )}
      </View>
      <Tabs route={route} navigation={navigation} />
    </View>
  )
}

export default Places
