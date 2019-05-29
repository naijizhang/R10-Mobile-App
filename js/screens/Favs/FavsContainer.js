//import liraries
import React, { Component } from 'react';
import Favs from "./Favs"
// create a component
class FavsContainer extends Component {
    static navigationOptions = {
        title: "Favs"
      };
    render() {
        return (
           <Favs/>
        );
    }
}
//make this component available to the app
export default FavsContainer;
