import {Navigator} from '@/main/navigation';
import {SyncDataProvider} from '@/presentation/providers/syncData';
import {RealmProvider} from '@realm/react';
import React from 'react';

export const App: React.FC = () => {
  return (
    <RealmProvider>
      <SyncDataProvider>
        <Navigator />
      </SyncDataProvider>
    </RealmProvider>
  );
};
