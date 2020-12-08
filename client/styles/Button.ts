import { StyleSheet } from "react-native"

export default StyleSheet.create({
  wrapper: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    marginHorizontal: 3,
  },
  icon: {
    marginHorizontal: 3,
  },
  wrapperPrimary: {
    backgroundColor: "#333",
  },
  textPrimary: {
    color: "white",
  },
  wrapperSimple: {
    borderWidth: 1,
    borderColor: "lightgrey",
  },
})
