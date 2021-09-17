import 'react-native-gesture-handler';
import React  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Quiz from './src/screens/Quiz';
import Profile from './src/screens/Profile';
import Result from './src/screens/Result';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
import { Provider } from 'react-redux';
function Appnavigation(){

    return(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login } />
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
         <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown:false}} name="Quiz" component={Quiz} />
        <Stack.Screen options={{headerShown:false}} name="Result" component={Result} />
        <Stack.Screen options={{headerShown:false}} name="Profile" component={Profile} />
      </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}

export default Appnavigation;