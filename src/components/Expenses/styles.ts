import styled from 'styled-components/native';
import normalizeSize from '../../utils/normalizeSize';

export const Title= styled.Text`
  font-size: ${normalizeSize(12)}px;
  color: #000;
  margin: ${normalizeSize(16)}px ${normalizeSize(0)}px ${normalizeSize(0)}px ${normalizeSize(30)}px;
`;

export const CardView = styled.View`
  width: ${normalizeSize(330)}px;
  height: ${normalizeSize(50)}px;
  background-color: 'rgba(18, 18, 18, 1)';
  border-radius: ${normalizeSize(24)}px;
  margin-top: ${normalizeSize(8)}px;
  align-self: center;
`;
