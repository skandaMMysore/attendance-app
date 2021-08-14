import React from 'react';
import{View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import db from '../components/config.js';

class HomeScreen extends React.Component{
constructor(){
  super();
  //created this.state for creating the gameState
  this.state = {
    all_students:[],
    presentPressedList:[],
    absentPressedList:[],
  };

}
//async does not go in sequence
//await means it will wait for the  connection to the database and componentdidmount gets called automatically when rendering
componentDidMount = async () => {
  var data_ref = await db.ref('/').on('value',data=>{
    //students created for fetching v
    //alues from the database and then sort on the basis of roll numbers and assign to this.state.allStudents
    //students is for sorting,listing,etc
    var students = [];
    //class_a is for reading the value in a database
    var class_a = data.val();
    //created  a for loop
    for(var i in class_a){
      students.push(class_a[i]);
    }
    students.sort(function(a,b){
        return a.roll_no-b.roll_no
    }
    )
    this.setState({all_students:students})
  })
}
updateAttendance(roll_No,status){
  //variable id is created and its empty variable for which value must be pushed
    var id = '';
    //creating an if loop for the role numbers to be displayed if its below 9, then there will be placement of 0 or else, it would be displayed the same number like 10,11,etc
    if(roll_No <= 9){
      id = '0' + roll_No;
    }else{
      id = roll_No;
    }
    //variable today is created to store the date data type
    var today = new Date();
    //dd is created to store the current date
    var dd = today.getDate();
    //mm is created to store the current month
    var mm = today.getMonth();
    var yyyy = today.getFullYear();

    if(dd < 10){
      dd = '0'+dd;
    }
    if(mm < 10){
      mm = '0'+mm;
    }
    //today will contain the exact date value before in which it was only capable of holding the date values,but now it is been pushed with exact numbers of its data type
    today = dd + '-' + mm + '-'+ yyyy;
    var path_ref = id;
    var class_ref = db.ref(path_ref);

    class_ref.update({
      [today]:status,
    });
}




  //created a switch navigator to navigate between the screens which is named as goTo arrow function
  



      




      


  
  







  render() {
    var all_students = this.state.all_students;
    if (all_students.length === 0) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No Student Found</Text>
        </View>
      );
} else{
    return(
      <View style = {styles.container}>

      <View style = {{flex:3}}>

        {all_students.map((student,index) => (
           <View key = {index} style = {styles.studentChartContainer}>
                <View 
                key = {'name'+index}
                style = {{flex:1,flexDirection:'row'}}>
                <Text style = {{fontSize:15,fontWeight:'bold'}}>{student.name}</Text>
                </View>
                <View>
                  <TouchableOpacity style = 
                  {this.state.presentPressedList.includes(index)
                ? [styles.present,{backgroundColor:'green'}]
                :styles.present
                }
                 onPress = {()=>{
                  var presentPressedList = this.state.presentPressedList;
                 presentPressedList.push(index);
                 this.setState({presentPressedList:presentPressedList});
                 var roll_No = index+1;
                 this.updateAttendance(roll_No,'present');
                 }} 
                  
        >
        <Text>Present</Text>
        

                  </TouchableOpacity>

                  


                 
<View>
<TouchableOpacity style =
{this.state.absentPressedList.includes(index)
? [styles.absent,{backgroundColor:'red'}]
: styles.absent
}
onPress = {()=>{
    var absentPressedList = this.state.absentPressedList;
    absentPressedList.push(index);
    this.setState({absentPressedList:absentPressedList});
    var roll_No = index-1;
    this.updateAttendance(roll_No,'absent');

}}
>
<Text>Absent</Text>


</TouchableOpacity>

<TouchableOpacity
  style = {styles.footer}
  onPress = {()=>{
      this.props.navigator.navigate('Summary');

  }}>
  <Text>Submit</Text>
  </TouchableOpacity>

</View>



                </View>
           </View>

        ))}


      </View>
    

      </View>

    );
}
 }
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    studentChartContainer:{
      flexDirection:'row',
      padding:10,
      alignItems:'center',
      margin:20,
    },
    present:{
     width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 4,
    },
    absent:{
      width: 70,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 4,
    },
    footer:{
      left: 0,
      right: 0,
      bottom: 0,
      height: 67,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'yellow',
      marginTop:80,  
    },


  });
  
export default HomeScreen;
                  
    
    

    
    

  





  
 

