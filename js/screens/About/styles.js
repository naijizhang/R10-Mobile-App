import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white
  },
  logo: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  logoContainer: {
    padding: 50
  },
  seperater: {
    width:"90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 2
  },
  title: {
    fontSize: 30,
    margin: 10
  },
  paragraph: {
    margin: 10
  }
});
export default styles;
