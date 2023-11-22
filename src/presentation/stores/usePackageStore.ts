import {getPackagePointList} from '@/data';
import {create} from 'zustand';

type State = {
  loading: boolean;
  list: any[];
  fetchList: () => Promise<any>;
};

export const usePackageStore = create<State>(set => ({
  list: [],
  loading: true,
  fetchList: async () => {
    const response = await getPackagePointList();
    // @ts-ignore
    set({list: response, loading: false});
  },
}));
