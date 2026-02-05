
import { EditorialProject, EducationItem } from './types';

export const PROJECTS: EditorialProject[] = [
  {
    id: '1',
    number: '01',
    title: 'NUMÉRO HOMME 49',
    year: '2025',
    category: 'Editorial Looks',
    images: [
      'foto3.jpg',
      'foto4.jpg'
    ]
  },
  {
    id: '2',
    number: '02',
    title: 'CRÉDITS:',
    year: '',
    category: '',
    credits: {
      magazine: 'Numéro Homme @NumeroMagazine',
      editorInChief: 'Editor-in-Chief @MrPhilipUt'
    },
    images: [
      'foto5.jpg',
      'foto6.jpg'
    ]
  },
  {
    id: '3',
    number: '03',
    title: 'EVERY DETAIL MATTERS.',
    year: '',
    category: '',
    description: "THAT'S WHERE STYLE BEGINS — AND STANDS OUT.",
    images: [
      'foto7.jpg',
      'foto8.jpg'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'MBA IN FASHION AND LUXURY BUSINESS',
    school: 'IFA Paris',
    period: '2022–2024'
  },
  {
    degree: 'MA IN JOURNALISM',
    school: 'University of Palermo',
    period: '2022–2023'
  }
];

export const SKILLS = [
  'Editorial Styling',
  'Personal Styling & Image Consulting',
  'Event & Occasion Styling',
  'Look Development',
  'Proportions and Silhouette Analysis',
  'Social Media & Content Styling'
];
