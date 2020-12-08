import React from "react"
import { TextInput, Text, View } from "react-native"
import styles from "../styles/Field"

interface IFieldProps {
  msg?: string
  title: string
  change(text: string): void | undefined
  value: string
  isErrorField?: boolean
  exStyle?: { [key: string]: any }
}

const Field: React.FC<IFieldProps> = ({
  msg,
  title,
  value,
  change,
  isErrorField = true,
  exStyle,
}) => {
  return (
    <View style={[styles.wrapper, exStyle]}>
      <Text style={styles.title}>{title}</Text>
      <TextInput value={value} style={styles.input} onChangeText={change} />
      {isErrorField && <Text style={{ color: "red" }}>{msg}</Text>}
    </View>
  )
}

export default Field
