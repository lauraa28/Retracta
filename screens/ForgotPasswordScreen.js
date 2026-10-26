import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import AuthWave from '../components/AuthWave';

const AUTH_GRADIENT = ['#5B93F5', '#2E5BC8'];

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <View style={styles.screen}>
      <LinearGradient colors={AUTH_GRADIENT} style={styles.header}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
            <Feather name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>
          <View style={styles.smallLogo}>
            <Feather name="users" size={16} color="#fff" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.brandSmall}>RETRACTA</Text>
            <Text style={styles.brandSubtitle}>Varal Retrátil Inteligente</Text>
          </View>
        </View>

        <Text style={styles.title}>Recuperar senha</Text>
        <Text style={styles.subtitle}>Enviaremos um link de recuperação para o seu e-mail</Text>

        <View style={styles.waveWrap}>
          <AuthWave />
        </View>
      </LinearGradient>

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        {!sent ? (
          <>
            <Text style={styles.label}>E-mail</Text>
            <View style={styles.inputWrap}>
              <Feather name="mail" size={16} color="#9AA3B8" />
              <TextInput
                style={styles.input}
                placeholder="seu@email.com"
                placeholderTextColor="#9AA3B8"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <TouchableOpacity activeOpacity={0.85} style={styles.buttonWrap} onPress={() => setSent(true)}>
              <LinearGradient colors={AUTH_GRADIENT} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.button}>
                <Text style={styles.buttonText}>Enviar link de recuperação</Text>
                <Feather name="send" size={16} color="#fff" style={{ marginLeft: 8 }} />
              </LinearGradient>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.successBox}>
            <View style={styles.successIcon}>
              <Feather name="check" size={22} color="#fff" />
            </View>
            <Text style={styles.successTitle}>E-mail enviado!</Text>
            <Text style={styles.successText}>
              Verifique sua caixa de entrada ({email || 'seu e-mail'}) e siga o link para redefinir sua senha.
            </Text>
          </View>
        )}

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Lembrou a senha? </Text>
          <TouchableOpacity onPress={() => navigation?.navigate('Login')}>
            <Text style={styles.footerLink}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F3F5FA' },
  header: { paddingTop: 54, paddingHorizontal: 20, paddingBottom: 30 },
  headerTopRow: { flexDirection: 'row', alignItems: 'center' },
  backButton: {
    width: 30, height: 30, borderRadius: 15, backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center', justifyContent: 'center', marginRight: 10,
  },
  smallLogo: {
    width: 34, height: 34, borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.22)', alignItems: 'center', justifyContent: 'center',
  },
  brandSmall: { color: '#fff', fontWeight: '800', fontSize: 14, letterSpacing: 1 },
  brandSubtitle: { color: 'rgba(255,255,255,0.75)', fontSize: 10 },
  title: { color: '#fff', fontSize: 24, fontWeight: '800', marginTop: 20 },
  subtitle: { color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 4, lineHeight: 18 },
  waveWrap: { position: 'absolute', bottom: -1, left: 0, right: 0 },
  body: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  label: { fontSize: 12, fontWeight: '600', color: '#1A1C29', marginBottom: 6, marginTop: 12 },
  inputWrap: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', borderRadius: 14, paddingHorizontal: 14, height: 50,
    borderWidth: 1, borderColor: '#EAEDF3',
  },
  input: { flex: 1, marginLeft: 10, fontSize: 14, color: '#1A1C29' },
  buttonWrap: { marginTop: 20 },
  button: { borderRadius: 16, paddingVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  successBox: { alignItems: 'center', paddingVertical: 30 },
  successIcon: {
    width: 56, height: 56, borderRadius: 28, backgroundColor: '#2FBE79',
    alignItems: 'center', justifyContent: 'center', marginBottom: 16,
  },
  successTitle: { fontSize: 18, fontWeight: '800', color: '#1A1C29' },
  successText: { fontSize: 13, color: '#7A7F91', textAlign: 'center', marginTop: 8, paddingHorizontal: 20, lineHeight: 19 },
  footerRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  footerText: { fontSize: 13, color: '#7A7F91' },
  footerLink: { fontSize: 13, color: AUTH_GRADIENT[1], fontWeight: '700' },
});