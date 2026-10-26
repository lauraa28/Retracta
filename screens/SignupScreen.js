import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import AuthWave from '../components/AuthWave';
const AUTH_GRADIENT = ['#5B93F5', '#2E5BC8'];
const STEPS = ['Dados', 'Senha', 'Confirmar'];

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={styles.brandSmall}>RETRACTA</Text>
            <Text style={styles.brandSubtitle}>Varal Retrátil Inteligente</Text>
          </View>
          <View style={styles.securePill}>
            <Text style={styles.securePillText}>Novo usuário</Text>
          </View>
        </View>

        <Text style={styles.title}>Criar conta</Text>
        <Text style={styles.subtitle}>Registre-se gratuitamente</Text>

        <View style={styles.stepperRow}>
          {STEPS.map((step, idx) => (
            <React.Fragment key={step}>
              <View style={styles.stepItem}>
                <View style={[styles.stepCircle, idx === 0 && styles.stepCircleActive]}>
                  <Text style={[styles.stepNumber, idx === 0 && styles.stepNumberActive]}>{idx + 1}</Text>
                </View>
                <Text style={[styles.stepLabel, idx === 0 && styles.stepLabelActive]}>{step}</Text>
              </View>
              {idx < STEPS.length - 1 && <View style={styles.stepLine} />}
            </React.Fragment>
          ))}
        </View>

        <View style={styles.waveWrap}>
          <AuthWave />
        </View>
      </LinearGradient>

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Nome completo</Text>
        <View style={styles.inputWrap}>
          <Feather name="user" size={16} color="#9AA3B8" />
          <TextInput style={styles.input} placeholder="João da Silva" placeholderTextColor="#9AA3B8" value={name} onChangeText={setName} />
        </View>

        <Text style={styles.label}>E-mail</Text>
        <View style={styles.inputWrap}>
          <Feather name="mail" size={16} color="#9AA3B8" />
          <TextInput style={styles.input} placeholder="seu@email.com" placeholderTextColor="#9AA3B8" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
        </View>

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputWrap}>
          <Feather name="lock" size={16} color="#9AA3B8" />
          <TextInput style={styles.input} placeholder="Mínimo 8 caracteres" placeholderTextColor="#9AA3B8" secureTextEntry={!showPassword} value={password} onChangeText={setPassword} />
          <TouchableOpacity onPress={() => setShowPassword((v) => !v)}>
            <Feather name={showPassword ? 'eye-off' : 'eye'} size={16} color="#9AA3B8" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirmar senha</Text>
        <View style={styles.inputWrap}>
          <Feather name="lock" size={16} color="#9AA3B8" />
          <TextInput style={styles.input} placeholder="Repita a senha" placeholderTextColor="#9AA3B8" secureTextEntry={!showConfirm} value={confirmPassword} onChangeText={setConfirmPassword} />
          <TouchableOpacity onPress={() => setShowConfirm((v) => !v)}>
            <Feather name={showConfirm ? 'eye-off' : 'eye'} size={16} color="#9AA3B8" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.termsRow} onPress={() => setAcceptedTerms((v) => !v)}>
          <View style={[styles.checkbox, acceptedTerms && styles.checkboxActive]}>
            {acceptedTerms && <Feather name="check" size={11} color="#fff" />}
          </View>
          <Text style={styles.termsText}>
            Ao criar conta, você concorda com os <Text style={styles.termsLink}>Termos de Uso</Text> e{' '}
            <Text style={styles.termsLink}>Política de Privacidade</Text> da Retracta.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
  activeOpacity={0.85}
  style={styles.buttonWrap}
  onPress={() => navigation.replace('LoginScreen')}
>
  <LinearGradient colors={AUTH_GRADIENT} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.button}>
    <Text style={styles.buttonText}>Criar conta</Text>
    <Feather name="user-plus" size={16} color="#fff" style={{ marginLeft: 8 }} />
  </LinearGradient>
</TouchableOpacity>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Já tem uma conta? </Text>
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
  securePill: { backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 5 },
  securePillText: { color: '#fff', fontSize: 10, fontWeight: '700' },
  title: { color: '#fff', fontSize: 24, fontWeight: '800', marginTop: 20 },
  subtitle: { color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 4 },
  stepperRow: { flexDirection: 'row', alignItems: 'center', marginTop: 20 },
  stepItem: { alignItems: 'center' },
  stepCircle: {
    width: 22, height: 22, borderRadius: 11,
    backgroundColor: 'rgba(255,255,255,0.25)', alignItems: 'center', justifyContent: 'center',
  },
  stepCircleActive: { backgroundColor: '#fff' },
  stepNumber: { fontSize: 11, color: '#fff', fontWeight: '700' },
  stepNumberActive: { color: AUTH_GRADIENT[1] },
  stepLabel: { fontSize: 10, color: 'rgba(255,255,255,0.7)', marginTop: 4 },
  stepLabelActive: { color: '#fff', fontWeight: '700' },
  stepLine: { flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.3)', marginHorizontal: 6, marginBottom: 14 },
  waveWrap: { position: 'absolute', bottom: -1, left: 0, right: 0 },
  body: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  label: { fontSize: 12, fontWeight: '600', color: '#1A1C29', marginBottom: 6, marginTop: 12 },
  inputWrap: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', borderRadius: 14, paddingHorizontal: 14, height: 50,
    borderWidth: 1, borderColor: '#EAEDF3',
  },
  input: { flex: 1, marginLeft: 10, fontSize: 14, color: '#1A1C29' },
  termsRow: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 16 },
  checkbox: {
    width: 18, height: 18, borderRadius: 5, borderWidth: 1.5, borderColor: '#D3D9E8',
    marginTop: 1, alignItems: 'center', justifyContent: 'center',
  },
  checkboxActive: { backgroundColor: AUTH_GRADIENT[1], borderColor: AUTH_GRADIENT[1] },
  termsText: { flex: 1, marginLeft: 10, fontSize: 11, color: '#7A7F91', lineHeight: 16 },
  termsLink: { color: AUTH_GRADIENT[1], fontWeight: '700' },
  buttonWrap: { marginTop: 20 },
  button: { borderRadius: 16, paddingVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  footerRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  footerText: { fontSize: 13, color: '#7A7F91' },
  footerLink: { fontSize: 13, color: AUTH_GRADIENT[1], fontWeight: '700' },
});