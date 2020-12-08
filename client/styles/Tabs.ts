import { StyleSheet } from "react-native"

export default StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  tab: {
    paddingVertical: 17,
    flex: 1,
    borderLeftWidth: 1,
    borderColor: "lightgrey",
  },
  icon: {
    textAlign: "center",
  },
})
