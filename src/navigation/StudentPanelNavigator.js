import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from '../theme/colors';
import {Button} from 'native-base';
import { AntDesign,FontAwesome,FontAwesome5,Feather,MaterialIcons,Ionicons ,Foundation} from '@expo/vector-icons';

import {createDrawerNavigator} from '@react-navigation/drawer';

import NavigationAppHeader from './NavigationAppHeader';
import StudentDrawerContains from './StudentDrawerContains';
import Profile from '../view/studentPanel/Profile/Profile';
import TimeTable from '../view/studentPanel/TimeTable/TimeTable';
import Attendance from '../view/studentPanel/Attendance/Attendance';
import Examination from '../view/studentPanel/Examination/Examination';
import AcademicClassSchedule from '../view/studentPanel/AcademicClassSchedule/AcademicClassSchedule';
import AcademicSubject from '../view/studentPanel/AcademicSubject/AcademicSubject';
import AttachmentsBook from '../view/studentPanel/AttachmentsBook/AttachmentsBook';
import Events from '../view/studentPanel/Events/Events';
import FeeHistory from '../view/studentPanel/FeeHistory/FeeHistory';
import LeaveApplication from '../view/studentPanel/LeaveApplication/LeaveApplication';
import HomeWork from '../view/studentPanel/HomeWork/HomeWork';
import Notification from '../view/studentPanel/Notification/Notification';
import TeacherList from '../view/studentPanel/TeacherList/TeacherList';

const StudentAppStack = createNativeStackNavigator();

const StudentDrawerStack = createDrawerNavigator();
const StudentTab = createBottomTabNavigator();

const StudentTabNavigator = () => {
  return (
    <StudentTab.Navigator
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
      <StudentTab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <StudentTab.Screen
        options={{
          tabBarLabel: 'Time Table',
          tabBarIcon: ({size, color}) => (
            <FontAwesome5 name="calendar-alt" size={size} color={color} />
          ),
        }}
        name="TimeTable"
        component={TimeTable}
      />
      <StudentTab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Foundation name="clipboard-pencil" size={size} color={color} />
          ),
        }}
        name="Examination"
        component={Examination}
      />
      <StudentTab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="ios-pie-chart-sharp" size={size} color={color} />
          ),
        }}
        name="Attendance"
        component={Attendance}
      />
    </StudentTab.Navigator>
  );
};

const StudentDrawerNavigator = () => {
  return (
    <StudentDrawerStack.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: colors.whiteSecondary,
        },
      }}
      headerMode="none"
      drawerContent={props => <StudentDrawerContains {...props} />}>
      <StudentDrawerStack.Screen
        name="StudentTab"
        component={StudentTabNavigator}
      />
    </StudentDrawerStack.Navigator>
  );
};

const StudentPanelNavigator = () => {
  return (
    <StudentAppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StudentAppStack.Screen
        name="StudentProfile"
        component={StudentDrawerNavigator}
      />
      <StudentAppStack.Screen
        name="ClassSchedule"
        component={AcademicClassSchedule}
      />
      <StudentAppStack.Screen
        name="AcademicSubject"
        component={AcademicSubject}
      />
      <StudentAppStack.Screen
        name="AttachmentsBook"
        component={AttachmentsBook}
      />
      <StudentAppStack.Screen name="Events" component={Events} />
      <StudentAppStack.Screen name="FeeHistory" component={FeeHistory} />
      <StudentAppStack.Screen name="HomeWork" component={HomeWork} />
      <StudentAppStack.Screen name="TeacherList" component={TeacherList} />
      <StudentAppStack.Screen
        name="LeaveApplication"
        component={LeaveApplication}
      />
      <StudentAppStack.Screen name="Notification" component={Notification} />
    </StudentAppStack.Navigator>
  );
};

export default StudentPanelNavigator;
