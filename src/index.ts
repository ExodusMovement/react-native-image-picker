import {Platform} from 'react-native';

import {
  CameraOptions,
  ImageLibraryOptions,
  Callback,
  ImagePickerResponse,
} from './types';
import {
  imageLibrary as nativeImageLibrary,
  camera as nativeCamera,
} from './platforms/native';

export * from './types';

export function launchCamera(options: CameraOptions, callback?: Callback) {
  if (Platform.OS === 'web') {
    const result: ImagePickerResponse = {
      errorCode: 'others',
      errorMessage: 'Web platform is not supported',
    };
    if (callback) callback(result);
    return Promise.resolve(result);
  }
  return nativeCamera(options, callback);
}

export function launchImageLibrary(
  options: ImageLibraryOptions,
  callback?: Callback,
) {
  if (Platform.OS === 'web') {
    const result: ImagePickerResponse = {
      errorCode: 'others',
      errorMessage: 'Web platform is not supported',
    };
    if (callback) callback(result);
    return Promise.resolve(result);
  }
  return nativeImageLibrary(options, callback);
}
