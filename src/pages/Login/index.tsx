import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthScreensParams} from '../../Types';
import {
  SafeView,
  TextsView,
  Title,
  Subtitle,
} from './styles';

type LoginScreenProps = NativeStackScreenProps<AuthScreensParams, 'Login'>;

const Login: React.FC<LoginScreenProps> = ({navigation}) => {


  return (
    <SafeView>
      <TextsView>
        <Title>Efetue o login</Title>
        <Subtitle>Insira seu usuário e senha cadastrados</Subtitle>
      </TextsView>
    </SafeView>
  );
};

export default Login;
