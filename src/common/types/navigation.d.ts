import {RootParamsList} from '@/main/navigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamsList {}
  }
}
