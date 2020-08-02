import React,  { Component } from 'react';
import { ScrollView, View } from 'react-native';
import MapView from 'react-native-maps';

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
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </ScrollView>
        );
    }
}

export default Location;