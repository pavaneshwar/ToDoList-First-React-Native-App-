import { StyleSheet, View,Text,Pressable } from "react-native";

function GoalItem (prop){

    return(
      
        <View>
          <Pressable android_ripple={{color:'white'}} style={({pressed})=>pressed && styles.pressedItem} onPress={prop.deleteKaro.bind(this, prop.id)}>
          <Text style={styles.goal}>{prop.text}</Text>
          </Pressable>
        </View>
    
    );
}

export default GoalItem;

const styles=StyleSheet.create({
  pressedItem:{
    opacity:0.5,
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
  },
})