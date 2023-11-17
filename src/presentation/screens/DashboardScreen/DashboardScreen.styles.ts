import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  margin-right: -20px;
  margin-left: -20px;
  padding: 20px;
`;

export const WrapperContent = styled.View`
  flex: 1;
  padding-left: 20px;
`;

export const StatusText = styled.Text`
  color: green;
  font-size: 16px;
  font-style: italic;
  margin-top: 4px;
`;

export const ButtosWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
