import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 15,
  },
  logo: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  logoContainer: {
    padding: 20
  },
  seperater: {
    width: "100%",
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 2,
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    marginTop: 15,
    fontFamily: "Montserrat"
  },
  paragraph: {
    marginTop: 15,
    fontFamily: "Montserrat",
    fontWeight: "100",
    lineHeight:20
  },
  copyRight:{
    fontFamily: "Montserrat",
    fontSize: 18,
    paddingTop:15,
    paddingBottom:40,
    fontWeight: "200",
  }
});
export default styles;
