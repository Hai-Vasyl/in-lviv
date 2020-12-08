import { StyleSheet } from "react-native"

export default StyleSheet.create({
  wrapperUser: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  userIcon: {
    position: "absolute",
    right: 3,
    bottom: 3,
    borderWidth: 1,
    borderColor: "lightgrey",
    width: 23,
    height: 23,
    borderRadius: 23 / 2,
    backgroundColor: "white",
    textAlign: "center",
    lineHeight: 22,
  },
  userContent: {
    paddingLeft: 10,
    flex: 1,
  },
  userUsername: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    borderColor: "lightgrey",
    borderBottomWidth: 1,
  },
})
