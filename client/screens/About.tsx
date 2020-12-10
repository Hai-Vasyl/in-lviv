import React from "react"
import { View, Text } from "react-native"
import Tabs from "../components/Tabs"
import styleBase from "../styles/base"
import styles from "../styles/About"

interface IAboutProps {
  navigation: any
  route: any
}

const About: React.FC<IAboutProps> = ({ navigation, route }) => {
  return (
    <View style={styleBase.wrapper}>
      <View style={styleBase.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Outstanding places of Lviv</Text>
          <Text style={styles.titleTranslated}>(Видатні місця Львова)</Text>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.titleDescription}>Description: </Text>
          <Text style={styles.description}>
            Mobile application that informs about the beautiful places of Lviv.
            Here you can read about the fascinating places of Lviv about their
            feature and history
          </Text>
        </View>
        <View style={styles.labelWrapper}>
          <Text style={styles.titleLabel}>Developed by: </Text>
          <Text style={styles.label}>Vasyl Hai</Text>
        </View>
      </View>
      <Tabs navigation={navigation} route={route} />
    </View>
  )
}

export default About
