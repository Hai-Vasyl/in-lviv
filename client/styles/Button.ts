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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  textPrimary: {
    color: "white",
  },
  wrapperSimple: {
    borderWidth: 1,
    borderColor: "lightgrey",
  },
})
