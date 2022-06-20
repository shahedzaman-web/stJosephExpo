import {Box, Center, FlatList, Skeleton} from 'native-base';
import React from 'react';
import {useSelector} from 'react-redux';
import AppHeader from '../../../components/AppHeader';
import {useGetAcademicAttachmentListsQuery} from '../../../store/services/studentApi';
import colors from '../../../theme/colors';
import AttachmentCard from './AttachmentCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const AttachmentsBook = () => {
  const userInfo = useSelector(state => state.auth.userInfo);
  const {data, isLoading} = useGetAcademicAttachmentListsQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionName: userInfo.session.sessionName,
    sessionId: userInfo.session._id,
    classId: userInfo.class._id,
    sectionId: userInfo.section._id,
  });
  //console.log({data});
  if (isLoading) {
    return <Center>
      <Skeleton w={wp("80%")} h={hp("5%")} />
      <Skeleton w={wp("80%")} h={hp("5%")} />
      <Skeleton w={wp("80%")} h={hp("5%")} />
      <Skeleton w={wp("80%")} h={hp("5%")} />
      <Skeleton w={wp("80%")} h={hp("5%")} />
    </Center>;
  }
  return (
    <Box flex={1} safeArea>
      <AppHeader title="Attachments Book" />
      <FlatList
        mt={'6'}
        data={data.data}
        renderItem={({item, index}) => (
          <AttachmentCard item={item} index={index} />
        )}
        keyExtractor={index => index.toString()}
        showsVerticalScrollIndicator={false}
        bg={colors.primaryLight}
        borderTopLeftRadius={'30'}
        borderTopRightRadius={'30'}
      />
    </Box>
  );
};

export default AttachmentsBook;
