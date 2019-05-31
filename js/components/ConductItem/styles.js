import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
  eachBlock: { margin: 10 },
  conductTitle: {
    fontSize: 20,
    color: colors.purple
  },
  conductContent: {
    marginTop: 5
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
