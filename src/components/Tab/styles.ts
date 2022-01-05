import styled from 'styled-components/native';
import normalizeSize from '../../utils/normalizeSize';
import { Plus } from 'react-feather';

export const AddButton = styled.TouchableOpacity`
  width: ${normalizeSize(60)}px;
  height: ${normalizeSize(60)}px;
  border-radius: ${normalizeSize(60)}px;
  background-color: black;
  position: absolute;
  bottom: 30;
  align-self: center;
  `;

export const Icon = styled(Plus)` 
  position: absolute;
  bottom: 36;
  align-self: center;
`;