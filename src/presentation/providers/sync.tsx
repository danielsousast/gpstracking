import React, {createContext, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {syncData} from '@/data/packagePoint/usecases/syncData';
import {deleteHistory} from '@/data/packagePoint/usecases/cleanHistory';

interface DeleteAllData {
  onSuccess?: () => void;
}
interface SyncData {
  isConnected: boolean;
  deleteAllData?: (params: DeleteAllData) => void;
}

const SyncDataContext = createContext<SyncData>({} as SyncData);

export function SyncDataProvider({children}: React.PropsWithChildren<{}>) {
  const [isConnected, setIsConnected] = React.useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected as boolean);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (isConnected) {
      syncData();
    }
  }, [isConnected]);

  function deleteAllData({onSuccess}: DeleteAllData) {
    deleteHistory();
    onSuccess && onSuccess();
  }

  return (
    <SyncDataContext.Provider value={{isConnected, deleteAllData}}>
      {children}
    </SyncDataContext.Provider>
  );
}

export function useSyncData() {
  const context = React.useContext(SyncDataContext);
  if (!context) {
    throw new Error('useSyncData must be used within a SyncDataProvider');
  }
  return context;
}
