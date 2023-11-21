import {Text} from '@/presentation/components';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 0.9;
  justify-content: center;
  align-items: center;
`;

interface Props {
  loading: boolean;
}

export function EmptyList({loading}: Props) {
  function renderContent() {
    if (loading) {
      return (
        <Wrapper>
          <ActivityIndicator size="large" color="#000" />
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        <Text preset="subtitle">Nenhum pacote encontrado</Text>
      </Wrapper>
    );
  }
  return <Wrapper>{renderContent()}</Wrapper>;
}
