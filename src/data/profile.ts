// Dados de carreira extraídos do LinkedIn (out. 2026). Datas em 'AAAA-MM'.
import { siCisco, siFortinet, siUdemy } from 'simple-icons';
import { tech, type Tech } from './tech';

export const linkedinCertificationsUrl =
  'https://www.linkedin.com/in/anderson-farias-8045963b8/details/certifications/';

export const location = 'Niterói, RJ';

export const languages = ['Português (nativo)', 'Inglês (básico a intermediário)'];

export interface Experience {
  role: string;
  company: string;
  start: string;
  end?: string;
  description?: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Fiscal de prevenção',
    company: 'C&A Brasil',
    start: '2025-06',
    tags: ['Prevenção de perdas', 'Segurança física'],
  },
  {
    role: 'Consultor de vendas Fashiontronics',
    company: 'C&A Brasil',
    start: '2024-01',
    end: '2025-05',
    tags: ['Vendas de eletrônicos', 'Varejo'],
  },
  {
    role: 'Técnico em manutenção de computadores',
    company: 'CyberWare · Autônomo',
    start: '2012-03',
    end: '2021-01',
    description:
      'Manutenção de desktops e notebooks, troca de periféricos e componentes de hardware, gerenciamento de softwares e sistemas operacionais Windows e Linux. Manutenção de pequenas redes domésticas e dispositivos de rede.',
    tags: ['Hardware', 'Windows e Linux', 'Redes'],
  },
];

export interface Education {
  course: string;
  institution: string;
  start: string;
  end?: string;
  description: string;
}

export const education: Education[] = [
  {
    course: 'Técnico em Desenvolvimento de Sistemas',
    institution: 'Firjan SENAI Maracanã',
    start: '2026-08',
    description:
      'Desenvolver e programar sistemas seguindo normas e padrões de qualidade, usabilidade, integridade e segurança da informação.',
  },
  {
    course: 'Qualificação profissional em Redes de Computadores',
    institution: 'IFRJ · Instituto Federal do Rio de Janeiro',
    start: '2019-02',
    end: '2019-06',
    description:
      'Redes SOHO, roteadores sem fio, IPv4 e IPv6, DHCP, Ethernet, segurança básica de redes, padrões e protocolos.',
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  /** Link público de verificação (Credly). */
  verifyUrl?: string;
  featured?: boolean;
}

const issuerIcons: Record<string, Tech> = {
  'Cisco Networking Academy': tech(siCisco, 'Cisco'),
  Fortinet: tech(siFortinet),
  Udemy: tech(siUdemy),
};

export function issuerIcon(issuer: string): Tech | undefined {
  return issuerIcons[issuer];
}

export const certifications: Certification[] = [
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2020-08',
    verifyUrl: 'https://www.credly.com/badges/24fd9683-bdf1-413a-a67c-7e9398eeb4ec',
    featured: true,
  },
  {
    title: 'CCNAv7: Introdução às Redes',
    issuer: 'Cisco Networking Academy',
    date: '2021-06',
    verifyUrl: 'https://www.credly.com/badges/10b8599e-2398-4fad-8001-812c7fb5325d',
    featured: true,
  },
  {
    title: 'Segurança da Rede (Network Security)',
    issuer: 'Cisco Networking Academy',
    date: '2021-06',
    verifyUrl: 'https://www.credly.com/badges/ec11adda-1771-4e5c-874a-f34d506dda5c',
    featured: true,
  },
  {
    title: 'Fundamentos do Hardware do Computador',
    issuer: 'Cisco Networking Academy',
    date: '2026-04',
    verifyUrl: 'https://www.credly.com/badges/129f493b-47fe-4b8f-92da-fe24b7eb35cc',
    featured: true,
  },
  {
    title: 'Hackers do Bem: Curso Básico em Cibersegurança',
    issuer: 'RNP',
    date: '2026-06',
    featured: true,
  },
  {
    title: 'NSE 2 Network Security Associate',
    issuer: 'Fortinet',
    date: '2021-10',
    featured: true,
  },
  {
    title: 'Hacker Ético Associado',
    issuer: 'IBSEC · Instituto Brasileiro de Cibersegurança',
    date: '2022-06',
    featured: true,
  },
  {
    title: 'Operationalizing MITRE ATT&CK for SOCs',
    issuer: 'Purple Academy',
    date: '2021-07',
    featured: true,
  },
  {
    title: 'DevSecOps: Introdução ao Desenvolvimento Seguro',
    issuer: 'UNICIVE',
    date: '2021-08',
    featured: true,
  },
  {
    title: 'Sensibilização para a Segurança Digital',
    issuer: 'Cisco Networking Academy',
    date: '2026-10',
  },
  { title: 'Introdução ao Git e GitHub', issuer: 'Fundação Getulio Vargas', date: '2026-09' },
  {
    title: 'Hackers do Bem: Curso de Nivelamento em Cibersegurança',
    issuer: 'RNP',
    date: '2026-05',
  },
  { title: 'Fundamentos de IA para Cibersegurança', issuer: 'TIexames', date: '2026-04' },
  {
    title: 'Boas práticas de Cibersegurança (Cybersecurity Awareness)',
    issuer: 'IBSEC · Instituto Brasileiro de Cibersegurança',
    date: '2022-06',
  },
  {
    title: 'Fundamentos de Informática',
    issuer: 'IBSEC · Instituto Brasileiro de Cibersegurança',
    date: '2022-02',
  },
  { title: 'Cisco Networking Security', issuer: 'SENAI/SC', date: '2021-11' },
  {
    title: 'Análise, Observação e Detecção de Comportamentos Suspeitos',
    issuer: 'Academia Nacional de Polícia',
    date: '2021-10',
  },
  { title: 'A Nova Geração em Pentest Profissional', issuer: 'Desec Security', date: '2021-10' },
  { title: 'Cisco CCNA 1: Introdução às Redes', issuer: 'SENAI/SC', date: '2021-09' },
  { title: 'NSE 1 Network Security Associate', issuer: 'Fortinet', date: '2021-06' },
  {
    title: 'Segurança da Informação: conceitos para atuar nessa área',
    issuer: 'Udemy',
    date: '2021-06',
  },
  { title: 'Linux Fundamentals', issuer: '4Linux', date: '2021-06' },
  { title: 'Auditoria de Logs e Autenticação Linux', issuer: '4Linux', date: '2021-06' },
  { title: 'Scrum Foundation Professional Certificate', issuer: 'CertiProf', date: '2021-06' },
  {
    title: 'CiberHigiene',
    issuer: 'CNCS · Centro Nacional de Cibersegurança (Portugal)',
    date: '2021-05',
  },
  { title: 'Shell Script: Manipulando Arquivos', issuer: 'DIO', date: '2021-05' },
  { title: 'Linux: Introdução ao Sistema Operacional', issuer: 'DIO', date: '2021-05' },
  { title: 'NDG Linux Unhatched', issuer: 'Cisco Networking Academy', date: '2021-04' },
  { title: 'Proteção de Dados', issuer: 'Fundação Getulio Vargas', date: '2021-01' },
  { title: 'Segurança Digital', issuer: 'Fundação Getulio Vargas', date: '2021-01' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', date: '2020-04' },
  { title: 'Networking Essentials', issuer: 'Cisco Networking Academy', date: '2019-08' },
  { title: 'Qualificação profissional em Redes de Computadores', issuer: 'IFRJ', date: '2019-06' },
  { title: 'Segurança em Tecnologia da Informação', issuer: 'Fundação Bradesco', date: '2018-12' },
  {
    title: 'Certificação Digital e Segurança da Informação',
    issuer: 'Unieducar',
    date: '2018-12',
  },
  { title: 'Segurança da Informação', issuer: 'Universidade de Brasília', date: '2018-09' },
  {
    title: 'Sistemas Operacionais: Conceitos Básicos',
    issuer: 'Fundação Bradesco',
    date: '2018-10',
  },
  { title: 'Fundamentos de TI: Hardware e Software', issuer: 'Fundação Bradesco', date: '2018-10' },
  { title: 'HTML5: Introdução ao Front-end', issuer: 'TIM Brasil', date: '2018-05' },
  { title: 'HTML Fundamentals', issuer: 'Sololearn', date: '2017-04' },
];

const monthFormatter = new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric' });

/** '2021-06' → 'jun. de 2021' */
export function formatMonth(value: string): string {
  const [year, month] = value.split('-').map(Number);
  return monthFormatter.format(new Date(Date.UTC(year, month - 1, 15)));
}

export function formatPeriod(start: string, end?: string): string {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : 'atual'}`;
}

/** Anos completos entre duas datas 'AAAA-MM' (usado para "8+ anos"). */
export function fullYears(start: string, end: string): number {
  const [sy, sm] = start.split('-').map(Number);
  const [ey, em] = end.split('-').map(Number);
  return Math.floor((ey * 12 + em - (sy * 12 + sm)) / 12);
}
