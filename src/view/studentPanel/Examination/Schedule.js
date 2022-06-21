import {Box, Center, FlatList, HStack, Skeleton, Text} from 'native-base';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {Dropdown} from 'react-native-element-dropdown';
import {StyleSheet} from 'react-native';
import {
  useGetExamScheduleListQuery,
  useGetOneExamScheduleQuery,
} from '../../../store/services/studentApi';
import colors from '../../../theme/colors';

import ScheduleCard from './ScheduleCard';
import _renderItem from '../../../components/_renderItem';

const Schedule = () => {
  const [selected, setSelected] = React.useState({});
  const [resData, setResData] = React.useState([]);
  const userInfo = useSelector(state => state.auth.userInfo);
  const [examDropdownData, setExamDropdownData] = React.useState([]);
  const {data, isLoading} = useGetExamScheduleListQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionName: userInfo.session.sessionName,
    sessionId: userInfo.session._id,
    classId: userInfo.class._id,
    sectionId: userInfo.section._id,
  });
  const res = useGetOneExamScheduleQuery({
    id: selected.value,
    branchName: userInfo.branch.branchName,
    sessionName: userInfo.session.sessionName,
  });
  React.useEffect(() => {
    if (data !== undefined) {
      const res = data[0].data.map(item => {
        return {
          value: item._id,
          label: item.exam.name,
        };
      });
      setExamDropdownData(res);
    }
  }, [data]);
  console.log('examDropdownData========================>', examDropdownData);
  React.useEffect(() => {
    if (selected !== '' && res?.data) {
      const examSchedule = res?.data[0].examSchedule;
      //console.log({examSchedule});
      setResData(examSchedule);
    }
  }, [res?.data, selected]);


  if (isLoading) {
    return (
      <Center>
        <Skeleton my="2" w={wp('80%')} text />
        <Skeleton my="2" w={wp('80%')} text />
        <Skeleton my="2" w={wp('80%')} text />
        <Skeleton my="2" w={wp('80%')} text />
        <Skeleton my="2" w={wp('80%')} text />
      </Center>
    );
  }

  return (
    <Box flex={1} bg={colors.white}>
      <Box p="3">
        <HStack
          space={6}
          justifyContent="space-between"
          w="100%"
          alignItems={'center'}>
          <Text bold color={colors.primary}>
            Select
          </Text>
          <Dropdown
            style={styles.dropdown}
            containerStyle={styles.shadow}
            data={examDropdownData}
         
            maxHeight={200}
            labelField="label"
            valueField="value"
            label="Dropdown"
            placeholder="Select Branch"
            value={selected.value}
            onChange={item => {
              setSelected(item);
            }}
            renderItem={item => _renderItem(item)}
            textError="Error"
          />
        </HStack>
      </Box>
      <FlatList
        bg={colors.primaryLight}
        py="2"
        showsVerticalScrollIndicator={false}
        borderTopLeftRadius={'30'}
        borderTopRightRadius={'30'}
        data={resData}
        renderItem={({item, index}) => (
          <ScheduleCard item={item} index={index} />
        )}
        keyExtractor={item => item.subject}
      />
    </Box>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    width: wp('50%'),
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 2,
    paddingHorizontal: 2,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
