export const weather = {
  condition: 'Parcialmente nublado',
  temp: 22,
  humidity: 62,
  wind: 14,
  thermalSensation: 27,
  hourly: [
    { hour: '14h', temp: 25, icon: 'sun' },
    { hour: '17h', temp: 22, icon: 'cloud' },
    { hour: '20h', temp: 19, icon: 'cloud-rain' },
    { hour: '22h', temp: 17, icon: 'moon' },
  ],
};

export const clothesPieces = [
  { id: 1, color: '#4C8DF0' },
  { id: 2, color: '#8B6CF0' },
  { id: 3, color: '#F0A93A' },
  { id: 4, color: '#2FBE79' },
  { id: 5, color: '#E8452F' },
];

export const recentActivity = [
  { id: 1, icon: 'check-circle', color: '#2FBE79', title: 'Varal aberto automaticamente', time: 'Hoje · 14:32' },
  { id: 2, icon: 'zap', color: '#F0A93A', title: 'Modo Inteligente ativado', time: 'Hoje · 08:15' },
  { id: 3, icon: 'cloud-rain', color: '#4C8DF0', title: 'Recolhido — chuva detectada', time: 'Ontem · 19:10' },
];

export const schedules = [
  {
    id: 1,
    title: 'Abertura matinal',
    subtitle: 'Todo dia útil',
    time: '07:00 · Abrir varal',
    icon: 'sun',
    color: '#F0A93A',
    status: 'Ativo',
    active: true,
  },
  {
    id: 2,
    title: 'Recolher à noite',
    subtitle: 'Todos os dias',
    time: '19:30 · Recolher varal',
    icon: 'clock',
    color: '#4C8DF0',
    status: 'Ativo',
    active: true,
  },
  {
    id: 3,
    title: 'Proteção contra chuva',
    subtitle: 'Sensor de chuva',
    time: 'Automático · Prioridade alta',
    icon: 'cloud-rain',
    color: '#6C4CE0',
    status: 'Ativo',
    active: true,
  },
  {
    id: 4,
    title: 'Final de semana',
    subtitle: 'Sáb e Dom',
    time: '08:00 · Abrir varal',
    icon: 'calendar',
    color: '#7A7F91',
    status: 'Inativo',
    active: false,
  },
];

export const weeklyHours = [
  { day: 'Seg', hours: 7.5, rained: false },
  { day: 'Ter', hours: 8.5, rained: false },
  { day: 'Qua', hours: 4, rained: false },
  { day: 'Qui', hours: 0, rained: true },
  { day: 'Sex', hours: 6.5, rained: false },
  { day: 'Sáb', hours: 9.5, rained: false },
  { day: 'Dom', hours: 5, rained: false },
];

export const reportSummary = {
  totalHours: 51,
  changePercent: 11,
  daysOpen: 6,
  autoRetracted: 2,
};

export const goals = [
  { id: 1, label: 'Dias com sol aproveitado', value: 6, max: 7, color: '#F0A93A' },
  { id: 2, label: 'Ações automáticas executadas', value: 2, max: 5, color: '#6C4CE0' },
  { id: 3, label: 'Eficiência de uso', value: 78, max: 100, color: '#2FBE79', isPercent: true },
];

export const history = [
  { id: 1, icon: 'check-circle', color: '#2FBE79', title: 'Varal aberto automaticamente', time: 'Hoje · 14:32' },
  { id: 2, icon: 'zap', color: '#F0A93A', title: 'Modo inteligente ativado', time: 'Hoje · 08:15' },
  { id: 3, icon: 'clock', color: '#4C8DF0', title: 'Recolhido conforme horário', time: 'Ontem · 19:45' },
  { id: 4, icon: 'cloud-rain', color: '#7A7F91', title: 'Chuva detectada — recolhido', time: 'Ontem · 18:22' },
  { id: 5, icon: 'sun', color: '#F0A93A', title: 'Abertura matinal automática', time: 'Seg · 08:00' },
];

export const device = {
  name: 'Varal Retractável Pro',
  id: 'RTR-4821-PRO',
  firmware: 'Retracta Pro · v2.1.0',
  connection: 'Conectado · WiFi forte',
  uptime: '99,8%',
  cycles: 1240,
  motorStatus: 'Ótimo',
  health: [
    { id: 1, label: 'Motor', value: '94%', sub: 'Saúde estimada', status: 'Normal', icon: 'zap' },
    { id: 2, label: 'Ativo', value: 'Ativo', sub: 'Sensor chuva · Funcionando bem', status: 'Normal', icon: 'activity' },
    { id: 3, label: '3,2 anos', value: '3,2 anos', sub: 'Vida útil · Estimativa', status: 'Normal', icon: 'shield' },
    { id: 4, label: '45 dias', value: '45 dias', sub: 'Manutenção · Próxima preventiva', status: 'Atenção', icon: 'tool' },
  ],
  lastSync: 'Há 2 min',
};
export const motorAlert = {
  active: true,
  title: 'Alerta: motor com esforço elevado',
  message: 'Verifique se há obstrução no trilho do varal',
};

export const generalSettings = {
  smartMode: true,
  sensorSensitivity: 'Média',
};

export const connectionSettings = {
  wifiName: 'Casa_2.4G',
  wifiDescription: 'O dispositivo usa essa rede para se comunicar com o aplicativo',
  signalStrength: 4, // de 1 a 5 barras
  retractionDelay: '3s',
};

export const notificationSettings = [
  {
    id: 1,
    title: 'Alerta de chuva',
    subtitle: 'Avisa quando o sensor detecta chuva e o varal for recolhido automaticamente',
    value: true,
  },
  {
    id: 2,
    title: 'Agendamentos',
    subtitle: 'Confirma cada ação programada antes de executar',
    value: true,
  },
  {
    id: 3,
    title: 'Mudança de status',
    subtitle: 'Notifica toda vez que o varal abre ou fecha',
    value: false,
  },
  {
    id: 4,
    title: 'Manutenção preventiva',
    subtitle: 'Lembrete quando a próxima revisão estiver próxima',
    value: true,
  },
];

export const privacySettings = {
  anonymousData: true,
};

export const helpItems = [
  { id: 1, icon: 'download', color: '#4C8DF0', title: 'Manual de instalação', subtitle: 'Como instalar o varal na parede' },
  { id: 2, icon: 'tool', color: '#F0A93A', title: 'Manual de montagem', subtitle: 'Passo a passo de montagem' },
  { id: 3, icon: 'file-text', color: '#2FBE79', title: 'Manual de manutenção', subtitle: 'Cuidados, limpeza e conservação' },
  { id: 4, icon: 'help-circle', color: '#6C4CE0', title: 'Perguntas frequentes', subtitle: 'FAQ com as dúvidas mais comuns' },
  { id: 5, icon: 'alert-circle', color: '#E8452F', title: 'Solução de problemas', subtitle: 'Diagnóstico de erros e falhas' },
  { id: 6, icon: 'message-circle', color: '#1FB88C', title: 'Contato com suporte', subtitle: 'Fale conosco — seg a sex, 8h–18h' },
];

export const aboutInfo = {
  appVersion: '2.1.0',
  appVersionDate: 'Atualizado em julho de 2025',
  appVersionStatus: 'Atual',
  firmwareVersion: 'RTR-FW-1.4.2',
  firmwareDescription: 'Software interno que controla o motor e os sensores do dispositivo',
  uptime: '99,8%',
  uptimeDescription: 'Tempo total em que o dispositivo ficou ligado e operando corretamente',
};