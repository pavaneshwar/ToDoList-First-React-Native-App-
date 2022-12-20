import { StyleSheet, Text, View , Button, TextInput, ScrollView, FlatList} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredText, setEnteredText] = useState('');
  const [receivedText, setRecievedText] = useState([]);


  function goalInput(e){
      setEnteredText(e);
  }

  function addgoal(e){
    setRecievedText(e=>[...e,{text:enteredText,id:Math.random().toString()}]);
  }

  return (
   <View style={styles.overall}>
      <View style={styles.title}>
        <Text style={{color:'red',fontWeight:'bold'}}>Today's Goal</Text>
      </View>
      <View style={styles.body}>
        <TextInput style={styles.textInput} placeholder='Fill me' placeholderTextColor={'white'} onChangeText={goalInput}/>
        <Button title='amuthu' onPress={addgoal}/>
      </View>
      <View style={styles.goalSet}>
        {/* <ScrollView>
        {receivedText.map((a)=><Text style={styles.goal} key={a}>{a}</Text>)}
        </ScrollView> */}
        <FlatList data={receivedText} renderItem={(i)=>{
          return(
            <View>
              <Text style={styles.goal}>{i.item.text}</Text>
            </View>
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
    flex:1,
    backgroundColor:'black',
  },
  title:{
    borderWidth:1,
    borderColor:'rgb(5, 225, 250)',
    flex:0.5,
    justifyContent:'center',
    textAlign:'centre',
    alignItems:'center',
    color:'white'
  },
  body:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:15,
    alignItems:'center',
    flex:2,
    borderBottomWidth:3,
    borderBottomColor:'rgb(4, 117, 117)',
  },
  textInput:{
    color:'white',
    borderWidth:4,
    borderColor:'rgb(73, 97, 95)',
    paddingLeft:10,
    width:'70%',
    height:45,
    marginRight:7,
    backgroundColor:'rgba(110, 186, 158)',
    fontWeight:'bold',
    fontSize:20,
  },
  goalSet:{
    flex:8,
    backgroundColor:'rgb(66, 201, 190)',
    padding:7,
    borderRadius:15
  },

  goal:{
    color:'Black',
    fontFamily:'sans-serif',
    fontSize:20,
    fontWeight:'bold',
    border:2,
    margin:5,
    backgroundColor:'rgba(207, 229, 232,0.3)',
    borderRadius:10,
    padding:6,
    paddingLeft:10
  }
});
