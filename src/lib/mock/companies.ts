import { Company } from '../types';

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
