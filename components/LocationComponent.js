import React,  { Component } from 'react';
import { ScrollView, View } from 'react-native';

class Location extends Component {

    static navigationOptions = {
        title: 'Location',
        headerTitleStyle: { //To center the title 
            textAlign:"center", 
            flex: 1
        },
        headerRight: (<View />) //This is to get the title to center since there is back arrow on the left hand side
    }

    render() {
        return(
            <ScrollView>

            </ScrollView>
        );
    }
}

export default Location;