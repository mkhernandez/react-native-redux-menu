import React,  { Component } from 'react';
import { ScrollView } from 'react-native';

class About extends Component {

    static navigationOptions = {
        title: 'About',
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

export default About;