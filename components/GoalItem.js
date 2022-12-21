import { StyleSheet, View,Text,Pressable } from "react-native";

function GoalItem (prop){


    return(
      <Pressable onPress={prop.deleteKaro.bind(this, prop.id)}>
        <View>
          <Text style={styles.goal}>{prop.text}</Text>
        </View>
    </Pressable>
    );
}

export default GoalItem;

const styles=StyleSheet.create({
    
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