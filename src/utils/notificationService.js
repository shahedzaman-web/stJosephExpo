import messaging from '@react-native-firebase/messaging';

const requestUserPermission = async () => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        return fcmToken;
      } else {
        return null;
      }
    }
  } catch (e) {
    //console.log(e);
  }
};

export default requestUserPermission;
