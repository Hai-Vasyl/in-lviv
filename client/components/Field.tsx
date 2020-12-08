import React from "react"
import { TextInput, Text, View } from "react-native"

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
    <View style={[{ marginBottom: 7 }, exStyle]}>
      <Text
        style={{
          fontSize: 17,
          paddingVertical: 4,
        }}
      >
        {title}
      </Text>
      <TextInput
        value={value}
        style={{
          borderWidth: 1,
          borderColor: "lightgrey",
          padding: 5,
          fontSize: 19,
          backgroundColor: "whitesmoke",
        }}
        onChangeText={change}
      />
      {isErrorField && <Text style={{ color: "red" }}>{msg}</Text>}
    </View>
  )
}

export default Field
