import styled, {css} from 'styled-components/native';

export interface BoxContainerProps {
  mt?: number;
  mb?: number;
  withBorder?: boolean;
}

export const BoxContainer = styled.View<BoxContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({mt}) => (mt ? `${mt}px` : 0)};
  margin-bottom: ${({mb}) => (mb ? `${mb}px` : 0)};
  padding: 16px 0;

  ${({withBorder}) =>
    withBorder &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: #e5e5e5;
    `}
`;

export const BoxContent = styled.View``;
