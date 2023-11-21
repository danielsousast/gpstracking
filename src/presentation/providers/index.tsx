import React from 'react';
import {LocationProvider} from './location';
import {SyncDataProvider} from './sync';

export * from './location';
export * from './sync';

export function Providers({children}: React.PropsWithChildren<{}>) {
  return (
    <LocationProvider>
      <SyncDataProvider>{children}</SyncDataProvider>
    </LocationProvider>
  );
}
