import { StyleSheet, View,Text,Button,TextInput} from "react-native";
import { useState } from "react";

function GoalInput(prop){

    const [enteredText, setEnteredText] = useState('');

    function goalInput(e){
        setEnteredText(e);
    }

    function addGoal(){
        prop.onAddGoal(enteredText);
        setEnteredText('');
    }

    return(
        <View style={styles.topContainer} >
            <View style={styles.title}>
                <Text style={{color:'red',fontWeight:'bold',fontSize:20}}>Today's Goal</Text>
            </View>
            <View style={styles.body}>
                <TextInput style={styles.textInput} placeholder='Fill me' placeholderTextColor={'rbg(4, 45, 48)'} onChangeText={goalInput} value={enteredText}/>
                <Button title='amuthu' onPress={addGoal} color='black' />
            </View>
      </View>
    )
}

export default GoalInput;

const styles=StyleSheet.create({
    topContainer:{
        flex:1,
        flexDirection:'column',
    },    
    title:{
        borderWidth:15,
        borderRadius:20,
        padding:5,
        borderColor:'rgb(5, 225, 250)',
        justifyContent:'center',
        textAlign:'centre',
        alignItems:'center',
        color:'rgb(66, 230, 245)'
    },
    body:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:15,
        borderBottomWidth:3,
        borderBottomColor:'rgb(4, 117, 117)',
        margin:10,

    },
    textInput:{
        color:'blue',
        borderWidth:4,
        borderColor:'rgb(73, 97, 95)',
        paddingLeft:10,
        width:'80%',
        height:45,
        marginRight:7,
        fontWeight:'bold',
        fontSize:20,
    },
})