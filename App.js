import { StyleSheet, View , FlatList, Alert} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  
  const [receivedText, setRecievedText] = useState([]);

  function addGoal(enteredText){
    setRecievedText(e=>[...e,{text:enteredText,id:Math.random().toString()}]);
  }

  function deleteGoal(id){
    setRecievedText(e=>{
      return (e.filter((goal)=>goal.id!==id))
    });
    Alert.alert("selected is deleted")
  }

  return (
   <View style={styles.overall}>
      <GoalInput onAddGoal={addGoal}/>
      <View style={styles.goalSet}>
        {/* <ScrollView>
        {receivedText.map((a)=><Text style={styles.goal} key={a}>{a}</Text>)}
        </ScrollView> */}
        <FlatList data={receivedText} renderItem={(i)=>{
          return(
            <GoalItem text={i.item.text} id={i.item.id} deleteKaro={deleteGoal} />
          )
        }}
        keyExtractor={(item,index)=>{
          return item.id;
        }}
        alwaysBounceVertical={false}
        />
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  overall:{
    padding:10,
    paddingTop:30,
    flex:2,
    backgroundColor:'white',
  },
  
  goalSet:{
    flex:3.5,
    backgroundColor:'rgb(66, 201, 190)',
    padding:7,
    borderRadius:15
  },
});
