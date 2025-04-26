import { Challenge } from '../types';

export const challenges: Challenge[] = [
  {
    id: "1",
    title: 'Reforestación urbana participativa',
    description: 'Buscamos voluntarios para diseñar e implementar un plan de reforestación en áreas urbanas degradadas, creando espacios verdes comunitarios.',
    company: "1", // EcoSolutions
    contributionType: 'Tiempo y habilidades',
    reward: 'Certificado de participación y reconocimiento público',
    startDate: '2025-05-01',
    endDate: '2025-07-31',
    participants: ["1", "6"],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    location: 'Madrid',
    category: 'Biodiversidad',
    difficulty: 'Media',
    status: 'Activo'
  },
  {
    id: "2",
    title: 'Diseño de envases compostables',
    description: 'Reto para diseñar nuevos envases 100% compostables para productos frescos, reduciendo el uso de plásticos de un solo uso.',
    company: "2", // GreenLife
    contributionType: 'Ideas y diseño',
    reward: 'Premio económico y posibilidad de desarrollar el producto',
    startDate: '2025-04-15',
    endDate: '2025-06-15',
    participants: ["2", "3"],
    image: 'https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
    location: 'Remoto',
    category: 'Economía circular',
    difficulty: 'Alta',
    status: 'Activo'
  },
  {
    id: "3",
    title: 'Comunidad energética vecinal',
    description: 'Buscamos participantes para crear un modelo de comunidad energética donde los vecinos comparten y gestionan recursos renovables.',
    company: "3", // RenovaTech
    contributionType: 'Tiempo, ideas y divulgación',
    reward: 'Participación en los beneficios energéticos',
    startDate: '2025-04-01',
    endDate: '2025-10-31',
    participants: ["1", "5"],
    image: 'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    location: 'Valencia',
    category: 'Energías renovables',
    difficulty: 'Media',
    status: 'Activo'
  },
  {
    id: "4",
    title: 'Monitorización ciudadana de ríos',
    description: 'Iniciativa para capacitar voluntarios en la monitorización de la calidad del agua en ríos urbanos y crear una red de vigilancia ciudadana.',
    company: "4", // AquaPura
    contributionType: 'Tiempo y habilidades',
    reward: 'Formación especializada y equipamiento',
    startDate: '2025-05-15',
    endDate: '2025-08-15',
    participants: ["3", "7"],
    image: 'https://images.unsplash.com/photo-1544356879-16631a2436da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    location: 'Sevilla y alrededores',
    category: 'Agua',
    difficulty: 'Baja',
    status: 'Activo'
  },
  {
    id: "5",
    title: 'Huerto vertical inteligente',
    description: 'Reto para desarrollar un sistema de huerto vertical eficiente en agua y energía para espacios urbanos reducidos.',
    company: "1", // EcoSolutions
    contributionType: 'Ideas y prototipado',
    reward: 'Desarrollo del prototipo y visibilidad',
    startDate: '2025-04-10',
    endDate: '2025-07-10',
    participants: ["4"],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    location: 'Madrid',
    category: 'Agricultura urbana',
    difficulty: 'Alta',
    status: 'Activo'
  },
  {
    id: "6",
    title: 'Microrredes para comunidades aisladas',
    description: 'Buscamos participantes para diseñar e implementar microrredes eléctricas en comunidades rurales sin acceso a la red general.',
    company: "3", // RenovaTech
    contributionType: 'Habilidades técnicas y tiempo',
    reward: 'Viaje a la zona de implementación',
    startDate: '2025-06-01',
    endDate: '2025-12-31',
    participants: ["5", "7"],
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80',
    location: 'Mixto (presencial y remoto)',
    category: 'Energías renovables',
    difficulty: 'Alta',
    status: 'Próximamente'
  }
];
