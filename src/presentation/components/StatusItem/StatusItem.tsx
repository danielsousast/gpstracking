import React, {Fragment} from 'react';
import {RowBox} from '../RowBox/RowBox';
import {Text} from '../Text/Text';

interface Props {
  packagePoint: any;
}

export function StatusItem({packagePoint}: Props) {
  const statusLabel = packagePoint?.synced
    ? 'Sincronizado'
    : 'Pendente sincronizar';

  return (
    <RowBox
      mb={10}
      withBorder
      mainContent={
        <Fragment>
          <Text preset="body">
            Pacote ID: {packagePoint?.packageId?.split('-')[0]}
          </Text>
          <Text preset="label" mt={4}>
            {statusLabel}
          </Text>
        </Fragment>
      }
      rightContent={
        <Text preset="body" mt={4}>
          {packagePoint?.time}
        </Text>
      }
    />
  );
}
