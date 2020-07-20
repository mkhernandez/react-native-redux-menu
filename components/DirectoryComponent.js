//This component will render the main entrees
import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {

    const renderMainEntreeItem = ({item}) => {
        return(
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{source: require('./images/beef-bulgogi.jpg')}}
            />
        );
    };

    return(
        <FlatList
            data={props.entrees}
            renderItem={renderMainEntreeItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default Directory;