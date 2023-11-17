import styled, {css} from 'styled-components/native';

export interface ButtonContainerProps {
  selected?: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 65px;
  border-radius: 4px;
  border-width: 1px;
  border-color: #ccc;
  ${({selected}) =>
    selected &&
    css`
      background-color: #edf5f3;
      border-color: #5acd57;
    `}
`;

export const ButtonTex = styled.Text``;
