import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useDayPeriod } from '../utils/Timeofday';
import { dayPeriods, palette } from '../theme/Colors';
import { weather, recentActivity } from '../data/Mockdata';
import VaralIllustration from '../components/VaralIllustration';

export default function HomeScreen() {
  const periodKey = useDayPeriod();
  const theme = dayPeriods[periodKey];
  const [isOpen, setIsOpen] = useState(true); 
  const [smartMode, setSmartMode] = useState(true);

  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={theme.gradient} style={styles.header}>
        <Text style={styles.brand}>RETRACTA</Text>
        <Text style={styles.condition}>{weather.condition}</Text>
        <Text style={styles.temp}>{weather.temp}°C</Text>

        <View style={styles.chipsRow}>
          <View style={styles.chip}>
            <Feather name="droplet" size={12} color="#fff" />
            <Text style={styles.chipText}>{weather.humidity}%</Text>
          </View>
          <View style={styles.chip}>
            <Feather name="wind" size={12} color="#fff" />
            <Text style={styles.chipText}>{weather.wind} km/h</Text>
          </View>
          <View style={styles.chip}>
            <Feather name="thermometer" size={12} color="#fff" />
            <Text style={styles.chipText}>{weather.thermalSensation}°C</Text>
          </View>
        </View>

        <View style={styles.hourlyBox}>
          {weather.hourly.map((h) => (
            <View key={h.hour} style={styles.hourlyItem}>
              <Feather name={h.icon} size={16} color="#fff" />
              <Text style={styles.hourlyHour}>{h.hour}</Text>
              <Text style={styles.hourlyTemp}>{h.temp}°C</Text>
            </View>
          ))}
        </View>
      </LinearGradient>

      <VaralIllustration isOpen={isOpen} />

      <View style={styles.card}>
        <Text style={styles.cardLabel}>STATUS DO VARAL</Text>
        <View style={styles.statusRow}>
          <View style={[styles.statusDot, { backgroundColor: isOpen ? palette.success : '#9AA3B8' }]} />
          <Text style={styles.statusText}>{isOpen ? 'Aberto' : 'Recolhido'}</Text>
          {isOpen && <Feather name="check-circle" size={18} color={palette.success} style={{ marginLeft: 6 }} />}
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => setIsOpen((v) => !v)}
          style={styles.actionButtonWrap}
        >
          <LinearGradient
            colors={['#FF9A3D', '#E8452F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.actionButton}
          >
            <Text style={styles.actionButtonText}>{isOpen ? 'Recolher Varal' : 'Abrir Varal'}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.smartRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.smartTitle}>Modo Inteligente</Text>
            <Text style={styles.smartSubtitle}>Automação ativa · monitorando o clima</Text>
          </View>
          <Switch
            value={smartMode}
            onValueChange={setSmartMode}
            trackColor={{ false: '#D3D9E8', true: '#3F6FE0' }}
            thumbColor="#fff"
          />
        </View>
      </View>

      {!isOpen && (
        <View style={styles.card}>
          <Text style={styles.cardLabel}>ATIVIDADE RECENTE</Text>
          {recentActivity.map((a, idx) => (
            <View
              key={a.id}
              style={[styles.activityRow, idx !== recentActivity.length - 1 && styles.activityRowBorder]}
            >
              <View style={[styles.activityIcon, { backgroundColor: a.color + '22' }]}>
                <Feather name={a.icon} size={14} color={a.color} />
              </View>
              <View>
                <Text style={styles.activityTitle}>{a.title}</Text>
                <Text style={styles.activityTime}>{a.time}</Text>
              </View>
            </View>
          ))}
        </View>
      )}

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.background },
  header: {
    paddingTop: 54,
    paddingHorizontal: 20,
    paddingBottom: 56,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  brand: { color: '#fff', fontSize: 26, fontWeight: '800', marginTop: 18, letterSpacing: 0.5 },
  condition: { color: 'rgba(255,255,255,0.9)', fontSize: 14, marginTop: 2 },
  temp: { color: '#fff', fontSize: 52, fontWeight: '700', marginTop: 6 },
  chipsRow: { flexDirection: 'row', marginTop: 14 },
  chip: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderRadius: 16, paddingHorizontal: 10, paddingVertical: 6,
    marginRight: 8,
  },
  chipText: { color: '#fff', fontSize: 12, marginLeft: 5, fontWeight: '600' },
  hourlyBox: {
    flexDirection: 'row', justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 16, padding: 14, marginTop: 18,
  },
  hourlyItem: { alignItems: 'center' },
  hourlyHour: { color: 'rgba(255,255,255,0.85)', fontSize: 11, marginTop: 6 },
  hourlyTemp: { color: '#fff', fontSize: 13, fontWeight: '700', marginTop: 2 },
  card: {
    backgroundColor: palette.card,
    borderRadius: 20,
    marginHorizontal: 18,
    marginTop: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  cardLabel: { color: palette.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 0.5 },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  statusDot: { width: 9, height: 9, borderRadius: 5, marginRight: 8 },
  statusText: { fontSize: 22, fontWeight: '800', color: palette.textDark },
  actionButtonWrap: { marginTop: 16 },
  actionButton: { borderRadius: 16, paddingVertical: 16, alignItems: 'center' },
  actionButtonText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  smartRow: { flexDirection: 'row', alignItems: 'center' },
  smartTitle: { fontSize: 15, fontWeight: '700', color: palette.textDark },
  smartSubtitle: { fontSize: 12, color: palette.textMuted, marginTop: 2 },
  activityRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  activityRowBorder: { borderBottomWidth: 1, borderBottomColor: palette.border },
  activityIcon: {
    width: 30, height: 30, borderRadius: 15,
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  activityTitle: { fontSize: 13, fontWeight: '600', color: palette.textDark },
  activityTime: { fontSize: 11, color: palette.textMuted, marginTop: 2 },
});