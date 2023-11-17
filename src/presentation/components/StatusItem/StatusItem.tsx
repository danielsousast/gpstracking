import React, {Fragment} from 'react';
import {RowBox} from '../RowBox/RowBox';
import {Text} from '../Text/Text';

// import { Container } from './styles';

export function StatusItem() {
  return (
    <RowBox
      mb={10}
      withBorder
      mainContent={
        <Fragment>
          <Text preset="body">Pacote ID: XXX</Text>
          <Text preset="label" mt={4}>
            Pendente sincroizar
          </Text>
        </Fragment>
      }
      rightContent={
        <Text preset="body" mt={4}>
          11:32
        </Text>
      }
    />
  );
}
