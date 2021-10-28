import React from 'react';
import {TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/back_icon.svg';


export default function BackButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <BackIcon width={32} height={32} />
    </TouchableOpacity>
  );
}
