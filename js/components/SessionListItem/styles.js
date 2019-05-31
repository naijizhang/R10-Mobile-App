import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
  container: {
    width:"100%",
    padding:10,
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1
  },
  secondBlock:{
    width:"100%",
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  heartIcon:{
    color:colors.red,
  },
  title:{
    fontFamily: "Montserrat"
  },
  location:{
    fontFamily: "Montserrat",
    color:colors.mediumGrey,
    marginTop:5
  }
});
export default styles;
