import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, AntDesign } from '@expo/vector-icons';
import AuthWave from '../components/AuthWave';
const AUTH_GRADIENT = ['#5B93F5', '#2E5BC8'];

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.screen}>
      <LinearGradient colors={AUTH_GRADIENT} style={styles.header}>
        <View style={styles.headerTopRow}>
          <View style={styles.headerBrandRow}>
            <View style={styles.smallLogo}>
              <Feather name="users" size={16} color="#fff" />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.brandSmall}>RETRACTA</Text>
              <Text style={styles.brandSubtitle}>Varal Retrátil Inteligente</Text>
            </View>
          </View>
          <View style={styles.securePill}>
            <Text style={styles.securePillText}>Acesso Seguro</Text>
          </View>
        </View>

        <Text style={styles.title}>Bem-vindo de volta</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <View style={styles.waveWrap}>
          <AuthWave />
        </View>
      </LinearGradient>

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
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

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputWrap}>
          <Feather name="lock" size={16} color="#9AA3B8" />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#9AA3B8"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword((v) => !v)}>
            <Feather name={showPassword ? 'eye-off' : 'eye'} size={16} color="#9AA3B8" />
          </TouchableOpacity>
        </View>

        <View style={styles.rowBetween}>
          <View style={styles.rememberRow}>
            <Switch
              value={rememberMe}
              onValueChange={setRememberMe}
              trackColor={{ false: '#D3D9E8', true: AUTH_GRADIENT[1] }}
              thumbColor="#fff"
            />
            <Text style={styles.rememberText}>Lembrar de mim</Text>
          </View>
          <TouchableOpacity onPress={() => navigation?.navigate('ForgotPassword')}>
            <Text style={styles.link}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
  activeOpacity={0.85}
  style={styles.buttonWrap}
  onPress={() => navigation?.replace('MainApp')}
>
  <LinearGradient colors={AUTH_GRADIENT} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.button}>
    <Text style={styles.buttonText}>Entrar</Text>
    <Feather name="arrow-right" size={16} color="#fff" style={{ marginLeft: 8 }} />
  </LinearGradient>
</TouchableOpacity>

        <Text style={styles.orText}>ou continue com</Text>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="google" size={16} color="#EA4335" />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Não tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation?.navigate('Signup')}>
            <Text style={styles.footerLink}>Criar conta</Text>
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
  headerTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerBrandRow: { flexDirection: 'row', alignItems: 'center' },
  smallLogo: {
    width: 34, height: 34, borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.22)', alignItems: 'center', justifyContent: 'center',
  },
  brandSmall: { color: '#fff', fontWeight: '800', fontSize: 14, letterSpacing: 1 },
  brandSubtitle: { color: 'rgba(255,255,255,0.75)', fontSize: 10 },
  securePill: { backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 5 },
  securePillText: { color: '#fff', fontSize: 10, fontWeight: '700' },
  title: { color: '#fff', fontSize: 24, fontWeight: '800', marginTop: 22 },
  subtitle: { color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 4 },
  waveWrap: { position: 'absolute', bottom: -1, left: 0, right: 0 },
  body: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  label: { fontSize: 12, fontWeight: '600', color: '#1A1C29', marginBottom: 6, marginTop: 14 },
  inputWrap: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', borderRadius: 14, paddingHorizontal: 14, height: 50,
    borderWidth: 1, borderColor: '#EAEDF3',
  },
  input: { flex: 1, marginLeft: 10, fontSize: 14, color: '#1A1C29' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 },
  rememberRow: { flexDirection: 'row', alignItems: 'center' },
  rememberText: { fontSize: 12, color: '#7A7F91', marginLeft: 8 },
  link: { fontSize: 12, color: AUTH_GRADIENT[1], fontWeight: '700' },
  buttonWrap: { marginTop: 22 },
  button: { borderRadius: 16, paddingVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  orText: { textAlign: 'center', color: '#9AA3B8', fontSize: 12, marginTop: 18 },
  socialRow: { flexDirection: 'row', marginTop: 14, gap: 10 },
  socialButton: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#fff', borderRadius: 14, paddingVertical: 13,
    borderWidth: 1, borderColor: '#EAEDF3',
  },
  socialText: { marginLeft: 8, fontSize: 13, fontWeight: '600', color: '#1A1C29' },
  footerRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 22 },
  footerText: { fontSize: 13, color: '#7A7F91' },
  footerLink: { fontSize: 13, color: AUTH_GRADIENT[1], fontWeight: '700' },
});