import { dayPeriods } from '../theme/Colors';

/**
 * Retorna a chave do período do dia com base na hora atual.
 * 05:00–11:59 -> manhã (azul claro)
 * 12:00–17:59 -> tarde (laranja)
 * 18:00–04:59 -> noite (azul escuro)
 */
export function getPeriodKey(date = new Date()) {
  const hour = date.getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'afternoon';
  return 'evening';
}

export function getPeriodTheme(date = new Date()) {
  return dayPeriods[getPeriodKey(date)];
}

// Hook simples: recalcula o período a cada minuto, para a Home
// mudar de cor sozinha se o usuário deixar o app aberto virando o horário.
import { useEffect, useState } from 'react';

export function useDayPeriod() {
  const [period, setPeriod] = useState(getPeriodKey());

  useEffect(() => {
    const id = setInterval(() => {
      setPeriod(getPeriodKey());
    }, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return period;
}