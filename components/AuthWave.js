import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function AuthWave({ color = '#F3F5FA', height = 36 }) {
  return (
    <Svg width="100%" height={height} viewBox="0 0 400 36" preserveAspectRatio="none">
      <Path d="M0,0 L0,12 C100,36 300,0 400,18 L400,0 Z" fill={color} />
    </Svg>
  );
}