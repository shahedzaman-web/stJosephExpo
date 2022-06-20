// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import bgCardColor from '../../../theme/bgCardColor';

// const navigation = useNavigation();
const data = [
  {
    title: 'Class And Section',
    icon: (
      <MaterialIcons name="menu" size={30} color={bgCardColor[0]} />
    ),
  },
  {
    title: 'Subject',
    icon: <MaterialIcons name="subject" size={30} color={bgCardColor[1]} />,
  },
  {
    title: 'Class Schedule',
    icon: <MaterialIcons name="schedule" size={30} color={bgCardColor[2]} />,
  },
  {
    title: 'Teacher Schedule',
    icon: <MaterialIcons name="schedule" size={30} color={bgCardColor[3]} />,
  },
];

export default data;
