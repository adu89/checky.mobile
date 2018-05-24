import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SwitchNavigator, StackNavigator} from 'react-navigation';


import LoginView from './LoginView';
import AdminView from './AdminView';
import StoreView from './StoreView'


// export default class App extends React.Component {
//   render() {
//     return (
//       <AdminView/>
//     );
//   }
// }

export default StackNavigator(
  {
    StoreView: StoreView,
    AdminView: AdminView,
  },
  {
    initialRouteName: 'StoreView',
    mode: 'modal',
    headerMode: 'none'
  }
);