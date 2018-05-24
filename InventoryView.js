import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Body, Right, Button, Icon, Title} from 'native-base';

export default class InventoryView extends Component {
  state = {
    items: [
      {id: 1, name: 'Salad', quantity: 0},
      {id: 2, name: 'Rice', quantity: 2},
      {id: 3, name: 'Steak', quantity: 3},
      {id: 4, name: 'Pudding', quantity: 8},
      {id: 5, name: 'Corn Flakes', quantity: 3},
    ]
  }

  onItemIncrement(id) {
    var index = this.state.items.findIndex(item => item.id == id)
    var itemsCopy = JSON.parse(JSON.stringify(this.state.items));  
    itemsCopy[index].quantity++;
    this.setState({items: []});
    this.setState({items: itemsCopy});
  }

  onItemDecrement(id) {
    var index = this.state.items.findIndex(item => item.id == id)
    var itemsCopy = JSON.parse(JSON.stringify(this.state.items));  
    if(itemsCopy[index].quantity > 0) {
      itemsCopy[index].quantity--;
      this.setState({items: [] });
      this.setState({items: itemsCopy});
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Inventory: Manage</Title>
          </Body>
        </Header>
        <Content>
          <List dataArray={this.state.items}
            renderRow={(item) =>
              <ListItem last icon>
              <Body>
                <Text>{item.name}</Text>
              </Body> 
                <Button transparent primary onPress={() => this.onItemDecrement(item.id)}>
                  <Icon name="ios-arrow-dropleft-outline" style={{fontSize: 22}}/> 
                </Button>   
                <Text note>{item.quantity}</Text>
                <Button transparent primary onPress={() => this.onItemIncrement(item.id)}>
                  <Icon name="ios-arrow-dropright-outline" style={{fontSize: 22}}/> 
                </Button>              
            </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}