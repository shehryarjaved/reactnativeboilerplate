
import React from "react";
import { StyleSheet,Text,View,TextInput,TouchableOpacity,Button} from "react-native";


 const login = ({ navigation }) => {
  return(
    <View style={styles.login}>
        <Text>Login</Text>
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

export default login;