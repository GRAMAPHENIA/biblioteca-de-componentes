export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  rating: number;
  tags: string[];
  features: string[];
  duration: string;
  category: 'consultoria' | 'desarrollo' | 'diseno' | 'marketing';
}

export const services: Service[] = [
  {
    id: 'consultoria-estrategica',
    name: 'Consultoría Estratégica Premium',
    description: 'Asesoramiento estratégico personalizado para optimizar procesos empresariales y maximizar resultados. Nuestro equipo de expertos analiza tu negocio en profundidad y diseña soluciones a medida.',
    price: 2999,
    currency: 'USD',
    imageUrl: '/services/consultoria-estrategica.jpg',
    rating: 4.9,
    tags: ['Estrategia', 'Consultoría', 'Premium', 'Business Intelligence'],
    features: [
      'Análisis completo del negocio',
      'Plan estratégico personalizado',
      'Seguimiento trimestral',
      'Soporte 24/7',
      'Reportes ejecutivos mensuales',
      'Acceso a herramientas exclusivas'
    ],
    duration: '3 meses',
    category: 'consultoria'
  },
  {
    id: 'desarrollo-web-fullstack',
    name: 'Desarrollo Web Full-Stack',
    description: 'Creación de aplicaciones web modernas con tecnologías de vanguardia y diseño responsivo. Desarrollamos soluciones completas desde el backend hasta la interfaz de usuario.',
    price: 4999,
    currency: 'USD',
    imageUrl: '/services/desarrollo-fullstack.jpg',
    rating: 4.8,
    tags: ['Desarrollo', 'Web', 'Full-Stack', 'React', 'Node.js'],
    features: [
      'Diseño responsivo',
      'Optimización SEO',
      'Integración de APIs',
      'Mantenimiento incluido 6 meses',
      'Código fuente completo',
      'Documentación técnica'
    ],
    duration: '6 semanas',
    category: 'desarrollo'
  },
  {
    id: 'branding-corporativo',
    name: 'Branding Corporativo Completo',
    description: 'Identidad visual completa incluyendo logo, paleta de colores, tipografía y manual de marca. Creamos una presencia de marca coherente y profesional.',
    price: 1999,
    currency: 'USD',
    imageUrl: '/services/branding-corporativo.jpg',
    rating: 4.9,
    tags: ['Branding', 'Diseño', 'Identidad', 'Logo', 'Manual de Marca'],
    features: [
      'Logo profesional',
      'Manual de marca completo',
      'Paleta de colores',
      'Tipografía corporativa',
      'Plantillas para redes sociales',
      'Guía de aplicaciones'
    ],
    duration: '4 semanas',
    category: 'diseno'
  },
  {
    id: 'marketing-digital-360',
    name: 'Marketing Digital 360°',
    description: 'Estrategia integral de marketing digital con presencia en todas las plataformas relevantes. Aumentamos tu visibilidad y conversiones de manera sostenible.',
    price: 3499,
    currency: 'USD',
    imageUrl: '/services/marketing-digital.jpg',
    rating: 4.7,
    tags: ['Marketing', 'Digital', '360°', 'SEO', 'SEM', 'Social Media'],
    features: [
      'SEO y SEM',
      'Redes sociales',
      'Email marketing',
      'Analíticas avanzadas',
      'Reportes mensuales',
      'Optimización continua'
    ],
    duration: 'Mensual',
    category: 'marketing'
  },
  {
    id: 'auditoria-seguridad',
    name: 'Auditoría de Seguridad TI',
    description: 'Análisis completo de vulnerabilidades y recomendaciones de seguridad para sistemas empresariales. Protege tu infraestructura con nuestras auditorías especializadas.',
    price: 1599,
    currency: 'USD',
    imageUrl: '/services/auditoria-seguridad.jpg',
    rating: 5.0,
    tags: ['Seguridad', 'Auditoría', 'TI', 'Ciberseguridad', 'Compliance'],
    features: [
      'Análisis de vulnerabilidades',
      'Recomendaciones detalladas',
      'Plan de mitigación',
      'Certificación incluida',
      'Seguimiento post-auditoría',
      'Soporte técnico prioritario'
    ],
    duration: '2 semanas',
    category: 'consultoria'
  },
  {
    id: 'ui-ux-design-system',
    name: 'Sistema de Diseño UI/UX',
    description: 'Creación de un sistema de diseño completo y escalable para productos digitales. Establecemos estándares de diseño que mejoran la experiencia del usuario.',
    price: 2799,
    currency: 'USD',
    imageUrl: '/services/ui-ux-design.jpg',
    rating: 4.8,
    tags: ['UI/UX', 'Design System', 'Escalabilidad', 'Componentes', 'Prototipos'],
    features: [
      'Componentes reutilizables',
      'Guías de estilo',
      'Prototipos interactivos',
      'Documentación completa',
      'Sistema de tokens',
      'Mantenimiento evolutivo'
    ],
    duration: '5 semanas',
    category: 'diseno'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return services.filter(service => service.category === category);
};

export const searchServices = (query: string): Service[] => {
  const lowercaseQuery = query.toLowerCase();
  return services.filter(service =>
    service.name.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getFeaturedServices = (limit: number = 3): Service[] => {
  return services
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};