import React,  { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function Mission() {

    return(
        <Card title='About Us'>
            <Text>
                For over 25 years Heart &amp; Seoul has been the premiere location for fine Korean cuisine.
                From the start we make sure our customers receive nothing but the best in
                quality. That means we use the freshest and finest ingredients to prepare your food. Our staff 
                works hard to make sure you are treated like royalty. They take pride in delivering quality service
                to meet your needs. Please join us for your next adventure into Korean cuisine. 
            </Text>
        </Card>
    );
}

function Catering() {

    return(
        <Card title='Catering'>
            <Text>
                Heart &amp; Seoul also caters for special occasions. We can create the right package for you.
                Need to feed your employees? How about a wedding or baby shower? Call us for more details.
            </Text>
        </Card>
    );
}

function GivingBack() {

    return(
        <Card title='Giving Back'>
            <Text>
                For 20 years we have given back to the community that has given so much to us. This is our way
                of saying thank you and appreciating the love and support from you. Every year
                we fight to end hunger where we live. Please join us in that fight.
            </Text>
        </Card>
    );
    
}

class About extends Component {

    static navigationOptions = {
        title: 'About',
        headerTitleStyle: { //To center the title 
            textAlign:"center", 
            flex: 1
        },
        headerRight: (<View />) //This is to get the title to center since there is back arrow on the left hand side
    }

    render() {
        return(
            <ScrollView>
                <Mission />
                <Catering />
                <GivingBack />
            </ScrollView>
        );
    }
}

export default About;