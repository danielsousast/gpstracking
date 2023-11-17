import React, {PropsWithChildren} from 'react';
import * as S from './Screen.styles';
import {ScreenHeader} from '../ScreenHeader/ScreenHeader';

const Screen = ({children}: PropsWithChildren) => {
  return (
    <React.Fragment>
      <ScreenHeader />
      <S.ScreenContainer>
        <S.ScreenContent>{children}</S.ScreenContent>
      </S.ScreenContainer>
    </React.Fragment>
  );
};

export default Screen;
