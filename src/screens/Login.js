import { StatusBar } from "expo-status-bar";
import { logIn,fblogin} from "../Config/action";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
 
export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const work = ()=> {
    let data = {
        email,password
    }
    logIn(data,navigation)
}

 
  return (
    <View style={styles.container}>
     
      <Image style={styles.image} source={require("../assets/idea.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      
<View style={{marginTop:20 , width:'100%',alignItems:'center'}}>
<TouchableOpacity style={styles.socialBtn}>
<Image style={{width: 20, height: 20}} source={require("../assets/search.png")} />
<Text style={{color:'#451D59',fontSize:13,marginLeft:20}}>Continue with Google</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.socialBtn}>
<Image style={{width: 25, height: 25}} source={require("../assets/facebook.png")} />
<Text onPress={()=>fblogin()} style={{color:'#134c70',fontSize:13,marginLeft:14}}>Continue with Facebook</Text>
</TouchableOpacity>
</View>
<TouchableOpacity style={{marginTop:20}} onPress={()=> navigation.navigate('SignUp')}>          
  <Text style={{fontSize:16,color:'#6066D0'}}>Don't have an account?</Text>
</TouchableOpacity> 
<TouchableOpacity  onPress={()=> work()} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
    width:100,
    height:100
    
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 20,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  
  socialBtn:{
    flexDirection:'row',
    width:'60%',
    borderRadius:20,
    fontSize:12,
    padding:10,
    marginTop:10,alignItems:'center',
    justifyContent:'center',
    height:50,
    borderWidth:1,
    borderColor:'#6066D0'
}
});