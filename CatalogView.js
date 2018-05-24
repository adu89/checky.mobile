import React from 'react'
import { StyleSheet, ListView, TouchableOpacity } from 'react-native'
import { List, Container, Content, Card, CardItem, Left, Thumbnail, Body, Text, Image, Button, Icon, Right, ListItem} from 'native-base';

export default class CatalogView extends React.Component {
    state = {
        items: [
          {id: 0, name: 'Salad', quantity: 0, price: 12},
          {id: 1, name: 'Rice', quantity: 2, price: 7},
          {id: 2, name: 'Steak', quantity: 3, price: 15},
          {id: 3, name: 'Pudding', quantity: 8, price: 8},
          {id: 4, name: 'Corn Flakes', quantity: 3, price: 12},
          {id: 5, name: 'Lasagna', quantity: 3, price: 3},
          {id: 6, name: 'Spinach', quantity: 3, price: 8}
        ]
    }

    render() {
        return (
            <List contentContainerStyle={styles.list}
            dataArray={this.state.items}
            renderRow={(rowData) => 
                <ListItem style={styles.item} onPress={() => this.props.onCatalogItemSelected(rowData)}>
                    <Card pointerEvents="none" style={{width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>{rowData.name}</Text>
                    </Card>
                </ListItem>
            }
          />
        );
    }
}

var styles = StyleSheet.create({
    list: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    item: {
        margin: 0,
        padding: 0,
        width: 200,
        height: 200,
        borderBottomWidth: 0,
    }
    
});

//"#EFEFF4"