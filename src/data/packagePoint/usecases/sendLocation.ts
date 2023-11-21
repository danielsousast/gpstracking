import uuid from 'react-native-uuid';
import {GeolocationResponse} from '@react-native-community/geolocation';
import {APIService} from '../services/apiService';
import {Storage} from '../services/storageService';
import {timestampToFormattedDate} from '@/common/utils/date';

// Send location to server api and save in local database
/**
 *
 * @param location GeolocationResponse
 * @param isConnected
 */
export async function sendLocationAsync(
  location: GeolocationResponse,
  isConnected: boolean | null,
) {
  try {
    const time = timestampToFormattedDate(location.timestamp);
    const packageId = uuid.v4() as string;
    let syncStatus = isConnected ? true : false;

    const body = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      speed: location.coords.speed || 0,
      time,
      packageId,
    };
    if (isConnected) {
      // Send to server api
      await APIService.create(body);
    }
    // Save in local database
    Storage.createPackagePoint({
      ...body,
      synced: syncStatus,
    });
  } catch (error) {
    console.log(error);
  }
}
