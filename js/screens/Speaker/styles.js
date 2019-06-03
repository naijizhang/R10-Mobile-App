import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.black
  },
  headerContainer: {
    backgroundColor: colors.black,
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  whiteBoard: {
    backgroundColor: colors.white,
    margin: 5,
    borderRadius: 10
  },
  closeIcon: {
    color: colors.white,
    position: "absolute",
    left: 10,
  },
  header: {
    color: colors.white,
    fontFamily: "Montserrat",
    fontSize: 16
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 20,
    marginLeft: "auto",
    marginRight: "auto"
  },
  name:{
    fontFamily: "Montserrat",
    fontSize: 25,
    marginLeft: "auto",
    marginRight: "auto"
  },
  bio:{
    fontFamily: "Montserrat",
    fontWeight:"100",
    fontSize: 15,
    padding:15,
    lineHeight:25
  },
  button: {
    height: 40,
    width: "80%",
    borderRadius: 20,
    overflow: "hidden",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin:20,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom:30
  },
  buttonText: {
    fontFamily: "Montserrat",
    color: colors.white,
    fontSize: 15
  }
});
export default styles;
