export interface Testimonial {
  id: string;
  clientName: string;
  clientCompany: string;
  clientPosition: string;
  content: string;
  rating: number;
  serviceUsed: string;
  projectDate: string;
  clientImageUrl?: string;
  companyLogoUrl?: string;
  results?: {
    metric: string;
    value: string;
    improvement: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  technologies: string[];
  duration: string;
  testimonial: string;
  featuredImageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    clientName: 'Roberto Silva',
    clientCompany: 'TechCorp Argentina',
    clientPosition: 'Director de Tecnología',
    content: 'Transaesthetic transformó completamente nuestra presencia digital. El equipo no solo entregó un producto excepcional, sino que también nos guió en cada paso del proceso. Su consultoría estratégica nos ayudó a alinear la tecnología con nuestros objetivos de negocio.',
    rating: 5,
    serviceUsed: 'Consultoría Estratégica Premium + Desarrollo Web Full-Stack',
    projectDate: '2024-03-15',
    results: [
      {
        metric: 'Tiempo de carga',
        value: '0.8s',
        improvement: '85% más rápido'
      },
      {
        metric: 'Conversiones',
        value: '+150%',
        improvement: '150% de aumento'
      }
    ]
  },
  {
    id: 'testimonial-2',
    clientName: 'Carolina Mendoza',
    clientCompany: 'Fashion Boutique Online',
    clientPosition: 'CEO & Fundadora',
    content: 'El sistema de diseño UI/UX que crearon para nosotros es simplemente brillante. Nuestros clientes ahora navegan por la tienda con facilidad y las ventas han aumentado significativamente. El equipo entendió perfectamente nuestra visión.',
    rating: 5,
    serviceUsed: 'Sistema de Diseño UI/UX + Branding Corporativo',
    projectDate: '2024-01-20',
    results: [
      {
        metric: 'Tasa de rebote',
        value: '-60%',
        improvement: '60% menos rebotes'
      },
      {
        metric: 'Tiempo en sitio',
        value: '+3 min',
        improvement: '3 minutos más'
      }
    ]
  },
  {
    id: 'testimonial-3',
    clientName: 'Miguel Torres',
    clientCompany: 'Industria Química del Plata',
    clientPosition: 'Gerente General',
    content: 'La auditoría de seguridad que realizaron nos dio tranquilidad total. Identificaron vulnerabilidades que no sabíamos que existían y nos proporcionaron un plan claro para fortalecer nuestra infraestructura. Su profesionalismo es excepcional.',
    rating: 5,
    serviceUsed: 'Auditoría de Seguridad TI',
    projectDate: '2024-05-10',
    results: [
      {
        metric: 'Vulnerabilidades',
        value: '0 críticas',
        improvement: '100% resueltas'
      },
      {
        metric: 'Certificaciones',
        value: 'ISO 27001',
        improvement: 'Certificación obtenida'
      }
    ]
  },
  {
    id: 'testimonial-4',
    clientName: 'Lucía Fernández',
    clientCompany: 'Restaurante La Tradición',
    clientPosition: 'Propietaria',
    content: 'Gracias al marketing digital 360° de Transaesthetic, nuestro restaurante ahora aparece en el top 3 de búsquedas locales. Las reservas online han aumentado un 200% y hemos expandido nuestra base de clientes significativamente.',
    rating: 5,
    serviceUsed: 'Marketing Digital 360°',
    projectDate: '2024-02-28',
    results: [
      {
        metric: 'Reservas online',
        value: '+200%',
        improvement: '200% de aumento'
      },
      {
        metric: 'Visibilidad local',
        value: 'Top 3',
        improvement: 'Posición mejorada'
      }
    ]
  },
  {
    id: 'testimonial-5',
    clientName: 'Javier Ruiz',
    clientCompany: 'Constructora del Sur',
    clientPosition: 'Director de Operaciones',
    content: 'El desarrollo full-stack que nos entregaron superó todas nuestras expectativas. La aplicación maneja miles de usuarios simultáneamente sin problemas y se integra perfectamente con nuestros sistemas existentes.',
    rating: 5,
    serviceUsed: 'Desarrollo Web Full-Stack',
    projectDate: '2024-04-12',
    results: [
      {
        metric: 'Usuarios concurrentes',
        value: '5000+',
        improvement: 'Escalabilidad lograda'
      },
      {
        metric: 'Tiempo de respuesta',
        value: '< 100ms',
        improvement: 'Rendimiento óptimo'
      }
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-study-1',
    title: 'Transformación Digital de TechCorp Argentina',
    client: 'TechCorp Argentina',
    industry: 'Tecnología',
    challenge: 'TechCorp necesitaba modernizar su plataforma legacy y mejorar la experiencia del usuario para competir en el mercado digital actual.',
    solution: 'Implementamos una solución full-stack con React y Node.js, junto con una consultoría estratégica completa que alineó la tecnología con los objetivos de negocio.',
    results: [
      {
        metric: 'Tiempo de carga',
        before: '4.2s',
        after: '0.8s',
        improvement: '81% más rápido'
      },
      {
        metric: 'Conversiones',
        before: '2.1%',
        after: '5.3%',
        improvement: '152% de aumento'
      },
      {
        metric: 'Usuarios activos',
        before: '15,000',
        after: '45,000',
        improvement: '200% de crecimiento'
      }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    duration: '4 meses',
    testimonial: 'El impacto en nuestro negocio ha sido transformador. No solo mejoramos técnicamente, sino que también crecimos como empresa.',
    featuredImageUrl: '/case-studies/techcorp-transformation.jpg'
  },
  {
    id: 'case-study-2',
    title: 'Rebranding y E-commerce para Fashion Boutique',
    client: 'Fashion Boutique Online',
    industry: 'Moda y Retail',
    challenge: 'La tienda necesitaba una identidad visual moderna y una plataforma de e-commerce que reflejara la calidad premium de sus productos.',
    solution: 'Creamos un sistema de diseño completo y desarrollamos una tienda online con funcionalidades avanzadas de personalización y experiencia de usuario optimizada.',
    results: [
      {
        metric: 'Ventas online',
        before: '$50,000/mes',
        after: '$180,000/mes',
        improvement: '260% de aumento'
      },
      {
        metric: 'Tasa de conversión',
        before: '1.8%',
        after: '4.2%',
        improvement: '133% de mejora'
      }
    ],
    technologies: ['Next.js', 'Stripe', 'Sanity CMS', 'Vercel'],
    duration: '3 meses',
    testimonial: 'Nuestra marca ahora transmite la exclusividad que merecen nuestros productos. Las ventas hablan por sí solas.',
    featuredImageUrl: '/case-studies/fashion-boutique.jpg'
  }
];

export const getTestimonialsByService = (serviceId: string): Testimonial[] => {
  return testimonials.filter(testimonial =>
    testimonial.serviceUsed.toLowerCase().includes(serviceId.toLowerCase())
  );
};

export const getFeaturedTestimonials = (limit: number = 3): Testimonial[] => {
  return testimonials
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export const getAverageRating = (): number => {
  const totalRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0);
  return Math.round((totalRating / testimonials.length) * 10) / 10;
};