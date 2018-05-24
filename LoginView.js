import React from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import { Container, Content, Button, Item, Icon, Input, Text, Spinner} from "native-base";

export default class LoginView extends React.Component {
    state = {
        loading: false,
        username: '',
        password: ''
    };

    constructor(props) {
        super(props);
        //this.props.navigation.navigate('AdminView');
    }

    onLogin() {
        this.setState({
           loading: !this.state.loading 
        });
    };

    onChangeUsername(username) {
        this.setState({
            username: username 
         });
    };

    onChangePassword(password) {
        this.setState({
            password: password 
         });
    };

    render() {
        return (
            <Container style={styles.container}>
                <Content contentContainerStyle={styles.content} >
                    <Item regular style={styles.input}>
                        <Icon active name='person' />
                        <Input placeholder='Username'/>
                    </Item>
                    <Item regular style={styles.input}>
                        <Icon active name='lock' />
                        <Input placeholder="Password" secureTextEntry={true}/>
                    </Item>     
                    <Button block dark style={styles.button} onPress={this.onLogin.bind(this)}>
                    { this.state.loading ? <ActivityIndicator/> : <Text>Login</Text> }                        
                    </Button>               
                </Content>
            </Container>
        );
    };
}

const styles = StyleSheet.create({
    container: { 
      backgroundColor: '#efefef',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'     
    },
    input: {
        width: 350,
        backgroundColor: '#fff',
        marginTop: 5
    },
    button: {
        width: 350,
        alignSelf: 'center',
        marginTop: 25
    }
  });