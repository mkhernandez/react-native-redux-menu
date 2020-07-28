import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { ENTREES }  from '../shared/mainEntrees';
import { BIBIMBAPS } from '../shared/bibimbap';
import { STEWS } from '../shared/stews';
import { MISCITEMS } from '../shared/miscItems';
import { SIDES } from '../shared/sideDishes';

function Info() {

    return(
        <Card title='Welcome' image={require('./images/restaurant-home.jpg')}>
            <Text>
                Welcome to Heart &amp; Seoul! We take pride in serving some of the best cuisine in the world.
                We are located minutes from the Riverwalk in downtown San Antonio. Come in and enjoy 
                the experience of grilling your meats to your liking with all the side dishes you want.
                If grilling is not your thing then let us know and we will cook for you. 
            </Text>
        </Card>
    );
}

function RenderItem({item}) {
    if(item) {
        return(
            <Card 
                title={item.name}
                image={require('./images/beef-bulgogi.jpg')}>
                <Text 
                    style={{margin: 10}}>
                        {item.description}
                    </Text>

            </Card>
        );
    }
    return <View />;
}

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entrees: ENTREES,
            bibimbaps: BIBIMBAPS,
            stews: STEWS,
            miscItems: MISCITEMS,
            sides: SIDES
        };
    }

    static navigationOptions = {
        title: 'Heart & Seoul',
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },
        headerRight: (<View />) //This is to get the title to center since there is back arrow on the left hand side
    }

    render() {
        return(
            <ScrollView>
                <Info />
                <RenderItem
                    item={this.state.entrees.filter(entrees => entrees.featured)[0]} />
                <RenderItem
                    item={this.state.bibimbaps.filter(bibimbaps => bibimbaps.featured)[0]} />
                <RenderItem
                    item={this.state.stews.filter(stews => stews.featured)[0]} />
                <RenderItem
                    item={this.state.miscItems.filter(miscItems => miscItems.featured)[0]} />
                <RenderItem
                    item={this.state.sides.filter(sides => sides.featured)[0]} />
            </ScrollView>
        );
    }
}

export default Home;