import React, {createContext, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {syncData} from '@/data/packagePoint/syncdata';

interface SyncData {
  isConnected: boolean;
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
    syncData();
  }, [isConnected]);

  return (
    <SyncDataContext.Provider value={{isConnected}}>
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
