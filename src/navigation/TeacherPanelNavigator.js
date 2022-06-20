import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import colors from '../theme/colors';
import NavigationAppHeader from './NavigationAppHeader';
import Profile from '../view/teachersPanel/Profile/Profile';

import { MaterialIcons,Ionicons } from '@expo/vector-icons';

import Academic from '../view/teachersPanel/Academic/Academic';
import StudentDetails from '../view/teachersPanel/StudentDetails/StudentDetails';
import HomeWork from '../view/teachersPanel/HomeWork/HomeWork';
import Events from '../view/teachersPanel/Events/Events';
import TeacherDrawerContains from './TeacherDrawerContains';
import {Button} from 'native-base';
import Examination from '../view/teachersPanel/Examination/Examination';
import Attendance from '../view/teachersPanel/Attendance/Attendance';
import ClassSchedule from '../view/teachersPanel/Academic/ClassSchedule/ClassSchedule';
import ClassAndSection from '../view/teachersPanel/Academic/ClassAndSection/ClassAndSection';
import Subject from '../view/teachersPanel/Academic/Subject/Subject';
import TeacherSchedule from '../view/teachersPanel/Academic/TeacherSchedule/TeacherSchedule';
import LeaveApplication from '../view/teachersPanel/LeaveApplication/LeaveApplication';
import Payroll from '../view/teachersPanel/Payroll/Payroll';
import AttachmentsBook from '../view/teachersPanel/AttachmentsBook/AttachmentsBook';

const TeacherAppStack = createNativeStackNavigator();
const TeacherDrawerStack = createDrawerNavigator();
const TeacherTab = createBottomTabNavigator();

const TeacherTabNavigator = () => {
  return (
    <TeacherTab.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerBackVisible: false,
        headerTitle: props => <NavigationAppHeader {...props} />,
        headerRight: () => (
          <Button variant={'unstyled'} color="#fff">
            <MaterialIcons
              name="notifications"
              size={30}
              color={colors.white}
            />
          </Button>
        ),
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <TeacherTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="account-circle" size={size} color={color} />
          ),
        }}
      />
      <TeacherTab.Screen
        name="Academic"
        component={Academic}
        options={{
          tabBarLabel: 'Academic',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="school" size={size} color={color} />
          ),
        }}
      />
      <TeacherTab.Screen
        name="Examination"
        component={Examination}
        options={{
          tabBarLabel: 'Examination',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />
      <TeacherTab.Screen
        name="Attendance"
        component={Attendance}
        options={{
          tabBarLabel: 'Attendance',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-pie-chart-sharp" size={size} color={color} />
          ),
        }}
      />
    </TeacherTab.Navigator>
  );
};

const TeacherDrawerNavigator = () => {
  return (
    <TeacherDrawerStack.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: colors.whiteSecondary,
        },
      }}
      headerMode="none"
      drawerContent={props => <TeacherDrawerContains {...props} />}>
      <TeacherDrawerStack.Screen
        name="TeacherTab"
        component={TeacherTabNavigator}
      />
    </TeacherDrawerStack.Navigator>
  );
};

const TeacherPanelNavigator = () => {
  return (
    <TeacherAppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TeacherAppStack.Screen
        name="TeacherProfile"
        component={TeacherDrawerNavigator}
      />
      <TeacherAppStack.Screen
        name="StudentDetails"
        component={StudentDetails}
      />
      <TeacherAppStack.Screen name="Events" component={Events} />
      <TeacherAppStack.Screen name="HomeWork" component={HomeWork} />
      <TeacherAppStack.Screen
        name="ClassAndSection"
        component={ClassAndSection}
      />
      <TeacherAppStack.Screen name="Subject" component={Subject} />
      <TeacherAppStack.Screen name="ClassSchedule" component={ClassSchedule} />
      <TeacherAppStack.Screen name="AttachmentsBook" component={AttachmentsBook} />
      <TeacherAppStack.Screen name="LeaveApplication" component={LeaveApplication} />
      <TeacherAppStack.Screen name="Payroll" component={Payroll} />
      <TeacherAppStack.Screen
        name="TeacherSchedule"
        component={TeacherSchedule}
      />
    </TeacherAppStack.Navigator>
  );
};

export default TeacherPanelNavigator;
