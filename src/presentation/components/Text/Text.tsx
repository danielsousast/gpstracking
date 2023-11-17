/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren} from 'react';
import styled from 'styled-components/native';

interface Props extends PropsWithChildren {
  preset?: 'title' | 'subtitle' | 'body' | 'label';
  mt?: number;
}

const fontSizes = {
  title: 24,
  subtitle: 20,
  body: 16,
  label: 12,
};

export function Text({preset, children, mt = 0}: Props) {
  return (
    <TextRN
      style={{
        fontSize: fontSizes[preset || 'body'],
        fontWeight: preset === 'title' ? 'bold' : 'normal',
        marginTop: mt,
      }}>
      {children}
    </TextRN>
  );
}

export const TextRN = styled.Text``;
