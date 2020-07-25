import React,  { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact',
        headerStyle: {
            backgroundColor: '#5637DD'
        },
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        }
    }

    render() {
        return(
            <ScrollView>
                <Card title='Contact Information' wrapperStyle={{margin: 20}} >
                    <Text>402 Freeman Dr</Text>
                    <Text>San Antonio, TX 78228</Text>
                    <Text style={{marginBottom: 10}}>U.S.A.</Text>      
                    <Text>Phone: 1-940-923-0523</Text>
                    <Text>Email: markkimhernandez@gmail.com</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;