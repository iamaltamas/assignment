import React from "react";
import {View} from 'react-native'
import Route from "./src/Navigation/Route";
import { AuthContext } from './components/context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Login } from "./src";
const Stack = createNativeStackNavigator();

function App() {
 
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          if(action.token){
            AsyncStorage.setItem('userToken',action.token)
          }
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          AsyncStorage.removeItem('userToken')
          return {
            ...prevState,
            isSignout: true,
            userToken: null,

          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
   
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken =  await AsyncStorage.getItem('userToken')
      } catch (e) {
       alert("wrong data")
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);



  const authContext = React.useMemo(
    () => ({
      signIn: async (username,password) => { 
        let userto
        if(username=="user",password=="pass"){
          try{
             userto='user'
            await AsyncStorage.setItem('userToken',userto)
            dispatch({ type: 'SIGN_IN', token:userto });
          }catch(r){
            console.log(r)
          }
      
          
        }
      },
      signOut:() => dispatch({ type: 'SIGN_OUT' })
    }),
    []
  );

return (  
  <AuthContext.Provider value={authContext}>
  <View style={{ flex: 1 }}>
  <NavigationContainer>
      {state.userToken !== null ? (
        <Route />
      ) : (
        <Stack.Navigator>
          <Stack.Screen 
          options={{
            headerShown: false,
          }}
          name="Login" component={Login} />
        </Stack.Navigator>


      )}
      </NavigationContainer>
  </View>
</AuthContext.Provider>
  );
}

export default App;


