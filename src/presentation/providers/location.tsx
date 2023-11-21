import {sendLocationAsync} from '@/data/packagePoint/usecases/sendLocation';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {useNetInfo} from '@react-native-community/netinfo';
import React, {createContext, useCallback, useEffect, useState} from 'react';

const INTERVALS: Interval[] = [
  {
    value: 10000,
    label: '10s',
  },
  {
    value: 5000,
    label: '5s',
  },
  {
    value: 3000,
    label: '3s',
  },
  {
    value: 1000,
    label: '1s',
  },
];

interface Interval {
  value: number;
  label: string;
}

interface LocatioData {
  selectedInterval?: number;
  handleSetNewInterval: (newInterval: number) => void;
  availableIntervals?: Interval[];
  serviceIsOn?: boolean;
  setServiceIsOn?: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationContext = createContext<LocatioData>({} as LocatioData);

export function LocationProvider({children}: React.PropsWithChildren<{}>) {
  const {isConnected} = useNetInfo();
  const [serviceIsOn, setServiceIsOn] = useState(false);
  const [selectedInterval, setSelectedInterval] = useState(INTERVALS[0].value); // Valor padrão de 5 minutos (em milissegundos)
  const availableIntervals = INTERVALS;

  const handleSendLocation = useCallback(
    (location: GeolocationResponse) => {
      try {
        sendLocationAsync(location, isConnected);
      } catch (error) {
        console.error('Erro ao enviar dados de localização:', error);
      }
    },
    [isConnected],
  );

  const updateLocation = useCallback(() => {
    if (!serviceIsOn) {
      return;
    }
    Geolocation.getCurrentPosition(
      position => {
        handleSendLocation(position);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, [handleSendLocation, serviceIsOn]);

  useEffect(() => {
    // Atualiza a localização a cada intervalo (por exemplo, a cada 5 minutos)
    const interval = setInterval(() => {
      updateLocation();
    }, selectedInterval); // 5 minutos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [selectedInterval, updateLocation]);

  const handleSetNewInterval = (newInterval: number) => {
    setSelectedInterval(newInterval);
  };

  return (
    <LocationContext.Provider
      value={{
        handleSetNewInterval,
        availableIntervals,
        selectedInterval,
        setServiceIsOn,
        serviceIsOn,
      }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = React.useContext(LocationContext);
  if (!context) {
    throw new Error('useSyncData must be used within a SyncDataProvider');
  }
  return context;
}
