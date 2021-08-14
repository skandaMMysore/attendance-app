import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import Summary from './components/Summary';
import db from './components/config';

export default class App extends React.Component{



render(){
  return(
    <View>
    <AppContainer/>

    </View>
    
  )
}
}
const SwitchNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  Summary:Summary,
});
const AppContainer = createAppContainer(SwitchNavigator);





