import React from "react"
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native"
// import { Ionicons } from "@expo/vector-icons"
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "../styles/Button"

interface IButtonProps {
  simple?: boolean
  primary?: boolean
  iconName?: string
  title: string
  press(event: GestureResponderEvent): any
}

const Button: React.FC<IButtonProps> = ({
  iconName,
  title,
  press,
  primary,
  simple,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        primary && styles.wrapperPrimary,
        simple && styles.wrapperSimple,
      ]}
      onPress={press}
    >
      {iconName && iconName.length && (
        <Icon style={styles.icon} name={iconName} size={25} color='grey' />
      )}
      <Text style={[styles.text, primary && styles.textPrimary]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
