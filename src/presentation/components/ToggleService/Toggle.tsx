import React from 'react';
import * as S from './Toggle.style';
import {Switch} from 'react-native';

export function ToggleService() {
  return (
    <S.ToggleContainer>
      <S.ToggleContent>
        <S.ToggleTitle>Status do serviço</S.ToggleTitle>
        <S.ToggleDescription>Serviço ativo</S.ToggleDescription>
      </S.ToggleContent>
      <Switch />
    </S.ToggleContainer>
  );
}
