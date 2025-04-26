
import { User, Challenge, Company, Activity, Recognition, FeedActivity, FeedActivityType } from './types';

// Mock users data
export const users: User[] = [
  {
    id: "1",
    name: 'Ana Martinez',
    email: 'ana.martinez@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    bio: 'Activista ambiental apasionada por la conservación de ecosistemas naturales y la educación medioambiental.',
    city: 'Madrid',
    interests: ['Reforestación', 'Conservación', 'Educación ambiental'],
    skills: ['Organización', 'Comunicación', 'Investigación'],
    attitudes: ['Proactiva', 'Colaborativa', 'Resiliente'],
    points: 1250,
    savedProfiles: ["2", "4"],
    participatingChallenges: ["1", "3"],
  },
  {
    id: "2",
    name: 'Carlos López',
    email: 'carlos.lopez@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    bio: 'Ingeniero ambiental especializado en gestión de residuos y economía circular.',
    city: 'Barcelona',
    interests: ['Economía circular', 'Residuos', 'Energías renovables'],
    skills: ['Análisis de datos', 'Diseño de procesos', 'Gestión de proyectos'],
    attitudes: ['Analítico', 'Innovador', 'Metódico'],
    points: 980,
    savedProfiles: ["1", "5"],
    participatingChallenges: ["2"],
  },
  {
    id: "3",
    name: 'Laura Fernández',
    email: 'laura.fernandez@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    bio: 'Bióloga marina con experiencia en conservación de ecosistemas costeros y educación ambiental.',
    city: 'Valencia',
    interests: ['Océanos', 'Biodiversidad', 'Educación ambiental'],
    skills: ['Investigación científica', 'Buceo', 'Fotografía'],
    attitudes: ['Curiosa', 'Paciente', 'Detallista'],
    points: 1580,
    savedProfiles: ["7"],
    participatingChallenges: ["2", "4"],
  },
  {
    id: "4",
    name: 'Miguel Torres',
    email: 'miguel.torres@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Especialista en agricultura sostenible y permacultura, con proyectos de huertos urbanos comunitarios.',
    city: 'Sevilla',
    interests: ['Permacultura', 'Agricultura urbana', 'Soberanía alimentaria'],
    skills: ['Diseño de huertos', 'Compostaje', 'Formación'],
    attitudes: ['Perseverante', 'Práctico', 'Generoso'],
    points: 890,
    savedProfiles: ["3", "6"],
    participatingChallenges: ["5"],
  },
  {
    id: "5",
    name: 'Elena Ruiz',
    email: 'elena.ruiz@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Abogada especializada en derecho ambiental y defensora de los derechos de la naturaleza.',
    city: 'Bilbao',
    interests: ['Justicia ambiental', 'Política climática', 'Derechos indígenas'],
    skills: ['Asesoría legal', 'Negociación', 'Investigación'],
    attitudes: ['Íntegra', 'Persuasiva', 'Comprometida'],
    points: 1120,
    savedProfiles: ["1", "2"],
    participatingChallenges: ["3", "6"],
  },
  {
    id: "6",
    name: 'Pablo Sánchez',
    email: 'pablo.sanchez@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    bio: 'Experto en energías renovables y transición energética con experiencia en proyectos comunitarios.',
    city: 'Zaragoza',
    interests: ['Energía solar', 'Comunidades energéticas', 'Autoconsumo'],
    skills: ['Instalación fotovoltaica', 'Cálculo energético', 'Divulgación'],
    attitudes: ['Visionario', 'Resolutivo', 'Colaborativo'],
    points: 750,
    savedProfiles: ["4"],
    participatingChallenges: ["1"],
  },
  {
    id: "7",
    name: 'Sofía García',
    email: 'sofia.garcia@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
    bio: 'Especialista en comunicación ambiental y campañas de concienciación sobre cambio climático.',
    city: 'Málaga',
    interests: ['Cambio climático', 'Comunicación', 'Movilización social'],
    skills: ['Redacción', 'Estrategia digital', 'Diseño gráfico'],
    attitudes: ['Creativa', 'Empática', 'Adaptable'],
    points: 1340,
    savedProfiles: ["3", "5"],
    participatingChallenges: ["4", "6"],
  }
];

// Mock companies data
export const companies: Company[] = [
  {
    id: "1",
    name: 'EcoSolutions',
    logo: 'https://via.placeholder.com/150?text=EcoSolutions',
    description: 'Empresa dedicada a desarrollar soluciones innovadoras para reducir el impacto ambiental de los procesos industriales.',
    sector: 'Tecnología ambiental',
    city: 'Madrid',
    website: 'www.ecosolutions.com',
    publishedChallenges: ["1", "5"]
  },
  {
    id: "2",
    name: 'GreenLife',
    logo: 'https://via.placeholder.com/150?text=GreenLife',
    description: 'Cadena de productos orgánicos y sostenibles comprometida con el comercio justo y el embalaje ecológico.',
    sector: 'Alimentación y consumo responsable',
    city: 'Barcelona',
    website: 'www.greenlife.com',
    publishedChallenges: ["2"]
  },
  {
    id: "3",
    name: 'RenovaTech',
    logo: 'https://via.placeholder.com/150?text=RenovaTech',
    description: 'Compañía especializada en el desarrollo e implementación de energías renovables a escala comunitaria.',
    sector: 'Energías renovables',
    city: 'Valencia',
    website: 'www.renovatech.com',
    publishedChallenges: ["3", "6"]
  },
  {
    id: "4",
    name: 'AquaPura',
    logo: 'https://via.placeholder.com/150?text=AquaPura',
    description: 'Organización enfocada en soluciones para la conservación y purificación del agua en comunidades vulnerables.',
    sector: 'Gestión hídrica',
    city: 'Sevilla',
    website: 'www.aquapura.org',
    publishedChallenges: ["4"]
  }
];

// Mock challenges data
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

// Mock volunteer activities
export const activities: Activity[] = [
  {
    id: "1",
    title: 'Limpieza de playa',
    description: 'Jornada de limpieza y clasificación de residuos en la playa de la Malvarrosa.',
    date: '2025-05-10',
    location: 'Valencia',
    organizer: 'Fundación Océanos Limpios',
    image: 'https://images.unsplash.com/photo-1618477460842-8ad077f873cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    duration: '4 horas',
    participants: 25,
    category: 'Limpieza',
    interestedUsers: ["3", "7"]
  },
  {
    id: "2",
    title: 'Plantación de árboles autóctonos',
    description: 'Reforestación con especies autóctonas en zona afectada por incendio forestal.',
    date: '2025-04-22',
    location: 'Sierra de Madrid',
    organizer: 'Bosques Vivos',
    image: 'https://images.unsplash.com/photo-1542489076-bc748c3ac0db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
    duration: '6 horas',
    participants: 40,
    category: 'Reforestación',
    interestedUsers: ["1", "2", "6"]
  },
  {
    id: "3",
    title: 'Taller de compostaje comunitario',
    description: 'Aprende a crear y mantener un sistema de compostaje para tu comunidad de vecinos.',
    date: '2025-05-05',
    location: 'Barcelona',
    organizer: 'Zero Waste BCN',
    image: 'https://images.unsplash.com/photo-1589802159282-8dedf0513705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    duration: '3 horas',
    participants: 15,
    category: 'Residuos',
    interestedUsers: ["2", "4"]
  },
  {
    id: "4",
    title: 'Censo de aves urbanas',
    description: 'Actividad para identificar y censar aves en el entorno urbano y contribuir a la ciencia ciudadana.',
    date: '2025-05-18',
    location: 'Parques de Sevilla',
    organizer: 'SEO/BirdLife',
    image: 'https://images.unsplash.com/photo-1549608276-5786777e6587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    duration: '5 horas',
    participants: 20,
    category: 'Biodiversidad',
    interestedUsers: ["3", "5"]
  },
  {
    id: "5",
    title: 'Instalación de hoteles de insectos',
    description: 'Taller y colocación de refugios para insectos polinizadores en parques urbanos.',
    date: '2025-05-22',
    location: 'Zaragoza',
    organizer: 'Amigos de las Abejas',
    image: 'https://images.unsplash.com/photo-1560840673-496d97e661d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
    duration: '4 horas',
    participants: 15,
    category: 'Biodiversidad',
    interestedUsers: ["4", "6"]
  }
];

// Mock recognitions data
export const recognitions: Recognition[] = [
  {
    id: "1",
    title: 'Embajador del mes',
    description: 'Por su destacada labor en la difusión y promoción de los retos ambientales en su comunidad.',
    user: "3", // Laura Fernández
    date: '2025-04-01',
    image: 'https://via.placeholder.com/300?text=Reconocimiento',
    category: 'Divulgación'
  },
  {
    id: "2",
    title: 'Impacto positivo',
    description: 'Por su contribución significativa en el desarrollo de soluciones para la gestión sostenible del agua.',
    user: "5", // Elena Ruiz
    date: '2025-04-01',
    image: 'https://via.placeholder.com/300?text=Reconocimiento',
    category: 'Innovación'
  },
  {
    id: "3",
    title: 'Conexión comunitaria',
    description: 'Por crear puentes entre diferentes actores sociales para el desarrollo de proyectos ambientales colaborativos.',
    user: "1", // Ana Martinez
    date: '2025-04-01',
    image: 'https://via.placeholder.com/300?text=Reconocimiento',
    category: 'Comunidad'
  }
];

// Mock feed activity
export const feedActivities: FeedActivity[] = [
  {
    id: "1",
    type: 'join-challenge' as FeedActivityType,
    user: "1", // Ana Martinez
    challenge: "3", // Comunidad energética vecinal
    date: '2025-04-10T14:30:00Z'
  },
  {
    id: "2",
    type: 'complete-profile' as FeedActivityType,
    user: "7", // Sofía García
    date: '2025-04-09T10:15:00Z'
  },
  {
    id: "3",
    type: 'receive-recognition' as FeedActivityType,
    user: "3", // Laura Fernández
    recognition: "1", // Embajador del mes
    date: '2025-04-01T09:00:00Z'
  },
  {
    id: "4",
    type: 'join-challenge' as FeedActivityType,
    user: "4", // Miguel Torres
    challenge: "5", // Huerto vertical inteligente
    date: '2025-04-08T16:45:00Z'
  },
  {
    id: "5",
    type: 'interest-activity' as FeedActivityType,
    user: "2", // Carlos López
    activity: "3", // Taller de compostaje comunitario
    date: '2025-04-07T11:20:00Z'
  },
  {
    id: "6",
    type: 'join-challenge' as FeedActivityType,
    user: "5", // Elena Ruiz
    challenge: "6", // Microrredes para comunidades aisladas
    date: '2025-04-05T13:10:00Z'
  },
  {
    id: "7",
    type: 'interest-activity' as FeedActivityType,
    user: "6", // Pablo Sánchez
    activity: "2", // Plantación de árboles autóctonos
    date: '2025-04-03T15:30:00Z'
  }
];
