import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, ListItem, Text, Separator, Icon, Left, Body, Title, Button, Right } from 'native-base';

export default class AdminOptionsView extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    };

    onAdminViewOptionsPress(view) {
        this.props.onAdminViewOptionsPress(view);
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigateBack()}>
                            <Icon name='ios-close' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Options</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <Separator bordered>
                        <Text>SETTINGS</Text>
                    </Separator>
                    <ListItem icon last
                        button={true}
                        onPress={() => this.onAdminViewOptionsPress('DeviceView')}
                        style={styles.listItem}>
                        <Left>
                            <Icon name="ios-tablet-landscape" />
                        </Left>
                        <Body>
                            <Text>Device</Text>
                        </Body>
                    </ListItem>
                    <Separator bordered >
                        <Text>INVENTORY</Text>
                    </Separator>
                    <ListItem icon last
                        button={true}
                        onPress={() => this.onAdminViewOptionsPress('InventoryView')}
                        style={styles.listItem}>
                        <Left>
                            <Icon name="ios-list-box" />
                        </Left>
                        <Body>
                            <Text>Manage</Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
    },
    listItem: {
        backgroundColor: '#ffffff',
    }
});