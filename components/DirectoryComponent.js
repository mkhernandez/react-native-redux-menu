//This component will render the main entrees
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ENTREES } from '../shared/mainEntrees';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entrees: ENTREES
        };
    }

    static navigationOptions = {
        title: 'Main Entrees',
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
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('EntreeInfo', {entreeId: item.id})}
                    leftAvatar={{source: require('./images/beef-bulgogi.jpg')}}
                />  
            );
        };
    
        return(
            <FlatList
                data={this.state.entrees}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />        
        );
    }
    
}

export default Menu;