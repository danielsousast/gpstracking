import React from 'react';
import * as S from './IntervalButton.styles';

interface Props extends S.ButtonContainerProps {
  onPress: () => void;
  value: string;
}

export function IntervalButton({onPress, value, selected}: Props) {
  return (
    <S.ButtonContainer
      onPress={onPress}
      selected={selected}
      activeOpacity={0.6}>
      <S.ButtonTex>{value}</S.ButtonTex>
    </S.ButtonContainer>
  );
}
