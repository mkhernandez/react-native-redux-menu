//This component will render the main entrees
import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { ListItem, Card, Button, Icon } from 'react-native-elements';

function Directory(props) {

    const renderItem = ({item}) => {
        return(
            <ListItem
                title={item.name}
                subtitle={item.description}
                onPress={() => props.onPress(item.id)}
                leftAvatar={{source: require('./images/beef-bulgogi.jpg')}}
            />
        );
    };

    return(
        <FlatList
            data={props.entrees}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />        
    )
}

export default Directory;