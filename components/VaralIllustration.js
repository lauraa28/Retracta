import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing, Text } from 'react-native';
import { clothesPieces } from '../data/Mockdata';


export default function VaralIllustration({ isOpen }) {
  const progress = useRef(new Animated.Value(isOpen ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: isOpen ? 1 : 0,
      duration: 450,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [isOpen, progress]);

  const barWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['6%', '100%'],
  });

  const piecesOpacity = progress.interpolate({
    inputRange: [0, 0.6, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <View style={styles.container}>
      <View style={styles.trackRow}>
        <View style={styles.pole} />
        <View style={styles.trackBg}>
          <Animated.View style={[styles.trackFill, { width: barWidth }]} />
        </View>
        <View style={styles.pole} />
      </View>

      <Animated.View style={[styles.piecesRow, { opacity: piecesOpacity }]}>
        {clothesPieces.map((piece) => (
          <View key={piece.id} style={[styles.piece, { backgroundColor: piece.color }]} />
        ))}
      </Animated.View>

      <Text style={styles.caption}>
        {isOpen ? `${clothesPieces.length} peças no varal · estendido` : 'Varal recolhido · protegido'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9EEF9',
    borderRadius: 20,
    paddingVertical: 22,
    paddingHorizontal: 18,
    marginTop: -28,
    marginHorizontal: 18,
  },
  trackRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pole: {
    width: 8,
    height: 44,
    borderRadius: 4,
    backgroundColor: '#9AA3B8',
  },
  trackBg: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D3D9E8',
    marginHorizontal: 6,
    overflow: 'hidden',
  },
  trackFill: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: '#3F8FE8',
  },
  piecesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginTop: 14,
  },
  piece: {
    width: 26,
    height: 34,
    borderRadius: 6,
  },
  caption: {
    textAlign: 'center',
    marginTop: 14,
    color: '#6B7280',
    fontSize: 13,
  },
});