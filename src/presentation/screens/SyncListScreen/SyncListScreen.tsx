import {Screen, StatusItem, Text} from '@/presentation/components';
import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {EmptyList} from './components/EmptyList';
import {NavigationScreenProps, RoutesEnum} from '@/main/navigation';
import styled from 'styled-components/native';
import {useSyncData} from '@/presentation/providers';
import {usePackageStore} from '@/presentation/stores/usePackageStore';

export function SyncListScreen({
  navigation,
}: NavigationScreenProps<RoutesEnum.PACKAGE_POINT_LIST>) {
  const {deleteAllData} = useSyncData();

  const {list, loading, fetchList} = usePackageStore();

  React.useEffect(() => {
    fetchList();
  }, [fetchList]);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleClearHistory() {
    deleteAllData && deleteAllData({onSuccess: fetchList});
  }

  function renderItem({item}: ListRenderItemInfo<any>) {
    return <StatusItem packagePoint={item} />;
  }

  return (
    <Screen
      onNavigatePress={handleGoBack}
      withBackButton
      screenTitle="Status"
      titleAlign="center">
      {list?.length !== 0 && (
        <Touchable onPress={handleClearHistory}>
          <Text>Limpar histórico</Text>
        </Touchable>
      )}
      <FlatList
        data={list}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyList loading={loading} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      />
    </Screen>
  );
}

export const Touchable = styled.TouchableOpacity`
  align-items: flex-end;
`;
