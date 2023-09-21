import messaging from '@react-native-firebase/messaging'
import { loadString, saveString } from './storage'
import { PermissionsAndroid, Platform } from 'react-native'
import Config from 'react-native-config'

export async function requestUserNotificationPermission(): Promise<void> {
  try {
    let enabled = false

    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: `Allow ${Config.APP_NAME} to send notification`,
          message:
            'Enable notifications to stay updated with our latest news and alerts.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        enabled = true
      }
    } else if (Platform.OS === 'ios') {
      const authStatus = await messaging().requestPermission()
      enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL
    }

    if (enabled) {
      getFCMToken()
    }
  } catch (error) {
    console.log(error)
  }
}

async function getFCMToken(): Promise<void> {
  const fcmToken = await loadString('fcmtoken')
  if (!fcmToken) {
    try {
      await messaging().registerDeviceForRemoteMessages()
      const newToken = await messaging().getToken()

      if (newToken) {
        await saveString('fcmtoken', newToken)
        uploadFCMToken(newToken)
      }
    } catch (error) {
      console.log(error)
      console.log(
        "YouSheng: Above Error are probably due to APNs is not set yet. Don't GanJiong"
      )
    }
  }
}

async function uploadFCMToken(newToken: string): Promise<void> {
  // token should upload to database
  console.log(newToken)
}

export function notificationListener(navigation: any): void {
  messaging().onNotificationOpenedApp((remoteMessage) => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification
    )
    if (remoteMessage.data && remoteMessage.data.redirect) {
      navigation.navigate(remoteMessage.data.redirect)
    }
  })

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification
        )
        if (remoteMessage.data && remoteMessage.data.redirect) {
          navigation.navigate(remoteMessage.data.redirect)
        }
      }
    })
}
