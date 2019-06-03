import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15
  },
  locationAndHeart: {
    width: "100%",
    height:25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  heartIcon: {
    color: colors.red
  },
  location: {
    fontFamily: "Montserrat",
    color: colors.mediumGrey,
    marginTop: 5
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10
  },
  time: {
    fontFamily: "Montserrat",
    color: colors.red,
    marginBottom: 10
  },
  description: {
    fontFamily: "Montserrat",
    fontWeight: "100",
    fontSize: 18,
    lineHeight: 25
  },
  presenredBy: {
    fontSize: 15,
    marginTop: 25,
    fontFamily: "Montserrat",
    color: colors.mediumGrey
  },
  speakerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  name: {
    fontFamily: "Montserrat",
    fontSize: 15,
    marginLeft: 10
  },
  seperater: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 2
  },
  button: {
    height: 40,
    width: "60%",
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
