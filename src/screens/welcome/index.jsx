import React, {useRef, useCallback, useMemo} from 'react';
import {View, TouchableOpacity, Text, Animated, FlatList} from 'react-native';
import {ScalingDot} from 'react-native-animated-pagination-dots';
import styles from '../../styles';
import SlideItem from './components/SlideItem';
import {useSlideData} from './index.data';
import {soft_purple, violet} from '../../styles/colors';
import SafeAreaContainer from '../../views/SafeAreaContainer';
import Button from '../../views/Button';
import {useTranslation} from 'react-i18next';

function WelcomeScreen(props) {
  const {navigation} = props;
  const {t} = useTranslation();
  const data = useSlideData();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const firstAnim = useRef(null);
  const secondAnim = useRef(null);
  const thirdAnim = useRef(null);
  const animations = useMemo(
    () => [firstAnim, secondAnim, thirdAnim],
    [firstAnim, secondAnim, thirdAnim],
  );
  const onPressSignup = () => {
    navigation.navigate('Signup');
  };
  const onPressLogin = () => {
    navigation.navigate('Login');
  };
  const stopAllAnimations = useCallback(() => {
    animations.forEach(anim => anim.current?.pause());
  }, [animations]);
  const startAllAnimations = useCallback(() => {
    animations.forEach(anim => anim.current?.play());
  }, [animations]);
  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <View style={styles.swiperContainer}>
          <FlatList
            data={data}
            horizontal
            decelerationRate={'normal'}
            scrollEventThrottle={16}
            pagingEnabled={true}
            onScrollBeginDrag={stopAllAnimations}
            onMomentumScrollEnd={startAllAnimations}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
            renderItem={({item}) => (
              <SlideItem
                key={item.icon}
                item={item}
                animRefs={[firstAnim, secondAnim, thirdAnim]}
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.scalingDotContainer}>
          <ScalingDot
            scrollX={scrollX}
            data={data}
            inActiveDotOpacity={1}
            activeDotScale={1.3}
            containerStyle={styles.scalingDotPosition}
            dotStyle={styles.activeDot}
            activeDotColor={violet}
            inActiveDotColor={soft_purple}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={t('button.signup')} onPress={onPressSignup} />
          <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
            <Text style={styles.loginTitle}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaContainer>
  );
}

export default WelcomeScreen;
