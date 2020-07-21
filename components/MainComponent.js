//This component will be the main point of control for the state 
import React, { Component } from 'react';

import Directory from './DirectoryComponent';
import { ENTREES } from '../shared/mainEntrees';
import MainEntreeInfo from './MainEntreesComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        EntreeInfo: { screen: MainEntreeInfo }
    },
    {
        initialRouteName: 'Directory',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entrees: ENTREES,
            selectedEntree: null
        };
    }

    onEntreeSelect(entreeId) {
        this.setState({selectedEntree: entreeId});
    }

    render() {
        return(
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <DirectoryNavigator />
            </View>
            
        );
    }
}

export default Main;