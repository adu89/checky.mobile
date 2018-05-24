import React from 'react'
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import AdminOptionsView from './AdminOptionsView';
import InventoryView from './InventoryView';
import DeviceView from './DeviceView';

export default class AdminView extends React.Component {
    state = {
        activeAdminOptionView: 'DeviceView'
    }

    onAdminViewOptionsPress(view) {
        this.setState({
            activeAdminOptionView: view
        });
    }

    navigateBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Container>
                <Grid>
                    <Col size={1} style={{borderRightWidth: 1, borderRightColor: '#c8c7cc'}}>
                        <AdminOptionsView onAdminViewOptionsPress={this.onAdminViewOptionsPress.bind(this)} 
                                          navigateBack={this.navigateBack.bind(this)}/>
                    </Col>
                    <Col size={2}>
                        {this.state.activeAdminOptionView == 'InventoryView' ? <InventoryView/> : ''}
                        {this.state.activeAdminOptionView == 'DeviceView' ? <DeviceView/> : ''}
                    </Col>
                </Grid>                
            </Container>
        );
    }
}

//"#EFEFF4"