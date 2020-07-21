//This component will render the Main Entrees Page
import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderMainEntree({entree}) {
    if(entree) {
        return(
            <Card
                title={entree.name}
                image={require('./images/la-galbi.jpg')}>
                <Text style={{margin: 10}}>
                    {entree.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function MainEntreeInfo(props) {
    return <RenderMainEntree entree={props.entree} />;
}

export default MainEntreeInfo;