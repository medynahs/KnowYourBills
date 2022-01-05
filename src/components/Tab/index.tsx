import React from 'react';
import {
  AddButton,
  Icon,
} from './styles';

type SmallCardProps = {
  title: string;
  value: string;
};

const Tab: React.FC<SmallCardProps> = ({title, value}) => (
    <>
      <AddButton onPress={() => console.log('open circle menu')}/>
      <Icon color="white" size={48} />
    </>
  
);

export default Tab;