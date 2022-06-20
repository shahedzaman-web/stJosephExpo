import {Box, Center, HStack, Skeleton, VStack} from 'native-base';
import React from 'react';
import {Calendar} from 'react-native-calendars';
import colors from '../../../theme/colors';
import {useGetStudentsAttendanceMonthWistQuery} from '../../../store/services/studentApi';
import {useSelector} from 'react-redux';
import getMarkedDates from '../../../utils/getMarkedDates';
import moment from 'moment';
import PieChartScreen from './PieChartScreen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
const Attendance = () => {
  const userInfo = useSelector(state => state.auth.userInfo);
  const [selectedMonth, setSelectedMonth] = React.useState(
    moment(new Date()).format('YYYY-MM'),
  );
  const [attendance, setAttendance] = React.useState({});
  const {data, isLoading, isFetching} = useGetStudentsAttendanceMonthWistQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionName: userInfo.session.sessionName,
    sessionId: userInfo.session._id,
    classId: userInfo.class._id,
    sectionId: userInfo.section._id,
    studentId: userInfo._id,
    month: selectedMonth.slice(0, 7),
  });

  React.useLayoutEffect(() => {
    if (data !== undefined && data.length > 0) {
      setAttendance(getMarkedDates(data[0]?.data));
    }
  }, [data, selectedMonth]);

  if (isFetching) {
    return (
      <Center>
        <Skeleton w="90%" h="70%" />
        <HStack m="2">
          <Skeleton w={wp('40%')} size="20" rounded="full" />
          <VStack w={wp('60%')}>
            <Skeleton h="10%" w={wp('40%')} my="2" />
            <Skeleton h="10%" w={wp('40%')} my="2" />
            <Skeleton h="10%" w={wp('40%')} my="2" />
          </VStack>
        </HStack>
      </Center>
    );
  }
  return (
    <Box p="3" bg={colors.white} flex={1}>
      <Box>
        <Calendar
          onMonthChange={month => {
            setSelectedMonth(month.dateString);
          }}
          markingType={'period'}
          markedDates={attendance}
        />
      </Box>
      <PieChartScreen isLoading={isLoading} data={data} />
    </Box>
  );
};

export default Attendance;
