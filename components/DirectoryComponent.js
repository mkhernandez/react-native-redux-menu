//This component will render the main entrees
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        entrees: state.entrees
    };
};

class Menu extends Component {

    static navigationOptions = {
        title: 'Menu',
        headerTitleStyle: { //To center the title 
            textAlign:"center", 
            flex: 1
        },
        headerRight: (<View />) //This is to get the title to center since there is back arrow on the left hand side
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return(
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('EntreeInfo', {entreeId: item.id})}
                    imageSrc={{uri: baseUrl + item.image}}
                />  
            );
        };
    
        return(
            <FlatList
                data={this.props.entrees.entrees}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />        
        );
    }
    
}

export default connect(mapStateToProps)(Menu);