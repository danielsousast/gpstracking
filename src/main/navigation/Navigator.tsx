import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardScreen, SyncListScreen} from '@/presentation/screens';
import {RootParamsList} from './NavigationTypes';
import {RoutesEnum} from './RoutesEnum';

const Stack = createNativeStackNavigator<RootParamsList>();

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={RoutesEnum.DASHBOARD} component={DashboardScreen} />
        <Stack.Screen
          name={RoutesEnum.PACKAGE_POINT_LIST}
          component={SyncListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
