import {APIService} from './apiService';
import {Storage} from './storageService';

export const syncData = async () => {
  // Get all local packages
  const localPackages = await Storage.getAllPackages({
    onlyNotSynced: true,
  });

  if (!localPackages?.length) {
    return;
  }

  // Send all local packages to API
  localPackages?.forEach(async (pointPackage: any) => {
    await APIService.create({
      latitude: pointPackage.latitude,
      longitude: pointPackage.longitude,
      speed: pointPackage.speed,
      time: pointPackage.time,
      packageId: pointPackage.id,
    });

    // Update local package status
    Storage.updatePackageStatus(pointPackage?._objectKey());
  });
};
