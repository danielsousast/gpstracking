import React from 'react';
import {Navigator} from '@/main/navigation';
import {Providers} from '@/presentation/providers';
import {RealmProvider} from '@realm/react';

export const App: React.FC = () => {
  return (
    <RealmProvider>
      <Providers>
        <Navigator />
      </Providers>
    </RealmProvider>
  );
};
