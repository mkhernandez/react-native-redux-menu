//This component will be the main point of control for the state 
import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { ENTREES } from '../shared/mainEntrees';
import MainEntreeInfo from './MainEntreesComponent';
import { View } from 'react-native';

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
            <View style={{flex: 1}}>
                <Directory entrees={this.state.entrees} onPress={entreeId => this.onEntreeSelect(entreeId)} />
                <MainEntreeInfo entree={this.state.entrees.filter(entree => entree.id === this.state.selectedEntree)[0]} />
            </View>
            
        );
    }
}

export default Main;