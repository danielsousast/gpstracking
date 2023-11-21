import {getPackagePointList} from '@/data';
import {Screen, StatusItem} from '@/presentation/components';
import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {EmptyList} from './components/EmptyList';
import {NavigationScreenProps, RoutesEnum} from '@/main/navigation';

export function SyncListScreen({
  navigation,
}: NavigationScreenProps<RoutesEnum.PACKAGE_POINT_LIST>) {
  const [loading, setLoading] = useState(true);
  const [packagePointList, setPackagePointList] = useState<any[]>([]);

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function getPackagePoint() {
      const response = await getPackagePointList();
      setPackagePointList(response as any);
      setLoading(false);
    }
    getPackagePoint();
  }, []);

  function renderItem({item}: ListRenderItemInfo<any>) {
    return <StatusItem packagePoint={item} />;
  }

  return (
    <Screen
      onNavigatePress={handleGoBack}
      withBackButton
      screenTitle="Status"
      titleAlign="center">
      <FlatList
        data={packagePointList}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyList loading={loading} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      />
    </Screen>
  );
}
