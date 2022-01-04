import styled from 'styled-components/native';
import normalizeSize from '../../utils/normalizeSize';

export const SafeView = styled.SafeAreaView`
  flex: 1;
  background-color: #121212;
`;

export const TextsView = styled.View`
  margin-left: ${normalizeSize(16)}px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: ${normalizeSize(32)}px;
  line-height: ${normalizeSize(32)}px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: ${normalizeSize(16)}px;
  line-height: ${normalizeSize(16)}px;
  margin: ${normalizeSize(8)}px ${normalizeSize(0)}px ${normalizeSize(32)}px
    ${normalizeSize(0)}px;
  color: rgba(255, 255, 255, 0.62);
`;

