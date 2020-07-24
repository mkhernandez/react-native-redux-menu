import React,  { Component } from 'react';
import { ScrollView } from 'react-native';
import HeaderTitle from 'react-navigation/src/views/Header/HeaderTitle';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact',
        headerStyle: {
            backgroundColor: '#f4511e'
            
        }
    }

    render() {
        return(
            <ScrollView>
                
            </ScrollView>
        );
    }
}

export default Contact;