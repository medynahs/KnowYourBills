import styled from 'styled-components/native';
import normalizeSize from '../../utils/normalizeSize';

export const SafeView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const HeaderView = styled.View`
  height: ${normalizeSize(180)}px;
  background-color: #1C1C1E;
`;

export const Perfil = styled.View`
  height: ${normalizeSize(40)}px;
  width: ${normalizeSize(40)}px;
  border-radius: ${normalizeSize(40)}px;
  background-color: #fff;
  margin: ${normalizeSize(20)}px ${normalizeSize(0)}px ${normalizeSize(20)}px ${normalizeSize(20)}px ;
`;

export const BalanceText = styled.Text`
  font-size: ${normalizeSize(12)}px;
  color: #8F8F91;
  align-self: center;
  margin-top: ${normalizeSize(20)}px
`;

export const BalanceValue = styled.Text`
  font-size: ${normalizeSize(30)}px;
  color: #fff;
  font-weight: bold;
  align-self: center;
`;
