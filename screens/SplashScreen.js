import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

const AUTH_GRADIENT = ['#5B93F5', '#2E5BC8'];

export default function SplashScreen({ navigation }) {
  const [ready, setReady] = useState(false);
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
      Animated.timing(fade, { toValue: 1, duration: 400, useNativeDriver: true }).start();
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient colors={AUTH_GRADIENT} style={styles.screen}>
      <View style={styles.center}>
        <View style={styles.logoBadge}>
          <Feather name="users" size={34} color="#fff" />
          <View style={styles.checkBadge}>
            <Feather name="check" size={12} color="#fff" />
          </View>
        </View>

        <Text style={styles.brand}>RETRACTA</Text>
        <Text style={styles.tagline}>VARAL RETRÁTIL INTELIGENTE</Text>

        <View style={styles.pillsRow}>
          <View style={styles.pill}><Text style={styles.pillText}>Automático</Text></View>
          <View style={styles.pill}><Text style={styles.pillText}>Inteligente</Text></View>
          <View style={styles.pill}><Text style={styles.pillText}>Conectado</Text></View>
        </View>
      </View>

      <View style={styles.bottom}>
        {!ready ? (
          <View style={styles.dotsRow}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        ) : (
          <Animated.View style={{ opacity: fade, width: '100%' }}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.startButton}
              onPress={() => navigation?.replace('Login')}
            >
              <Text style={styles.startButtonText}>Começar agora</Text>
              <Feather name="arrow-right" size={16} color={AUTH_GRADIENT[1]} style={{ marginLeft: 8 }} />
            </TouchableOpacity>
          </Animated.View>
        )}
        <Text style={styles.version}>v2.1.0 · Retracta Pro</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'space-between', paddingVertical: 80 },
  center: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  logoBadge: {
    width: 92, height: 92, borderRadius: 26,
    backgroundColor: 'rgba(255,255,255,0.22)',
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 22,
  },
  checkBadge: {
    position: 'absolute', bottom: -4, right: -4,
    width: 24, height: 24, borderRadius: 12,
    backgroundColor: '#2FBE79',
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: AUTH_GRADIENT[1],
  },
  brand: { color: '#fff', fontSize: 30, fontWeight: '800', letterSpacing: 4 },
  tagline: { color: 'rgba(255,255,255,0.85)', fontSize: 11, fontWeight: '600', letterSpacing: 1, marginTop: 6 },
  pillsRow: { flexDirection: 'row', marginTop: 22 },
  pill: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 16, paddingHorizontal: 12, paddingVertical: 6, marginHorizontal: 4,
  },
  pillText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  bottom: { alignItems: 'center', paddingHorizontal: 32 },
  dotsRow: { flexDirection: 'row' },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.4)', marginHorizontal: 4 },
  dotActive: { backgroundColor: '#fff', width: 20 },
  startButton: {
    backgroundColor: '#fff', borderRadius: 30, paddingVertical: 16,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
  },
  startButtonText: { color: AUTH_GRADIENT[1], fontWeight: '700', fontSize: 15 },
  version: { color: 'rgba(255,255,255,0.65)', fontSize: 11, marginTop: 16 },
});