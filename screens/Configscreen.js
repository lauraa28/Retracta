import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { palette } from '../theme/Colors';
import { device } from '../data/Mockdata';

export default function ConfigScreen() {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Configurações</Text>
        <Text style={styles.subtitle}>{device.firmware}</Text>
      </View>

      <View style={styles.deviceCard}>
        <View style={styles.deviceTop}>
          <View style={styles.deviceIcon}>
            <Feather name="smartphone" size={20} color="#fff" />
          </View>
          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text style={styles.deviceName}>{device.name}</Text>
            <Text style={styles.deviceId}>ID: {device.id}</Text>
            <View style={styles.connRow}>
              <View style={styles.connDot} />
              <Text style={styles.connText}>{device.connection}</Text>
            </View>
          </View>
        </View>

        <View style={styles.deviceStatsRow}>
          <View style={styles.deviceStat}>
            <Text style={styles.deviceStatNumber}>{device.uptime}</Text>
            <Text style={styles.deviceStatLabel}>Uptime</Text>
          </View>
          <View style={styles.deviceStat}>
            <Text style={styles.deviceStatNumber}>{device.cycles.toLocaleString('pt-BR')}</Text>
            <Text style={styles.deviceStatLabel}>Ciclos</Text>
          </View>
          <View style={styles.deviceStat}>
            <Text style={styles.deviceStatNumber}>{device.motorStatus}</Text>
            <Text style={styles.deviceStatLabel}>Motor</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.sectionLabel}>SAÚDE DO EQUIPAMENTO</Text>
        <View style={styles.healthGrid}>
          {device.health.map((h) => (
            <View key={h.id} style={styles.healthCard}>
              <View style={[styles.healthIcon, { backgroundColor: (h.status === 'Normal' ? palette.success : palette.warning) + '1A' }]}>
                <Feather name={h.icon} size={16} color={h.status === 'Normal' ? palette.success : palette.warning} />
              </View>
              <Text style={styles.healthValue}>{h.value}</Text>
              <Text style={styles.healthSub}>{h.sub}</Text>
              <View style={styles.healthStatusRow}>
                <Feather
                  name={h.status === 'Normal' ? 'check-circle' : 'alert-triangle'}
                  size={11}
                  color={h.status === 'Normal' ? palette.success : palette.warning}
                />
                <Text style={[styles.healthStatusText, { color: h.status === 'Normal' ? palette.success : palette.warning }]}>
                  {' '}{h.status}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.syncCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.syncTitle}>Última sincronização</Text>
            <Text style={styles.syncSubtitle}>O app recebeu dados atualizados do dispositivo</Text>
          </View>
          <View style={styles.syncPill}>
            <Feather name="check" size={10} color={palette.success} />
            <Text style={styles.syncPillText}> {device.lastSync}</Text>
          </View>
        </View>

        <View style={{ height: 24 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.background },
  header: {
    backgroundColor: palette.configDark,
    paddingTop: 54,
    paddingHorizontal: 20,
    paddingBottom: 32,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  title: { color: '#fff', fontSize: 24, fontWeight: '800' },
  subtitle: { color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 4 },
  deviceCard: {
    marginHorizontal: 18,
    marginTop: -20,
    borderRadius: 20,
    padding: 18,
    backgroundColor: '#2C6FE0',
  },
  deviceTop: { flexDirection: 'row', alignItems: 'center' },
  deviceIcon: {
    width: 44, height: 44, borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center', justifyContent: 'center',
  },
  deviceName: { color: '#fff', fontSize: 15, fontWeight: '700' },
  deviceId: { color: 'rgba(255,255,255,0.75)', fontSize: 11, marginTop: 2 },
  connRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  connDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#4ADE80', marginRight: 5 },
  connText: { color: 'rgba(255,255,255,0.85)', fontSize: 11 },
  deviceStatsRow: {
    flexDirection: 'row',
    marginTop: 18,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 14,
    paddingVertical: 12,
  },
  deviceStat: { flex: 1, alignItems: 'center' },
  deviceStatNumber: { color: '#fff', fontSize: 16, fontWeight: '800' },
  deviceStatLabel: { color: 'rgba(255,255,255,0.75)', fontSize: 11, marginTop: 3 },
  body: { paddingHorizontal: 18, marginTop: 22 },
  sectionLabel: { color: palette.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 0.5, marginBottom: 10 },
  healthGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  healthCard: {
    width: '47%',
    backgroundColor: palette.card,
    borderRadius: 16,
    padding: 14,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  healthIcon: { width: 32, height: 32, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  healthValue: { fontSize: 16, fontWeight: '800', color: palette.textDark, marginTop: 10 },
  healthSub: { fontSize: 10, color: palette.textMuted, marginTop: 2 },
  healthStatusRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  healthStatusText: { fontSize: 10, fontWeight: '700' },
  syncCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.card,
    borderRadius: 16,
    padding: 14,
    marginTop: 16,
  },
  syncTitle: { fontSize: 13, fontWeight: '700', color: palette.textDark },
  syncSubtitle: { fontSize: 11, color: palette.textMuted, marginTop: 2 },
  syncPill: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: palette.success + '1A',
    borderRadius: 10, paddingHorizontal: 8, paddingVertical: 4,
  },
  syncPillText: { fontSize: 10, color: palette.success, fontWeight: '700' },
});