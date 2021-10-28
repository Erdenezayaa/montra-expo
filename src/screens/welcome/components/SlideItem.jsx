import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from '../../../styles';

const slide1 = require('../../../../assets/gain_control.json');
const slide2 = require('../../../../assets/know_money.json');
const slide3 = require('../../../../assets/planning_ahead.json');

function SlideItem(props) {
  const {item, animRefs} = props;
  return (
    <View style={styles.slideContainer}>
      <View style={styles.slideItemWrapper}>
        {item.icon === 0 && (
          <LottieView ref={animRefs[0]} source={slide1} autoPlay />
        )}
        {item.icon === 1 && (
          <LottieView ref={animRefs[1]} source={slide2} autoPlay />
        )}
        {item.icon === 2 && (
          <LottieView ref={animRefs[2]} source={slide3} autoPlay />
        )}
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
}

export default SlideItem;
