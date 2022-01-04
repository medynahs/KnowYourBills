import React from 'react';
import {
  CardView,
  Title
} from './styles';

type SmallCardProps = {
  title: string;
  value: string;
};

const Goals: React.FC<SmallCardProps> = ({title, value}) => (
    <>
    <Title>Goals</Title>
    <CardView>
   </CardView>
    </>
  
);

export default Goals;