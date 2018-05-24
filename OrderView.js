import React from 'react'
import { StyleSheet } from 'react-native'
import { List, Text, ListItem} from 'native-base';

export default class OrderView extends React.Component {
    render() {
        return (
            <List
            dataArray={this.props.selectedCatalogItems}
            renderRow={(rowData) => 
                <ListItem style={styles.listItem}>
                    <Text style={styles.text}>{rowData.name}</Text>
                    <Text style={styles.text}>${rowData.price.toFixed(2)}</Text>
                </ListItem>
            }
          />
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontWeight: 'bold'
    }
  });

//"#EFEFF4"