import React from 'react'
import { Modal, View, StyleSheet } from 'react-native'
import { Container, Header, Body, Title, List, ListItem, Text, Separator, Right, Icon, Left, Footer, Content, Button, Input } from 'native-base';

import Api from './Api';

export default class DeviceView extends React.Component {

    async onSync() {
        var response = await Api.syncDevice();
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left></Left>
                    <Body>
                        <Title>Settings: Device</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text>Sync</Text>
                        </Button>
                    </Right>
                </Header>
                <Content style={styles.content}>
                    <List>
                        <ListItem icon last>
                            <Body>
                                <Input disabled placeholder='Device Id' />
                            </Body>
                            <Right>
                                <Text style={styles.text}>Device Id</Text>
                            </Right>                        </ListItem>
                        <ListItem icon last>
                            <Body>
                                <Input disabled placeholder='Organization Id' />
                            </Body>
                            <Right>
                                <Text style={styles.text}>Organization Id</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon last>
                            <Body>
                                <Input placeholder='Device Name' />
                            </Body>
                            <Right>
                                <Text style={styles.text}>Device Name</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
    },
    content: {
        backgroundColor: '#ffffff',
    },
    text: {
        fontStyle: 'italic'
    }
});