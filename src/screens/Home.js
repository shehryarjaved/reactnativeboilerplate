
import React from "react";
import { StyleSheet,Text,View,TextInput,TouchableOpacity,Button} from "react-native";


 const Home = ({ navigation }) => {
  return(
    <View style={styles.login}>
        <Text>Home</Text>
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

export default Home;