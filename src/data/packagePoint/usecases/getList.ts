import {Storage} from '../services/storageService';

export async function getPackagePointList() {
  const packagePointList = await Storage.getAllPackages({onlyNotSynced: false});
  return packagePointList;
}
