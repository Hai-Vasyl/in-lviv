import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: { alignItems: "center" },
  userIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 45,
    height: 45,
    lineHeight: 35,
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 5,
    borderRadius: 210 / 2,
    textAlign: "center",
    backgroundColor: "whitesmoke",
  },
  avaContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    width: 210,
    height: 210,
    borderRadius: 210 / 2,
    marginBottom: 15,
    backgroundColor: "white",
  },
  avatar: {
    width: 195,
    height: 195,
    borderRadius: 195 / 2,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  info: {
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    color: "grey",
  },
  value: {
    fontSize: 17,
    color: "#333",
    fontWeight: "bold",
  },
  plugText: {
    color: "lightgrey",
  },
})