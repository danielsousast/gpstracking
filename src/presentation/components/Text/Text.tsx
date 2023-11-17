/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren} from 'react';
import styled from 'styled-components/native';

interface Props extends PropsWithChildren {
  preset?: 'title' | 'subtitle' | 'body' | 'label';
  mt?: number;
  color?: string;
  fontStyle?: 'normal' | 'italic';
}

const fontSizes = {
  title: 24,
  subtitle: 20,
  body: 16,
  label: 12,
};

export function Text({
  preset,
  children,
  mt = 0,
  color = '#000',
  fontStyle = 'normal',
}: Props) {
  return (
    <TextRN
      style={{
        fontSize: fontSizes[preset || 'body'],
        fontWeight: preset === 'title' ? 'bold' : 'normal',
        fontStyle,
        marginTop: mt,
        color,
      }}>
      {children}
    </TextRN>
  );
}

export const TextRN = styled.Text``;
