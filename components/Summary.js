import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import db from './config'
 class Summary extends React.Component{
    constructor(){
      super();
      this.state ={
        present_students:[],
        absent_students:[],
      }
    }
    getTodaysDate(){
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;

      var yyyy = today.getFullYear();
      if(dd<10){
        dd = '0'+dd;
      }
      if(mm<10){
        mm = '0'+mm;
      }
      today = dd + '-'+mm+'-'+yyyy;
      return today();

    }
   


   render(){
     return(
       <View style = {{flex:1}}>

       
       </View>
     )
   }
 }
 export default Summary;