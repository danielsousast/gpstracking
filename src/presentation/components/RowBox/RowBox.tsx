import React from 'react';
import * as S from './RowBox.styles';

interface Props extends S.BoxContainerProps {
  mainContent?: React.JSX.Element;
  rightContent?: React.JSX.Element;
}

export function RowBox({mainContent, rightContent, ...containerProps}: Props) {
  return (
    <S.BoxContainer {...containerProps}>
      <S.BoxContent>{mainContent}</S.BoxContent>
      {rightContent}
    </S.BoxContainer>
  );
}
