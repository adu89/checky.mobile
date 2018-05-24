import React from 'react'
import { StatusBar, Alert, View, ActivityIndicator } from 'react-native'
import { Container, Header, Body, Title, Text, Button, Footer, Icon, Left, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Dialog from "react-native-dialog";
import Api from "./Api";

import CatalogView from "./CatalogView";
import OrderView from "./OrderView"
import TotalsView from "./TotalsView"

export default class StoreView extends React.Component {
    state = {
        catalogItems: [],
        selectedCatalogItems: [],
        adminLoginPromptVisible: false,
        adminUserName: 'theandrewcosta@gmail.com',
        adminPassword: '!Test123',
        loading: false,
        error: false
    }

    onCatalogItemSelected(item) {
        var largestListIdentifier = Math.max.apply(Math, this.state.selectedCatalogItems.map(function (o) { return o.listIdentifier || 0; }));
        var itemToPush = JSON.parse(JSON.stringify(item));
        itemToPush.largestListIdentifier = largestListIdentifier;
        var selectedCatalogItems = JSON.parse(JSON.stringify(this.state.selectedCatalogItems));
        selectedCatalogItems.push(item);
        this.setState({ selectedCatalogItems: selectedCatalogItems });
    }

    onClearSelectedItem() {
        this.setState({ selectedCatalogItems: [] });
    }

    onSelectSettings() {
        this.setState({
            adminLoginPromptVisible: true
        })
    }

    onCancelAdminLoginPrompt() {
        this.setState({
            adminLoginPromptVisible: false,
            // adminUserName: '',
            // adminPassword: ''
        });
        setTimeout(() => {
            this.setState({
                loading: false,
                error: false
            });
        }, 500)
    }

    async onAdminPanelLogin() {
        this.setState({ loading: true })
        var adminLoginSuccess = await Api.loginAdmin(this.state.adminUserName, this.state.adminPassword)
        if (adminLoginSuccess) {
            this.setState({
                adminLoginPromptVisible: false
                // adminUserName: '',
                // adminPassword: ''
            });
            this.props.navigation.navigate('AdminView');

            setTimeout(() => {
                this.setState({
                    loading: false,
                    error: false
                });
            }, 500)
        } else {
            this.setState({
                loading: false,
                error: true
            })
        }
    }

    render() {
        return (
            <Container>
                {/* <StatusBar hidden={true} /> */}
                <Header>
                    <Left>
                        <Button transparent>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Browse</Title>
                    </Body>
                    <Right>
                        <Button transparent dark onPress={() => this.onSelectSettings()}>
                            <Icon name='ios-cog' />
                        </Button>
                    </Right>
                </Header>
                <Grid>
                    <Col size={65} style={{ borderRightWidth: 1, borderRightColor: '#c8c7cc', backgroundColor: '#EFEFF4', paddingLeft: 0 }}>
                        <CatalogView style={{ padingLeft: 0 }} onCatalogItemSelected={this.onCatalogItemSelected.bind(this)} />
                    </Col>
                    <Col size={35}>
                        <Row size={10} style={{ borderBottomWidth: 1, borderBottomColor: '#c8c7cc' }}>
                            <Text>Montreal</Text>
                        </Row>
                        <Row size={45}
                            style={{ borderBottomWidth: 1, borderBottomColor: '#EFEFF4' }}>
                            <OrderView selectedCatalogItems={this.state.selectedCatalogItems} />
                        </Row>
                        <Row size={10}>
                            <Button full light style={{ width: '100%', height: '100%' }} onPress={() => this.onClearSelectedItem()}>
                                <Text>CLEAR</Text>
                            </Button>
                        </Row>
                        <Row size={25} style={{ borderBottomWidth: 1, borderBottomColor: '#c8c7cc' }}>
                            <TotalsView selectedCatalogItems={this.state.selectedCatalogItems} />
                        </Row>
                        <Row size={10}>
                            <Button warning full style={{ width: '100%', height: '100%' }}>
                                <Text>CHECK OUT</Text>
                            </Button>
                        </Row>
                    </Col>
                </Grid>
                <View>
                    <Dialog.Container visible={this.state.adminLoginPromptVisible}>
                        <Dialog.Title>Admin Panel</Dialog.Title>
                        {!this.state.loading ?
                            !this.state.error ? <Dialog.Description>
                                Please enter credentials to access the administration panel.
                            </Dialog.Description> : <Dialog.Description> Error encountered during login attempt. Try again! </Dialog.Description>
                            : <ActivityIndicator style={{marginBottom: 15}} />
                        }
                        <Dialog.Input placeholder="Username" onChangeText={(text) => this.setState({ adminUserName: text })} />
                        <Dialog.Input secureTextEntry={true} placeholder="Password" onChangeText={(text) => this.setState({ adminPassword: text })} />
                        <Dialog.Button onPress={() => this.onCancelAdminLoginPrompt()} label="Cancel" />
                        <Dialog.Button onPress={() => this.onAdminPanelLogin()} label="Login" />
                    </Dialog.Container>
                </View>
                <Footer />
            </Container>
        );
    }
}

//"#EFEFF4"