import React from 'react';
import * as S from './Toggle.style';
import {Switch} from 'react-native';
import {Text} from '../Text/Text';
import {useLocation} from '@/presentation/providers/location';

export function ToggleService() {
  const {setServiceIsOn, serviceIsOn} = useLocation();

  return (
    <S.ToggleContainer>
      <S.ToggleContent>
        <Text preset="subtitle" mt={10}>
          Status do serviço
        </Text>
        <Text mt={6}>{serviceIsOn ? 'Serviço ativo' : 'Serviço inativo'}</Text>
      </S.ToggleContent>
      <Switch onValueChange={setServiceIsOn} value={serviceIsOn} />
    </S.ToggleContainer>
  );
}
