import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DefaultScreensParams} from '../../Types';
import {
  SafeView,
  HeaderView,
  BalanceText,
  BalanceValue,
  Perfil
} from './styles';
import Earnings from '../../components/Earnings';
import Expenses from '../../components/Expenses';
import Goals from '../../components/Goals';
import Tab from '../../components/Tab';

type DashboardScreenProps = NativeStackScreenProps<
  DefaultScreensParams,
  'Dashboard'
>;

const SignUp: React.FC<DashboardScreenProps> = ({navigation}) => {

  return (
    <SafeView>
      <HeaderView>
        <Perfil/>
        <BalanceText>Accounts balance</BalanceText>
        <BalanceValue>R$ 9.634,23</BalanceValue>
      </HeaderView>
      <Expenses />
      <Earnings />
      <Goals />
      <Tab />
      
    </SafeView>
  );
};

export default SignUp;
