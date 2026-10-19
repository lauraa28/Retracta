// Paleta baseada no protótipo Figma do Retracta.
// Cada período do dia tem seu próprio degradê para a tela Início.

export const dayPeriods = {
  morning: {
    label: 'manha',
    gradient: ['#5FA8E8', '#3F7FD1'], // azul claro
  },
  afternoon: {
  
  
  
  
  
    label: 'tarde',
    gradient: ['#FF9A3D', '#E8452F'], // laranja -> vermelho
  },
  evening: {
    label: 'noite',
    gradient: ['#1B2A55', '#0D1633'], // azul escuro
  },
};

export const palette = {
  agendaPrimary: '#6C4CE0', // roxo (tela Agenda)
  agendaSecondary: '#8B6CF0',
  dadosPrimary: '#1FB88C', // verde (tela Dados/Relatórios)
  dadosSecondary: '#3FD9A8',
  configDark: '#1D2333', // header escuro da tela Config
  background: '#F3F5FA',
  card: '#FFFFFF',
  textDark: '#1A1C29',
  textMuted: '#7A7F91',
  success: '#2FBE79',
  warning: '#F0A93A',
  danger: '#E8452F',
  border: '#EAEDF3',
};