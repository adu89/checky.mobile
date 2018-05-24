import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, List, ListItem, H1, H2, H3 } from 'native-base';

export default class TotalsView extends React.Component {
    state = {
        subtotal: '0.00',
        tax: '0.00',
        total: '0.00'
    }

    componentWillReceiveProps(props) {
        var subtotal = props.selectedCatalogItems.reduce((a, b) =>  { return { price: a.price + b.price } } , { price: 0 }).price;
        var tax = subtotal * .15;
        var total = subtotal + tax;

        this.setState({
            subtotal: subtotal.toFixed(2),
            tax: tax.toFixed(2),
            total: total.toFixed(2) 
        });
    }

    render() {
        return (
            <Container>
            <List>
                <ListItem style={styles.listItem}>
                    <Text style={styles.text}>Subtotal</Text>
                    <Text style={styles.text}>${this.state.subtotal}</Text>
                </ListItem>
                <ListItem style={styles.listItem}>
                    <Text>Tax</Text>
                    <Text>${this.state.tax}</Text>                   
                </ListItem>
                <ListItem style={styles.listItem}>
                    <H3 style={styles.text}>Total</H3>
                    <H3 style={styles.text}>${this.state.total}</H3> 
                </ListItem>
            </List>
            </Container>            
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',     
        borderBottomWidth: 0     
    },
    text: {
        fontWeight: 'bold'
    }
  });

//"#EFEFF4"