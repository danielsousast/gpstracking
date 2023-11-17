import {Screen, StatusItem} from '@/presentation/components';
import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

export function SyncListScreen({navigation}: any) {
  function handleGoBack() {
    navigation.goBack();
  }

  function renderItem({}: ListRenderItemInfo<any>) {
    return <StatusItem />;
  }

  return (
    <Screen
      onNavigatePress={handleGoBack}
      withBackButton
      screenTitle="Status"
      titleAlign="center">
      <FlatList data={['1', '2', '3', '4', '5', '6']} renderItem={renderItem} />
    </Screen>
  );
}
