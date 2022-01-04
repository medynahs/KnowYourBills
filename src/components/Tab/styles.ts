import styled from 'styled-components/native';
import normalizeSize from '../../utils/normalizeSize';

export const AddButton = styled.View`
  width: ${normalizeSize(60)}px;
  height: ${normalizeSize(60)}px;
  border-radius: ${normalizeSize(60)}px;
  background-color: pink;
  position: absolute;
  bottom: 30;
  align-self: center;
  `;