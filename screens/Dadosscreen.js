import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { palette } from '../theme/Colors';
import { weeklyHours, reportSummary, goals, history } from '../data/Mockdata';

const TABS = ['7 dias', '30 dias', 'Mensal'];

export default function DadosScreen() {
  const [activeTab, setActiveTab] = useState('7 dias');
  const maxHours = Math.max(...weeklyHours.map((d) => d.hours), 1);

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={[palette.dadosSecondary, palette.dadosPrimary]} style={styles.header}>
        <Text style={styles.title}>Relatórios</Text>
        <Text style={styles.subtitle}>Últimos 7 dias</Text>
        <View style={styles.rowBottom}>
          <Text style={styles.bigNumber}>{reportSummary.totalHours}h</Text>
          <Text style={styles.bigLabel}>ao ar livre</Text>
          <View style={styles.changePill}>
            <Feather name="trending-up" size={11} color="#fff" />
            <Text style={styles.changeText}> +{reportSummary.changePercent}%</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.tabsRow}>
        {TABS.map((t) => (
          <TouchableOpacity
            key={t}
            style={[styles.tab, activeTab === t && styles.tabActive]}
            onPress={() => setActiveTab(t)}
          >
            <Text style={[styles.tabText, activeTab === t && styles.tabTextActive]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Feather name="sun" size={16} color={palette.warning} />
          <Text style={styles.statNumber}>{reportSummary.daysOpen}</Text>
          <Text style={styles.statLabel}>Dias aberto{'\n'}Últimos 7 dias</Text>
        </View>
        <View style={styles.statCard}>
          <Feather name="droplet" size={16} color="#4C8DF0" />
          <Text style={styles.statNumber}>{reportSummary.autoRetracted}</Text>
          <Text style={styles.statLabel}>Auto-recolhidas{'\n'}Por chuva</Text>
        </View>
        <View style={styles.statCard}>
          <Feather name="activity" size={16} color={palette.dadosPrimary} />
          <Text style={styles.statNumber}>{reportSummary.totalHours}h</Text>
          <Text style={styles.statLabel}>Total de horas{'\n'}Ao ar livre</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.rowSpaceBetween}>
          <Text style={styles.cardTitle}>Horas ao ar livre</Text>
          <View style={styles.changePillLight}>
            <Feather name="trending-up" size={11} color={palette.dadosPrimary} />
            <Text style={styles.changeTextDark}> +{reportSummary.changePercent}%</Text>
          </View>
        </View>
        <Text style={styles.chartSubtitle}>Últimos 7 dias · h/dia</Text>

        <View style={styles.chart}>
          {weeklyHours.map((d) => (
            <View key={d.day} style={styles.barCol}>
              <View style={styles.barTrack}>
                <View
                  style={[
                    styles.barFill,
                    {
                      height: `${(d.hours / maxHours) * 100}%`,
                      backgroundColor: d.rained ? palette.border : '#4C9DF0',
                    },
                  ]}
                />
              </View>
              <Text style={styles.barLabel}>{d.day}</Text>
            </View>
          ))}
        </View>
        <View style={styles.legendRow}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#4C9DF0' }]} />
            <Text style={styles.legendText}>Horas ao ar livre</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: palette.border }]} />
            <Text style={styles.legendText}>Dia chuvoso / inativo</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Metas do período</Text>
        {goals.map((g) => (
          <View key={g.id} style={{ marginTop: 14 }}>
            <View style={styles.rowSpaceBetween}>
              <Text style={styles.goalLabel}>{g.label}</Text>
              <Text style={styles.goalValue}>{g.isPercent ? `${g.value}% / ${g.max}%` : `${g.value} / ${g.max}`}</Text>
            </View>
            <View style={styles.goalTrack}>
              <View
                style={[
                  styles.goalFill,
                  { width: `${(g.value / g.max) * 100}%`, backgroundColor: g.color },
                ]}
              />
            </View>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Histórico recente</Text>
        {history.map((h, idx) => (
          <View key={h.id} style={[styles.historyRow, idx !== history.length - 1 && styles.historyRowBorder]}>
            <View style={[styles.historyIcon, { backgroundColor: h.color + '22' }]}>
              <Feather name={h.icon} size={14} color={h.color} />
            </View>
            <View>
              <Text style={styles.historyTitle}>{h.title}</Text>
              <Text style={styles.historyTime}>{h.time}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.background },
  header: {
    paddingTop: 54,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  title: { color: '#fff', fontSize: 24, fontWeight: '800' },
  subtitle: { color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 4 },
  rowBottom: { flexDirection: 'row', alignItems: 'flex-end', marginTop: 14 },
  bigNumber: { color: '#fff', fontSize: 40, fontWeight: '800' },
  bigLabel: { color: 'rgba(255,255,255,0.85)', fontSize: 14, marginLeft: 8, marginBottom: 6 },
  changePill: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 12, paddingHorizontal: 8, paddingVertical: 3,
    marginLeft: 'auto', marginBottom: 6,
  },
  changeText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  tabsRow: {
    flexDirection: 'row',
    backgroundColor: '#E4E8F1',
    marginHorizontal: 18,
    marginTop: -16,
    borderRadius: 14,
    padding: 4,
  },
  tab: { flex: 1, paddingVertical: 9, borderRadius: 10, alignItems: 'center' },
  tabActive: { backgroundColor: '#fff' },
  tabText: { fontSize: 12, color: palette.textMuted, fontWeight: '600' },
  tabTextActive: { color: palette.dadosPrimary, fontWeight: '700' },
  statsRow: { flexDirection: 'row', paddingHorizontal: 18, marginTop: 16, gap: 10 },
  statCard: {
    flex: 1, backgroundColor: palette.card, borderRadius: 16, padding: 12,
    shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 1,
  },
  statNumber: { fontSize: 18, fontWeight: '800', color: palette.textDark, marginTop: 8 },
  statLabel: { fontSize: 10, color: palette.textMuted, marginTop: 2, lineHeight: 13 },
  card: {
    backgroundColor: palette.card,
    borderRadius: 20,
    marginHorizontal: 18,
    marginTop: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
  cardTitle: { fontSize: 15, fontWeight: '700', color: palette.textDark },
  rowSpaceBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  changePillLight: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: palette.dadosPrimary + '1A',
    borderRadius: 12, paddingHorizontal: 8, paddingVertical: 3,
  },
  changeTextDark: { color: palette.dadosPrimary, fontSize: 11, fontWeight: '700' },
  chartSubtitle: { fontSize: 11, color: palette.textMuted, marginTop: 2 },
  chart: { flexDirection: 'row', justifyContent: 'space-between', height: 110, marginTop: 16, alignItems: 'flex-end' },
  barCol: { alignItems: 'center', flex: 1 },
  barTrack: { width: 18, height: 90, justifyContent: 'flex-end' },
  barFill: { width: '100%', borderRadius: 5, minHeight: 4 },
  barLabel: { fontSize: 10, color: palette.textMuted, marginTop: 6 },
  legendRow: { flexDirection: 'row', marginTop: 14 },
  legendItem: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
  legendDot: { width: 8, height: 8, borderRadius: 4, marginRight: 5 },
  legendText: { fontSize: 10, color: palette.textMuted },
  goalLabel: { fontSize: 12, color: palette.textDark },
  goalValue: { fontSize: 12, color: palette.textMuted, fontWeight: '600' },
  goalTrack: { height: 6, borderRadius: 3, backgroundColor: palette.border, marginTop: 6, overflow: 'hidden' },
  goalFill: { height: '100%', borderRadius: 3 },
  historyRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 11 },
  historyRowBorder: { borderBottomWidth: 1, borderBottomColor: palette.border },
  historyIcon: {
    width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  historyTitle: { fontSize: 13, fontWeight: '600', color: palette.textDark },
  historyTime: { fontSize: 11, color: palette.textMuted, marginTop: 2 },
});