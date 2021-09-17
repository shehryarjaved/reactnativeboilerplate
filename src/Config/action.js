import auth, { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { LoginManager } from 'react-native-fbsdk-next';
const signUp = (data,navigation)=> {
    return auth().createUserWithEmailAndPassword(data.email,data.password)
    .then(()=> {
        navigation.navigate('Home');
        console.log(data.email)
        var email = data.email
        database().ref(`/users/`).push(data);
    })
}

const logIn = ({email,password},navigation)=> {
    return auth().signInWithEmailAndPassword(email,password).then(()=> navigation.navigate('Home')).catch((e)=> alert('Something went wrong'))
}

const signOut = ()=>{
    return auth().signOut()
}
const fblogin=()=>{
    LoginManager.logInWithPermissions(["public_profile"]).then(
        function(result) {
          if (result.isCancelled) {
            console.log("Login cancelled");
          } else {
            console.log(
              "Login success with permissions: " +
                result.grantedPermissions.toString()
            );
          }
        },
        function(error) {
          console.log("Login fail with error: " + error);
        }
      );
 
    }


export {
    signOut,
    signUp,
    logIn,
    fblogin,

}