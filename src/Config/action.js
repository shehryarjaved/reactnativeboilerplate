import auth, { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
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

const signOut = (navigation)=>{
      
  auth().signOut();
    navigation.navigate("Login"); 
console.log("user sign out");
  }
// const fblogin=()=>{
//     LoginManager.logInWithPermissions(["public_profile"]).then(
//         function(result) {
//           if (result.isCancelled) {
//             console.log("Login cancelled");
//           } else {
//             console.log(
//               "Login success with permissions: " +
//                 result.grantedPermissions.toString()
//             );
//           }
//         },
//         function(error) {
//           console.log("Login fail with error: " + error);
//         }
//       );
 
//     }

const fblogin=async(navigation)=>{
 const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
 if (result.isCancelled) {
   throw 'User cancelled the login process';
 }
 const data = await AccessToken.getCurrentAccessToken();

 if (!data) {
   throw 'Something went wrong obtaining access token';
 }

 const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  auth().signInWithCredential(facebookCredential)
  .then((user)=>{
console.log("user==>",user);
navigation.navigate("Home");
  }).catch((err)=>{
    console.log("error=>",err);
  })
    }

export {
    signOut,
    signUp,
    logIn,
    fblogin,

}