
import { EditorialProject, EducationItem } from './types';

export const PROJECTS: EditorialProject[] = [
  {
    id: '1',
    number: '01',
    title: 'NUMÉRO HOMME 49',
    year: '2025',
    category: 'Editorial Looks',
    images: [
      'foto2.JPG',
      'foto3.jpg'
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
      'foto4.JPG',
      'foto5.JPG',
      'foto6.JPG'
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
      'foto7.JPG',
      'foto8.JPG'
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
