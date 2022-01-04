import React from 'react';
import {
  CardView,
  Title
} from './styles';

type SmallCardProps = {
  title: string;
  value: string;
};

const Earnings: React.FC<SmallCardProps> = ({title, value}) => (
    <>
    <Title>Earnings</Title>
    <CardView>
   </CardView>
    </>
  
);

export default Earnings;
