import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { BIBIMBAPS } from '../shared/bibimbap';

function RenderBibimbap({bibimbap}) {

    if(bibimbap) {
        return(
            <Card
                title={bibimbap.name}
                image={require('./images/la-galbi.jpg')}>
                <Text style={{margin: 10}}>
                    {bibimbap.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class BibimbapInfo extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     bibimbaps: BIBIMBAPS
        // };
    }

    static navigationOptions = {
        title: 'Bibimbap',
        headerTitleStyle: { //To center the title 
            textAlign:"center", 
            flex: 1
        },
        headerRight: (<View />) //This is to get the title to center since there is back arrow on the left hand side
    };

    render() {
        const bibimbapId = this.props.navigation.getParam('bibimbapId');
        const bibimbap = this.state.bibimbaps.filter(bibimbap => bibimbap.id === bibimbapId)[0];
        return <RenderBibimbap bibimbap={bibimbap} />;
    }
    
}

export default BibimbapInfo;