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