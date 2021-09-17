
import React from "react";
import { StyleSheet,Text,View,TextInput,TouchableOpacity,Button} from "react-native";


 const SignUp = ({ navigation }) => {
  return(
    <View style={styles.login}>
        <Text>SignUp</Text>
        <Button
            onPress={() => navigation.navigate('SignUp')}
            title="Go to Second Page"
          />
          <Button
            onPress={() => navigation.navigate('Login')}
            title="back"
          />
    </View>


  );


}
const styles=StyleSheet.create({
    login:{

  },


});

export default SignUp;