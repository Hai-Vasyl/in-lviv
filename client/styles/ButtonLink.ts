import { StyleSheet } from "react-native"

export default StyleSheet.create({
  wrapper: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "white",
    borderRadius: 45 / 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  icon: {
    textAlign: "center",
    lineHeight: 43,
    fontSize: 22,
  },
})
