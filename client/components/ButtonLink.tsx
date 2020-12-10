import React from "react"
import { GestureResponderEvent, TouchableOpacity } from "react-native"
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "../styles/ButtonLink"

interface IButtonLinkProps {
  iconName: string
  exStyle?: { [key: string]: any }
  press(event: GestureResponderEvent): void | undefined
}

const ButtonLink: React.FC<IButtonLinkProps> = ({
  iconName,
  press,
  exStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.wrapper, exStyle]} onPress={press}>
      <Icon style={styles.icon} name={iconName} size={20} color='grey' />
    </TouchableOpacity>
  )
}

export default ButtonLink
