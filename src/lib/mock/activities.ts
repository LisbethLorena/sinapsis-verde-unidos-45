import { Activity } from '../types';

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
