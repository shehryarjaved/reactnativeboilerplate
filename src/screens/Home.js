
import React from "react";
import { StyleSheet,Text,View,TextInput,TouchableOpacity,Button} from "react-native";

import { signOut} from "../Config/action";

 const Home = ({ navigation }) => {
  return(
    <View style={styles.login}>
        <Text>Home</Text>
        <Button
            onPress={() => navigation.navigate('SignUp')}
            title="Go to Second Page"
          />
<Button
            onPress={() => signOut(navigation)}
            title="signOut"
          />

    </View>


  );


}
const styles=StyleSheet.create({
    login:{

  },


});

export default Home;