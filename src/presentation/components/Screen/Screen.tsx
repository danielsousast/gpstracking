import React from 'react';
import * as S from './Screen.styles';
import {ScreenHeader, ScreenHeaderProps} from '../ScreenHeader/ScreenHeader';

interface Props extends ScreenHeaderProps {
  children: React.ReactNode;
}

export function Screen({children, ...headerProps}: Props) {
  return (
    <React.Fragment>
      <ScreenHeader {...headerProps} />
      <S.ScreenContainer>
        <S.ScreenContent>{children}</S.ScreenContent>
      </S.ScreenContainer>
    </React.Fragment>
  );
}
