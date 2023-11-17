/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import * as S from './ScreenHeader.styles';

export function ScreenHeader() {
  return (
    <S.HeaderContainer>
      <S.HeaderText
        style={{
          opacity: 0.7,
        }}>
        Olá, bem vindo
      </S.HeaderText>
      <S.TouchBox>
        <S.HeaderText>Status</S.HeaderText>
      </S.TouchBox>
    </S.HeaderContainer>
  );
}
