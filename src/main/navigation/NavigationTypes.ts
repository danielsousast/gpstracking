import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RoutesEnum} from './RoutesEnum';

export type RootParamsList = {
  [RoutesEnum.DASHBOARD]: undefined;
  [RoutesEnum.PACKAGE_POINT_LIST]: undefined;
};

export type NavigationScreenProps<RouteName extends keyof RootParamsList> =
  NativeStackScreenProps<RootParamsList, RouteName>;
