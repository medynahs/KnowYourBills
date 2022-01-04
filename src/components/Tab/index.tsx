import React from 'react';
import {
  AddButton,
} from './styles';

type SmallCardProps = {
  title: string;
  value: string;
};

const Tab: React.FC<SmallCardProps> = ({title, value}) => (
    <>
    <AddButton />
    </>
  
);

export default Tab;