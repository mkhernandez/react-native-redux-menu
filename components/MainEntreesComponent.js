//This component will render the Main Entrees Page
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { ENTREES } from '../shared/mainEntrees';

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

class MainEntreeInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entrees: ENTREES
        };
    }

    static navigationOptions = {
        title: 'Entree Item',
        headerTitleStyle: { //To center the title 
            textAlign:"center", 
            flex: 1
        },
        headerRight: (<View />) //This is to get the title to center since there is back arrow on the left hand side
    };

    render() {
        const entreeId = this.props.navigation.getParam('entreeId');
        const entree = this.state.entrees.filter(entree => entree.id === entreeId)[0];
        return <RenderMainEntree entree={entree} />;
    }
    
}

export default MainEntreeInfo;