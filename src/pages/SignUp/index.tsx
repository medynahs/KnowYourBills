import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthScreensParams} from '../../Types';
import {
  SafeView,
  TextsView,
  Title,
} from './styles';

type SignUpScreenProps = NativeStackScreenProps<
  AuthScreensParams,
  'SignUp'
>;

const SignUp: React.FC<SignUpScreenProps> = ({navigation}) => {

  return (
    <SafeView>
      <TextsView>
        <Title>SIGN UP</Title>
      </TextsView>
    </SafeView>
  );
};

export default SignUp;
