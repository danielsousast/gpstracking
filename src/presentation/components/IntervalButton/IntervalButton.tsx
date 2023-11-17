import React from 'react';
import * as S from './IntervalButton.styles';

interface Props {
  onPress: () => void;
  value: string;
}

export function IntervalButton({onPress, value}: Props) {
  return (
    <S.ButtonContainer onPress={onPress}>
      <S.ButtonTex>{value}</S.ButtonTex>
    </S.ButtonContainer>
  );
}
