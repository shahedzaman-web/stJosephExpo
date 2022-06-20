import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../view/Login/Login';
import StudentPanelNavigator from './StudentPanelNavigator';
import TeacherPanelNavigator from './TeacherPanelNavigator';
import LoadingScreen from '../view/LoadingScreen/LoadingScreen';
import { useFonts,  } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';


import {useSelector} from 'react-redux';
import {useGetAllBranchQuery} from '../store/services/studentApi';
const RootStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  const role = useSelector(state => state.auth.role);
  //console.log({role});

  return (
    <AppStack.Navigator
      initialRouteName={role === 'student' ? 'Student' : 'Teacher'}
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Student" component={StudentPanelNavigator} />
      <AppStack.Screen name="Teacher" component={TeacherPanelNavigator} />
    </AppStack.Navigator>
  );
};

const RootNavigator = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  //console.log({isAuthenticated});
  return (
    <RootStack.Navigator
      initialRouteName={isAuthenticated ? 'App' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="App" component={AppNavigator} />
    </RootStack.Navigator>
  );
};

function Root() {
  const {isLoading} = useGetAllBranchQuery();
  let [fontsLoaded] = useFonts({
    ProximaNova: require("../../assets/fonts/ProximaNova.otf"),
    Helvetica: require("../../assets/fonts/Helvetica.ttf"),
  });
  
  if (isLoading && !fontsLoaded) {
    return  <AppLoading />;
  }
  return <RootNavigator />;
}

export default Root;
