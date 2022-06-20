import {Box, Button, Image, Modal, Text} from 'native-base';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import bgCardColor from '../../../theme/bgCardColor';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
import colors from '../../../theme/colors';
import moment from 'moment';
import baseURL from '../../../utils/baseURL';

const AttachmentCard = ({index, item}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const {title, publishDate, attachmentFile, remarks} = item;

  return (
    <Box
      w={wp('90%')}
      h={hp('30%')}
      my={'2'}
      justifyContent={'center'}
      borderRadius="md"
      p={'2'}
      borderLeftWidth={'10'}
      shadow={'3'}
      bg={bgCardLighterColor[index]}
      alignSelf="center"
      borderLeftColor={bgCardColor[index]}>
      <Text bold fontSize="lg" color={bgCardColor[index]}>
        {title}
      </Text>

      <Text fontSize="md">Class: {item.classDetails.className}</Text>
      <Text fontSize="md">Subject: {item.subject.subjectName}</Text>
      <Text fontSize="md">Remarks: {remarks}</Text>

      <Text fontSize="md">
        Date: {moment(publishDate).format('MMMM Do YYYY')}
      </Text>
      <Button
        onPress={() => setModalVisible(true)}
        my="2"
        bg={bgCardColor[index]}>
        <Text fontSize="md" bold color={colors.white}>
          View Attachment
        </Text>
      </Button>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="center"
        bottom="4"
        size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>View Attachment</Modal.Header>
          <Modal.Body>
            <Image
            alt={"attachment"}
            source={{
            uri: baseURL + '/academicAttachment/' + attachmentFile,
          }}
          style={{
            width: wp('80%'),
            height: hp('50%'),
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setModalVisible(false);
              }}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default AttachmentCard;
