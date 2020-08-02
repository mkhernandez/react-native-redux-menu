//This component will render the main entrees
import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        entrees: state.entrees,
        bibimbaps: state.bibimbaps,
        stews: state.stews,
        miscItems: state.miscItems,
        sides: state.sides
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
                <Card 
                    title={item.name} 
                    image={{uri: baseUrl + item.image}}
                >
                    <Text style={{margin: 10}}>
                    {item.description}
                    </Text>
                    <Button type='clear' title='View Item' onPress={() => navigate('EntreeInfo', {menuItemId: item.id, name: item.name, item: item})} />
                </Card> 
            );
        };

        if(this.props.entrees.isLoading) {
            return <Loading />;
        }
        if(this.props.entrees.errMess) {
            return(
                <View>
                    <Text>{this.props.entrees.errMess}</Text>
                </View>
            );
        }
    
        return(
            <ScrollView>
                <View style={styles.headerView}><Text style={styles.textHeader}>Entrees</Text></View>
                <FlatList
                data={this.props.entrees.entrees}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
                />
                <View style={styles.headerView}><Text style={styles.textHeader}>Bibimbaps</Text></View>
                <FlatList 
                    data={this.props.bibimbaps.bibimbaps}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />
                <View style={styles.headerView}><Text style={styles.textHeader}>Stews</Text></View>
                <FlatList 
                    data={this.props.stews.stews}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />
                <View style={styles.headerView}><Text style={styles.textHeader}>Misc Items</Text></View>
                <FlatList 
                    data={this.props.miscItems.miscItems}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />
                <View style={styles.headerView}><Text style={styles.textHeader}>Sides</Text></View>
                <FlatList 
                    data={this.props.sides.sides}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />
            </ScrollView>
                    
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    textHeader: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    headerView: {
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    }
});

export default connect(mapStateToProps)(Menu);