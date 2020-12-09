import { StyleSheet } from "react-native"

export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    alignItems: "center",
  },
  image: { width: 90, height: 90 },
  content: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
})
