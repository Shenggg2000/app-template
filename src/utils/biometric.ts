import { Platform } from 'react-native'
import TouchID from 'react-native-touch-id'

export const checkBiometricSupport = async () => {
  try {
    const biometricType = await TouchID.isSupported()

    if (
      Platform.OS === 'ios' &&
      (biometricType === 'FaceID' || biometricType === 'TouchID')
    ) {
      return true
    } else if (Platform.OS === 'android' && biometricType) {
      return true
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

export const authenticateBiometric = async () => {
  return TouchID.authenticate('Verify your identity')
}
