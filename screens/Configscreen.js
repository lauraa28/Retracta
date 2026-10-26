// src/screens/ConfigScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { palette } from '../theme/Colors';
import {
  device,
  motorAlert,
  generalSettings,
  connectionSettings,
  notificationSettings as initialNotifications,
  privacySettings,
  helpItems,
  aboutInfo,
} from "../data/Mockdata";

function SectionLabel({ icon, children, color = palette.textMuted }) {
  return (
    <View style={styles.sectionLabelRow}>
      <Feather name={icon} size={13} color={color} />
      <Text style={styles.sectionLabel}>{children}</Text>
    </View>
  );
}

function ToggleRow({ title, subtitle, value, onValueChange, trackColor = '#1D2333' }) {
  return (
    <View style={styles.toggleRow}>
      <View style={{ flex: 1 }}>
        <Text style={styles.toggleTitle}>{title}</Text>
        <Text style={styles.toggleSubtitle}>{subtitle}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#D3D9E8', true: trackColor }}
        thumbColor="#fff"
      />
    </View>
  );
}

function NavRow({ title, subtitle, rightLabel, onPress }) {
  return (
    <TouchableOpacity style={styles.navRow} onPress={onPress} activeOpacity={0.7}>
      <View style={{ flex: 1 }}>
        <Text style={styles.toggleTitle}>{title}</Text>
        <Text style={styles.toggleSubtitle}>{subtitle}</Text>
      </View>
      {rightLabel && <Text style={styles.navRowRight}>{rightLabel}</Text>}
      <Feather name="chevron-right" size={16} color="#C0C5D4" style={{ marginLeft: 4 }} />
    </TouchableOpacity>
  );
}

export default function ConfigScreen() {
  const [showAlert, setShowAlert] = useState(motorAlert.active);
  const [smartMode, setSmartMode] = useState(generalSettings.smartMode);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [anonymousData, setAnonymousData] = useState(privacySettings.anonymousData);

  const toggleNotification = (id) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, value: !n.value } : n)));
  };

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
              <View
                style={[
                  styles.healthIcon,
                  { backgroundColor: (h.status === 'Normal' ? palette.success : palette.warning) + '1A' },
                ]}
              >
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

        {/* Alerta do motor */}
        {showAlert && (
          <View style={styles.alertBox}>
            <Feather name="alert-circle" size={16} color={palette.danger} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.alertTitle}>{motorAlert.title}</Text>
              <Text style={styles.alertMessage}>{motorAlert.message}</Text>
            </View>
          </View>
        )}

        <TouchableOpacity style={styles.simulateButton} onPress={() => setShowAlert((v) => !v)}>
          <Feather name="alert-triangle" size={14} color={palette.danger} />
          <Text style={styles.simulateButtonText}>Simular alerta do motor</Text>
        </TouchableOpacity>

        {/* GERAL */}
        <SectionLabel icon="sliders">GERAL</SectionLabel>
        <View style={styles.card}>
          <ToggleRow
            title="Modo Inteligente"
            subtitle="Abre e fecha o varal automaticamente com base no clima e nos sensores"
            value={smartMode}
            onValueChange={setSmartMode}
          />
          <View style={styles.rowDivider} />
          <NavRow
            title="Sensibilidade do sensor"
            subtitle="Define quando o sensor de chuva ativa o recolhimento automático"
          />
        </View>

        {/* CONEXÃO */}
        <SectionLabel icon="wifi">CONEXÃO</SectionLabel>
        <View style={styles.card}>
          <View style={styles.wifiRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.toggleTitle}>Rede WiFi</Text>
              <Text style={styles.toggleSubtitle}>
                {connectionSettings.wifiName} · {connectionSettings.wifiDescription}
              </Text>
            </View>
            <Feather name="wifi" size={16} color={palette.success} />
          </View>
          <View style={styles.rowDivider} />
          <NavRow
            title="Delay de retração"
            subtitle={`Tempo que o varal aguarda antes de fechar após detectar chuva. Padrão: 3 segundos`}
            rightLabel={connectionSettings.retractionDelay}
          />
        </View>

        {/* NOTIFICAÇÕES */}
        <SectionLabel icon="bell">NOTIFICAÇÕES</SectionLabel>
        <View style={styles.card}>
          {notifications.map((n, idx) => (
            <React.Fragment key={n.id}>
              <ToggleRow
                title={n.title}
                subtitle={n.subtitle}
                value={n.value}
                onValueChange={() => toggleNotification(n.id)}
              />
              {idx !== notifications.length - 1 && <View style={styles.rowDivider} />}
            </React.Fragment>
          ))}
        </View>

        {/* PRIVACIDADE */}
        <SectionLabel icon="shield">PRIVACIDADE</SectionLabel>
        <View style={styles.card}>
          <ToggleRow
            title="Dados de uso anônimos"
            subtitle="Compartilha estatísticas para melhorar o produto. Nenhum dado pessoal é enviado"
            value={anonymousData}
            onValueChange={setAnonymousData}
          />
          <View style={styles.rowDivider} />
          <NavRow title="Política de privacidade" subtitle="Leia como seus dados são utilizados" />
        </View>

        {/* AJUDA E MANUAL */}
        <SectionLabel icon="book-open">AJUDA E MANUAL</SectionLabel>
        <View style={styles.card}>
          {helpItems.map((item, idx) => (
            <React.Fragment key={item.id}>
              <TouchableOpacity style={styles.helpRow} activeOpacity={0.7}>
                <View style={[styles.helpIcon, { backgroundColor: item.color + '1A' }]}>
                  <Feather name={item.icon} size={16} color={item.color} />
                </View>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={styles.toggleTitle}>{item.title}</Text>
                  <Text style={styles.toggleSubtitle}>{item.subtitle}</Text>
                </View>
                <Feather name="chevron-right" size={16} color="#C0C5D4" />
              </TouchableOpacity>
              {idx !== helpItems.length - 1 && <View style={styles.rowDivider} />}
            </React.Fragment>
          ))}
        </View>

        {/* SOBRE */}
        <SectionLabel icon="info">SOBRE</SectionLabel>
        <View style={styles.card}>
          <View style={styles.aboutRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.toggleTitle}>Versão do aplicativo</Text>
              <Text style={styles.toggleSubtitle}>
                {aboutInfo.appVersion} · {aboutInfo.appVersionDate}
              </Text>
            </View>
            <View style={styles.statusPill}>
              <Text style={styles.statusPillText}>{aboutInfo.appVersionStatus}</Text>
            </View>
          </View>
          <View style={styles.rowDivider} />
          <NavRow title="Versão do firmware" subtitle={`${aboutInfo.firmwareVersion} · ${aboutInfo.firmwareDescription}`} />
          <View style={styles.rowDivider} />
          <View style={styles.aboutRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.toggleTitle}>Uptime do dispositivo</Text>
              <Text style={styles.toggleSubtitle}>{aboutInfo.uptimeDescription}</Text>
            </View>
            <Text style={styles.uptimeValue}>{aboutInfo.uptime}</Text>
          </View>
          <View style={styles.rowDivider} />
          <NavRow title="Termos de uso" subtitle="" />
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
  sectionLabelRow: { flexDirection: 'row', alignItems: 'center', marginTop: 22, marginBottom: 10 },
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
  alertBox: {
    flexDirection: 'row',
    backgroundColor: palette.danger + '14',
    borderRadius: 16,
    padding: 14,
    marginTop: 16,
    borderWidth: 1,
    borderColor: palette.danger + '30',
  },
  alertTitle: { fontSize: 13, fontWeight: '700', color: palette.danger },
  alertMessage: { fontSize: 12, color: palette.danger, marginTop: 2, opacity: 0.85 },
  simulateButton: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: palette.danger + '10',
    borderRadius: 16,
    paddingVertical: 14,
    marginTop: 12,
  },
  simulateButtonText: { color: palette.danger, fontWeight: '700', fontSize: 13, marginLeft: 8 },
  card: {
    backgroundColor: palette.card,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
  toggleRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14 },
  toggleTitle: { fontSize: 14, fontWeight: '700', color: palette.textDark },
  toggleSubtitle: { fontSize: 11.5, color: palette.textMuted, marginTop: 3, lineHeight: 16 },
  navRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14 },
  navRowRight: { fontSize: 13, fontWeight: '700', color: palette.textDark, marginRight: 2 },
  rowDivider: { height: 1, backgroundColor: palette.border },
  wifiRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14 },
  helpRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  helpIcon: { width: 36, height: 36, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  aboutRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14 },
  statusPill: {
    backgroundColor: palette.success + '1A',
    borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5,
  },
  statusPillText: { fontSize: 11, color: palette.success, fontWeight: '700' },
  uptimeValue: { fontSize: 14, fontWeight: '800', color: palette.textDark },
});