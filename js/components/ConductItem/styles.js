import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
  eachBlock: {
    marginTop: 15
  },
  conductTitle: {
    fontSize: 18,
    color: colors.purple,
    fontFamily: "Montserrat",
    fontWeight: "400"
  },
  conductContent: {
    marginTop: 15,
    fontFamily: "Montserrat",
    fontWeight: "100",
    lineHeight: 20
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    color: colors.purple
  },
  plusSign: {
    marginRight: 5,
    fontSize: 20,
    width: 10,
    color: colors.purple,
    fontFamily: "Montserrat"
  }
});
export default styles;
