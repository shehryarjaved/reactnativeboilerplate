
import React from "react";
import { StyleSheet,Text,View,TextInput,TouchableOpacity,Button} from "react-native";


 const Result = ({ navigation }) => {
  return(
    <View style={styles.login}>
        <Text>Result</Text>
        <Button
            onPress={() => navigation.navigate('SignUp')}
            title="Go to Second Page"
          />
    </View>


  );


}
const styles=StyleSheet.create({
    login:{

  },


});

export default Result;