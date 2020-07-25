import React,  { Component } from 'react';
import { ScrollView } from 'react-native';

class Location extends Component {

    static navigationOptions = {
        title: 'Location',
        headerTitleStyle: { //To center the title 
            textAlign:"center", 
            flex: 1
        }
    }

    render() {
        return(
            <ScrollView>

            </ScrollView>
        );
    }
}

export default Location;