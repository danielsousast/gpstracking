import React from 'react';
import * as S from './Toggle.style';
import {Switch} from 'react-native';
import {Text} from '../Text/Text';

export function ToggleService() {
  return (
    <S.ToggleContainer>
      <S.ToggleContent>
        <Text preset="subtitle" mt={10}>
          Status do serviço
        </Text>
        <Text mt={6}>Serviço ativo</Text>
      </S.ToggleContent>
      <Switch />
    </S.ToggleContainer>
  );
}
