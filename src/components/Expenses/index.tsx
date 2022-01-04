import React from 'react';
import {
  CardView,
  Title
} from './styles';

type SmallCardProps = {
  title: string;
  value: string;
};

const Expenses: React.FC<SmallCardProps> = ({title, value}) => (
    <>
    <Title>Expenses</Title>
    <CardView>
   </CardView>
    </>
  
);

export default Expenses;