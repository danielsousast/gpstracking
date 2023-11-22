import {Storage} from '../services/storageService';

export function deleteHistory() {
  Storage.deleteAll();
}
