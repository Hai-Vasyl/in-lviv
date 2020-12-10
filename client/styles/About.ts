import { StyleSheet } from "react-native"

export default StyleSheet.create({
  titleWrapper: {
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  titleTranslated: {
    fontSize: 20,
  },
  descriptionWrapper: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    marginVertical: 20,
  },
  titleDescription: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  description: {
    fontSize: 19,
    padding: 10,
    lineHeight: 24,
  },
  labelWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleLabel: {
    fontSize: 16,
    color: "grey",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
})
