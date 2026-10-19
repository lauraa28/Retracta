import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { palette } from '../theme/Colors';
import { schedules as initialSchedules } from '../data/Mockdata';

export default function AgendaScreen() {
  const [schedules, setSchedules] = useState(initialSchedules);
  const activeCount = schedules.filter((s) => s.active).length;

  const toggle = (id) => {
    setSchedules((prev) =>
      prev.map((s) => (s.id === id ? { ...s, active: !s.active, status: !s.active ? 'Ativo' : 'Inativo' } : s))
    );
  };

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={[palette.agendaPrimary, '#4B2FB0']} style={styles.header}>
        <Text style={styles.title}>Agendamentos</Text>
        <Text style={styles.subtitle}>{activeCount} de {schedules.length} agendamentos ativos</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${(activeCount / schedules.length) * 100}%` }]} />
        </View>
      </LinearGradient>

      <View style={styles.body}>
        <Text style={styles.sectionLabel}>PROGRAMADOS</Text>

        {schedules.map((s) => (
          <View key={s.id} style={[styles.card, { borderLeftColor: s.active ? s.color : '#D3D9E8' }]}>
            <View style={[styles.iconWrap, { backgroundColor: s.color + '22' }]}>
              <Feather name={s.icon} size={18} color={s.color} />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <View style={styles.rowBetween}>
                <Text style={styles.cardTitle}>{s.title}</Text>
                {s.active && (
                  <View style={styles.statusPill}>
                    <Feather name="check" size={10} color={palette.success} />
                    <Text style={styles.statusPillText}> {s.status}</Text>
                  </View>
                )}
              </View>
              <Text style={styles.cardSubtitle}>{s.subtitle}</Text>
              <Text style={styles.cardTime}>{s.time}</Text>
            </View>
            <Switch
              value={s.active}
              onValueChange={() => toggle(s.id)}
              trackColor={{ false: '#D3D9E8', true: s.color }}
              thumbColor="#fff"
            />
          </View>
        ))}

        <TouchableOpacity activeOpacity={0.85} style={styles.newButtonWrap}>
          <LinearGradient
            colors={[palette.agendaPrimary, '#4B2FB0']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.newButton}
          >
            <Feather name="plus" size={16} color="#fff" />
            <Text style={styles.newButtonText}>Novo Agendamento</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.tipBox}>
          <Feather name="zap" size={16} color={palette.agendaPrimary} />
          <Text style={styles.tipText}>
            <Text style={{ fontWeight: '700' }}>Dica inteligente{'\n'}</Text>
            Com o Modo Inteligente ativo, o varal recolhe automaticamente ao detectar chuva — mesmo fora do horário programado.
          </Text>
        </View>

        <View style={{ height: 24 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.background },
  header: {
    paddingTop: 54,
    paddingHorizontal: 20,
    paddingBottom: 26,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  title: { color: '#fff', fontSize: 24, fontWeight: '800' },
  subtitle: { color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 4 },
  progressTrack: {
    height: 5, backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 3, marginTop: 16, overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: '#fff', borderRadius: 3 },
  body: { paddingHorizontal: 18, marginTop: 18 },
  sectionLabel: { color: palette.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 0.5, marginBottom: 10 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.card,
    borderRadius: 16,
    borderLeftWidth: 4,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
  iconWrap: { width: 40, height: 40, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontSize: 14, fontWeight: '700', color: palette.textDark },
  cardSubtitle: { fontSize: 12, color: palette.textMuted, marginTop: 2 },
  cardTime: { fontSize: 12, color: palette.textMuted, marginTop: 2 },
  statusPill: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: palette.success + '1A',
    borderRadius: 10, paddingHorizontal: 6, paddingVertical: 2,
  },
  statusPillText: { fontSize: 10, color: palette.success, fontWeight: '700' },
  newButtonWrap: { marginTop: 6, marginBottom: 16 },
  newButton: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    borderRadius: 16, paddingVertical: 16,
  },
  newButtonText: { color: '#fff', fontWeight: '700', fontSize: 15, marginLeft: 8 },
  tipBox: {
    flexDirection: 'row',
    backgroundColor: palette.agendaPrimary + '14',
    borderRadius: 16,
    padding: 14,
  },
  tipText: { flex: 1, marginLeft: 10, color: palette.textDark, fontSize: 12, lineHeight: 18 },
});