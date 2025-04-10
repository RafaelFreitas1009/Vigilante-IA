
export interface LeaveData {
  month: string;
  count: number;
  icdCode: string;
  description: string;
  isAnomaly: boolean;
}

export interface DismissalData {
  month: string;
  total: number;
  healthRelated: number;
  isAnomaly: boolean;
}

export interface ExamData {
  id: string;
  employee: string;
  role: string;
  examType: string;
  expirationDate: string;
  daysLeft: number;
  status: 'critical' | 'warning' | 'normal';
}

export interface StatData {
  title: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
}

export const leaveData: LeaveData[] = [
  { month: 'Jan', count: 12, icdCode: 'M54', description: 'Dorsalgia', isAnomaly: false },
  { month: 'Fev', count: 15, icdCode: 'M54', description: 'Dorsalgia', isAnomaly: false },
  { month: 'Mar', count: 18, icdCode: 'M54', description: 'Dorsalgia', isAnomaly: false },
  { month: 'Abr', count: 20, icdCode: 'M54', description: 'Dorsalgia', isAnomaly: false },
  { month: 'Mai', count: 24, icdCode: 'M54', description: 'Dorsalgia', isAnomaly: false },
  { month: 'Jun', count: 47, icdCode: 'M54', description: 'Dorsalgia', isAnomaly: true },
  { month: 'Jul', count: 22, icdCode: 'M54', description: 'Dorsalgia', isAnomaly: false },
];

export const dismissalData: DismissalData[] = [
  { month: 'Jan', total: 8, healthRelated: 2, isAnomaly: false },
  { month: 'Fev', total: 6, healthRelated: 1, isAnomaly: false },
  { month: 'Mar', total: 9, healthRelated: 2, isAnomaly: false },
  { month: 'Abr', total: 15, healthRelated: 9, isAnomaly: true },
  { month: 'Mai', total: 7, healthRelated: 2, isAnomaly: false },
  { month: 'Jun', total: 10, healthRelated: 3, isAnomaly: false },
  { month: 'Jul', total: 5, healthRelated: 1, isAnomaly: false },
];

export const examsData: ExamData[] = [
  { id: '1', employee: 'Carlos Silva', role: 'Operador de Máquina', examType: 'Audiometria', expirationDate: '2024-05-01', daysLeft: 5, status: 'critical' },
  { id: '2', employee: 'Ana Oliveira', role: 'Técnica de Laboratório', examType: 'Espirometria', expirationDate: '2024-05-10', daysLeft: 14, status: 'warning' },
  { id: '3', employee: 'João Santos', role: 'Soldador', examType: 'Raio-X Tórax', expirationDate: '2024-04-29', daysLeft: 3, status: 'critical' },
  { id: '4', employee: 'Mariana Costa', role: 'Química Industrial', examType: 'Toxicológico', expirationDate: '2024-05-20', daysLeft: 24, status: 'normal' },
  { id: '5', employee: 'Pedro Almeida', role: 'Operador de Empilhadeira', examType: 'Acuidade Visual', expirationDate: '2024-05-08', daysLeft: 12, status: 'warning' },
  { id: '6', employee: 'Juliana Lima', role: 'Auxiliar de Produção', examType: 'ASO Periódico', expirationDate: '2024-04-28', daysLeft: 2, status: 'critical' },
];

export const statsData: StatData[] = [
  { title: 'Atestados Médicos (Mês)', value: 87, change: 12, changeType: 'increase' },
  { title: 'Dias de Afastamento', value: 215, change: 8, changeType: 'increase' },
  { title: 'Exames Vencendo', value: 14, change: 3, changeType: 'increase' },
  { title: 'Anomalias Detectadas', value: 2, change: 1, changeType: 'increase' },
];

export const topICDCodes = [
  { code: 'M54', description: 'Dorsalgia', count: 47, percentage: 32 },
  { code: 'J11', description: 'Influenza', count: 22, percentage: 15 },
  { code: 'R51', description: 'Cefaleia', count: 18, percentage: 12 },
  { code: 'K29', description: 'Gastrite', count: 12, percentage: 8 },
  { code: 'F41', description: 'Transtornos de ansiedade', count: 10, percentage: 7 },
];
