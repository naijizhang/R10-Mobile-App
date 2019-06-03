import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 30,
    margin: 10
  },
  time: {
    width:"100%",
    padding:5,
    paddingLeft:10,
    paddingBottom:4,
    fontWeight: "500",
    backgroundColor: colors.lightGrey,
    fontFamily: "Montserrat"
  },
});
export default styles;
