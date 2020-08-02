import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        entrees: state.entrees,
        bibimbaps: state.bibimbaps,
        stews: state.stews,
        miscItems: state.miscItems,
        sides: state.sides
    };
};

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

function RenderItem(props) {
    const {item} = props;

    if(props.isLoading) {
        return <Loading />;
    }
    if(props.errMess) {
        return(
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }

    if(item) {
        return(
            <Card 
                title={item.name}
                image={{uri: baseUrl + item.image}}>
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
                <Button type='clear' title='View Menu' />
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

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
                    item={this.props.entrees.entrees.filter(entrees => entrees.featured)[0]}
                    isLoading={this.props.entrees.isLoading}
                    errMess={this.props.entrees.errMess}
                />
                <RenderItem
                    item={this.props.bibimbaps.bibimbaps.filter(bibimbaps => bibimbaps.featured)[0]}
                    isLoading={this.props.bibimbaps.isLoading}
                    errMess={this.props.bibimbaps.errMess}
                />
                <RenderItem
                    item={this.props.stews.stews.filter(stews => stews.featured)[0]}
                    isLoading={this.props.stews.isLoading}
                    errMess={this.props.stews.errMess}
                />
                <RenderItem
                    item={this.props.miscItems.miscItems.filter(miscItems => miscItems.featured)[0]}
                    isLoading={this.props.miscItems.isLoading}
                    errMess={this.props.miscItems.errMess}
                />
                <RenderItem
                    item={this.props.sides.sides.filter(sides => sides.featured)[0]}
                    isLoading={this.props.sides.isLoading}
                    errMess={this.props.sides.errMess}
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);