export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  location: string;
  email: string;
  phone: string;
  website: string;
  social: {
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface CompanyStats {
  clients: number;
  projects: number;
  experience: number;
  satisfaction: number;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const companyInfo: CompanyInfo = {
  name: 'Transaesthetic Solutions',
  tagline: 'Transformamos ideas en experiencias digitales excepcionales',
  description: `Somos una empresa líder en consultoría tecnológica y desarrollo de software,
  especializada en crear soluciones innovadoras que impulsan el crecimiento empresarial.
  Con más de 8 años de experiencia, hemos ayudado a más de 200 empresas a digitalizar
  sus procesos y alcanzar sus objetivos estratégicos.`,
  founded: 2016,
  location: 'Buenos Aires, Argentina',
  email: 'contacto@transaesthetic.com',
  phone: '+54 11 5555-0123',
  website: 'https://transaesthetic.com',
  social: {
    linkedin: 'https://linkedin.com/company/transaesthetic',
    twitter: 'https://twitter.com/transaesthetic',
    instagram: 'https://instagram.com/transaesthetic',
    facebook: 'https://facebook.com/transaesthetic'
  }
};

export const companyStats: CompanyStats = {
  clients: 200,
  projects: 500,
  experience: 8,
  satisfaction: 98
};

export const companyValues: CompanyValue[] = [
  {
    id: 'innovation',
    title: 'Innovación Constante',
    description: 'Nos mantenemos a la vanguardia de la tecnología para ofrecer soluciones de última generación.',
    icon: 'lightbulb'
  },
  {
    id: 'quality',
    title: 'Calidad Superior',
    description: 'Cada proyecto se realiza con los más altos estándares de calidad y atención al detalle.',
    icon: 'award'
  },
  {
    id: 'collaboration',
    title: 'Colaboración Efectiva',
    description: 'Trabajamos estrechamente con nuestros clientes como socios estratégicos.',
    icon: 'users'
  },
  {
    id: 'results',
    title: 'Resultados Medibles',
    description: 'Nos enfocamos en generar impacto real y medible en el negocio de nuestros clientes.',
    icon: 'target'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'ceo',
    name: 'María González',
    position: 'CEO & Fundadora',
    bio: 'Con más de 15 años de experiencia en tecnología y negocios, María lidera la visión estratégica de Transaesthetic.',
    imageUrl: '/team/maria-gonzalez.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/mariag',
      twitter: 'https://twitter.com/mariag'
    }
  },
  {
    id: 'cto',
    name: 'Carlos Rodríguez',
    position: 'CTO & Director Técnico',
    bio: 'Experto en arquitecturas escalables y tecnologías emergentes, Carlos dirige nuestro equipo de desarrollo.',
    imageUrl: '/team/carlos-rodriguez.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/carlosr'
    }
  },
  {
    id: 'design-lead',
    name: 'Ana Martínez',
    position: 'Directora de Diseño',
    bio: 'Especialista en UX/UI con pasión por crear experiencias digitales intuitivas y atractivas.',
    imageUrl: '/team/ana-martinez.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/anam'
    }
  },
  {
    id: 'marketing-lead',
    name: 'Diego López',
    position: 'Director de Marketing',
    bio: 'Estratega digital con experiencia en growth marketing y posicionamiento de marca.',
    imageUrl: '/team/diego-lopez.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/diegol',
      twitter: 'https://twitter.com/diegol'
    }
  }
];

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

export const getYearsOfExperience = (): number => {
  return getCurrentYear() - companyInfo.founded;
};