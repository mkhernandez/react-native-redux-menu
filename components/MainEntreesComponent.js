//This component will render the Main Entrees Page
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';


const mapStateToProps = state => {
    return {
        entrees: state.entrees,
        bibimbaps: state.bibimbaps,
        stews: state.stews,
        miscItems: state.miscItems,
        sides: state.sides
    };
}

function RenderMenuItem({menuItem}) {

    if(menuItem) {
        return(
            <Card
                title={menuItem.name}
                image={{uri: baseUrl + menuItem.image}}>
                <Text style={{margin: 10}}>
                    {menuItem.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class MainEntreeInfo extends Component {

    static navigationOptions = {
        title: 'Menu Item',
        headerTitleStyle: { //To center the title 
            textAlign:"center", 
            flex: 1
        },
        headerRight: (<View />) //This is to get the title to center since there is back arrow on the left hand side
    };

    render() {
        const menuItemId = this.props.navigation.getParam('menuItemId');
        const name = this.props.navigation.getParam('name');
        const item = this.props.navigation.getParam('item');
        console.log("name is: " + name);
        console.log("id is: " + menuItemId);
        console.log("item is: " + item);
        console.log("item name is : " + item.name);
        let menuItem= [];
        menuItem = this.props.entrees.entrees.filter(entree => entree.name === name)[0];
        console.log("about to enter entrees. " + menuItem);
        if(menuItem != undefined)  {
            console.log("Item name is: " + menuItem.name);
            return <RenderMenuItem menuItem={menuItem} />;
        }else {
            menuItem = [];
            console.log("the length of this array is: " + menuItem.length);
        }
        console.log("about to check bibimbaps. " + menuItem);
        menuItem = this.props.bibimbaps.bibimbaps.filter(bibimbaps => bibimbaps.name === name)[0];
        if(menuItem != undefined) {
            console.log("you should be here if there is a menuitem in bibimbap");
            return <RenderMenuItem menuItem={menuItem} />;
        }else {
            menuItem = [];
        }  
        
        menuItem = this.props.stews.stews.filter(stews => stews.name === name)[0];
        if(menuItem != undefined) {
            return <RenderMenuItem menuItem={menuItem} />;
        }else {
            menuItem = [];
        }
        
        menuItem = this.props.miscItems.miscItems.filter(miscItems => miscItems.name === name)[0];
        if(menuItem != undefined) {
            return <RenderMenuItem menuItem={menuItem} />;
        }else {
            menuItem = [];
        }
        
        menuItem = this.props.sides.sides.filter(sides => sides.name === name)[0];
        if(menuItem != undefined) {
            return <RenderMenuItem menuItem={menuItem} />;
        }
        
        return <View />;
    }  
}

export default connect(mapStateToProps)(MainEntreeInfo);