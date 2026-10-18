// Fonte única dos dados pessoais: altere aqui e o site inteiro acompanha.
export const site = {
  name: 'Anderson Farias',
  role: 'Desenvolvedor web · Cibersegurança',
  description:
    'Portfólio de Anderson Farias: desenvolvimento web full-stack com foco em segurança, redes e cibersegurança.',
  email: 'anderson.bfc@hotmail.com',
  github: 'https://github.com/AndersonFariaas',
  linkedin: 'https://www.linkedin.com/in/anderson-farias-8045963b8/',
  locale: 'pt_BR',
} as const;

export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contato', label: 'Contato' },
] as const;

export const skillGroups = [
  {
    title: 'Desenvolvimento web',
    command: 'ls ./web',
    items: [
      'HTML e CSS',
      'JavaScript',
      'TypeScript',
      'Vue 3',
      'Node.js',
      'Tailwind CSS',
      'SQL',
      'Supabase',
    ],
  },
  {
    title: 'Segurança e infraestrutura',
    command: 'ls ./security',
    items: [
      'Cibersegurança',
      'Redes de computadores',
      'Protocolos de comunicação',
      'Segurança de redes',
      'Windows e Linux',
      'Python para automação',
    ],
  },
  {
    title: 'Práticas e ferramentas',
    command: 'ls ./tools',
    items: [
      'Git e GitHub',
      'Cloud computing',
      'UI/UX',
      'Metodologias ágeis',
      'Testes com Vitest',
      'Manutenção de hardware',
    ],
  },
] as const;
