import * as React from 'react';
import {Dimensions, Animated, Pressable} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Box, useColorModeValue} from 'native-base';

import colors from '../../../theme/colors';
import StudentAttendance from './StudentAttendance';
import SelfAttendance from './SelfAttendance';

const initialLayout = {
  width: Dimensions.get('window').width,
};
const renderScene = SceneMap({
  first: StudentAttendance,
  second: SelfAttendance,
});

const TabComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'Student Attendance',
    },
    {
      key: 'second',
      title: 'Self Attendance',
    },
  ]);

  const renderTabBar = props => {
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const color = index === i ? colors.primary : colors.darkGary;
          const fontWeight = index === i ? 'bold' : 'normal';
          const borderColor =
            index === i
              ? colors.primary
              : useColorModeValue('coolGray.200', 'gray.400');
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer">
              <Pressable
                alignItems="center"
                width={'100%'}
                onPress={() => {
                  // //console.log(i);
                  setIndex(i);
                }}>
                <Animated.Text
                  style={{
                    color,
                    fontSize: 16,
                    fontWeight,
                  }}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

const Attendance = () => {
  return <TabComponent />;
};
export default Attendance;
