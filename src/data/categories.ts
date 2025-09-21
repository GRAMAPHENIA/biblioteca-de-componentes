export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'consultoria',
    name: 'Consultoría Estratégica',
    icon: 'briefcase',
    description: 'Servicios de asesoramiento y consultoría para optimizar tu negocio',
    color: 'blue'
  },
  {
    id: 'desarrollo',
    name: 'Desarrollo de Software',
    icon: 'code',
    description: 'Desarrollo de aplicaciones web y móviles personalizadas',
    color: 'green'
  },
  {
    id: 'diseno',
    name: 'Diseño y Branding',
    icon: 'palette',
    description: 'Diseño gráfico, UI/UX y desarrollo de identidad corporativa',
    color: 'purple'
  },
  {
    id: 'marketing',
    name: 'Marketing Digital',
    icon: 'trending-up',
    description: 'Estrategias de marketing digital y presencia online',
    color: 'orange'
  }
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getCategoryColor = (categoryId: string): string => {
  const category = getCategoryById(categoryId);
  return category?.color || 'gray';
};

export const getCategoryIcon = (categoryId: string): string => {
  const category = getCategoryById(categoryId);
  return category?.icon || 'circle';
};