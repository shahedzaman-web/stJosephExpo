/* eslint-disable */
import {Box, Center, CheckIcon, FlatList, HStack, Select, Skeleton, Text} from 'native-base';
import React from 'react';
import colors from '../../../theme/colors';
import ClassCard from './ClassCard';
import AppHeader from '../../../components/AppHeader';
import {useGetClassScheduleQuery} from '../../../store/services/studentApi';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const AcademicClassSchedule = () => {
  const [selected, setSelected] = React.useState('');

  const [dataDayWise, setDataDayWise] = React.useState(null);
  const userInfo = useSelector(state => state.auth.userInfo);
  const {data, isLoading} = useGetClassScheduleQuery({
    branchName: userInfo?.branch?.branchName,
    branchId: userInfo?.branch?._id,
    sessionName: userInfo?.session?.sessionName,
    sessionId: userInfo?.session?._id,
    classId: userInfo?.class?._id,
    sectionId: userInfo?.section?._id,
  });

  React.useEffect(() => {
    if (!isLoading && selected) {
      const day = data[0].data[0];
      
      day !== undefined && setDataDayWise(day[selected]);
    }
  }, [data, selected]);


  if(isLoading ) {
    <Center>
      <Skeleton my="2" h={hp('10%')} w={wp('90%')} />
      <Skeleton my="2" h={hp('10%')} w={wp('90%')} />
      <Skeleton my="2" h={hp('10%')} w={wp('90%')} />
      <Skeleton my="2" h={hp('10%')} w={wp('90%')} />
      <Skeleton my="2" h={hp('10%')} w={wp('90%')} />
      <Skeleton my="2" h={hp('10%')} w={wp('90%')} />
      <Skeleton my="2" h={hp('10%')} w={wp('90%')} />
    </Center>
  }
  //console.log({dataDayWise});
  return (
    <Box flex={1} safeArea>
      <AppHeader title="Class Schedule" />
      <HStack
        p="3"
        space={6}
        justifyContent="space-between"
        w="100%"
        alignItems={'center'}>
        <Text bold color={colors.primary}>
          Select Day
        </Text>
        <Select
          borderColor={colors.primary}
          selectedValue={selected}
          minWidth="200"
          accessibilityLabel="Choose"
          placeholder="Choose"
          _selectedItem={{
            bg: colors.primaryLight,
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={itemValue => setSelected(itemValue)}>
          <Select.Item label="Saturday" value="saturday" />
          <Select.Item label="Sunday" value="sunday" />
          <Select.Item label="Monday" value="monday" />
          <Select.Item label="Tuesday" value="tuesday" />
          <Select.Item label="Wednesday" value="wednesday" />
          <Select.Item label="Thursday" value="thursday" />
        </Select>
      </HStack>

      <FlatList
        justifySelf={'center'}
        data={dataDayWise}
        renderItem={({item, index}) => <ClassCard item={item} index={index} />}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        bg={colors.primaryLight}
      />
    </Box>
  );
};

export default AcademicClassSchedule;
