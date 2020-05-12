import { Injectable } from '@angular/core';
import { map, share } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  categories: Observable<Category[]>;

  constructor() {
    this.categories = of(CATEGORIES).pipe(share());
  }

  public getCategories(): Observable<Category[]> {
    return this.categories;
  }

  public getCategoryById(id: string): Observable<Category> {
    return this.categories.pipe(
      map((categories) => categories.find((c) => c.id === id))
    );
  }
}

export interface Category {
  id: string;
  title: string;
  public: boolean;
  first: Array<Entry>;
  second: Array<Entry>;
  third: Array<Entry>;
  honorable: Array<Entry>;
  noCard?: boolean;
}

interface Entry {
  project: string;
  organizer: string;
  type?: string;
  picture?: string;
  longText?: string;
}

const CATEGORIES: Category[] = [
  {
    title: 'Network Award',
    public: false,
    noCard: true,
    id: 'network',
    first: [
      {
        project: 'Camp of Future',
        type: 'project',
        picture: 'turkey.jpg',
        organizer: 'ESN CAG, ESN Turkey',
        longText: `"As TPÖÇG Local Project Team and ESN ÇAĞ, our biggest dream is to leave a mark in people's hearts. So, we decided to do something for children living in disadvantaged areas. The main objective of the project is to create 'equal opportunities in education' for students in disadvantaged areas.
The first region we identified for this was Mersin Mut's Yalnızcabağ village, where students study in primary and secondary schools. Afterwards, they go to different regions to study in boarding schools. The fact that the students who do not leave the village until the age of 13 or 14, go to different regions leads to many orientation and psychological problems. We started preparing this project to solve their orientation problems and to ensure equal opportunities in education.
The project took place between the 17th and 20th of December. Together with 15 trainers and 1 psychologist, we trained a total of 78 children.
- Children were educated under 4 main headings. These issues being: gender mainstreaming, health, social media and children's rights.
- We designed 10 workshops for children, including science, painting, imagination, letter writing, creative writing, plant, environment, puppet making, bag design and drama workshops for these purposes.
- We wanted to introduce different educational models to children. For this purpose, we provided training for expressing emotions and coping with self-esteem and anxiety with the non-formal education model.
- We organised many book collection campaigns, and also opened a library for the kids. We prepared a memorial corner for the library.
- On the last day of the project, we opened an exhibition for children's activities. And we invited their parents to school. We showed the parents the library and the exhibition."`,
      },
    ],
    second: [],
    third: [],
    honorable: [
      {
        project: 'Christmas With Portuguese Families',
        type: 'project',
        picture: 'portugal.jpg',
        organizer: 'ESN Portugal',
        longText: `"Christmas with Portuguese Families gives international students, who weren't able to go home for the holidays, the opportunity to experience a true and traditional Portuguese experience with Portuguese families in their homes. Even people with different religious beliefs get together for this cultural exchange. It is enriching on every level.
By experiencing the Christmas season in Portuguese homes, international students get the chance to learn about Portuguese traditions, from gastronomy to songs and from beliefs to decorations. At the same time, Portuguese families learn about the holiday traditions of countries from all over the world through the exchange happening with international students.
By comparing traditions, both parties can learn and experience new things and become more understanding and global citizens.
The project is managed by ESN Portugal, working together with the local sections in the promotion of the project to the international students and their Higher Education Institutions. Higher Education Institutions without local ESN sections were also contacted to give international students from all over the country the opportunity. A few local sections already developed this type of initiative in previous years; however, by centralising the project, it became possible to have a greater reach, impact and to improve cooperation between sections.
The project was vastly promoted in the media. At the end of the project, feedback forms were sent to the participants to improve the project in the future."`,
      },
    ],
  },
  {
    title: 'cooperationSTAR',
    public: false,
    id: 'cooperation',
    first: [
      {
        project: 'ESN Brno United',
        organizer: 'ESN MUNI Brno, ESN MENDELU and ESN VUT Brno',
      },
    ],
    second: [
      {
        project: 'ESN FINT and ESN INTO Tampere',
        organizer: 'ESN FINT and ESN INTO',
      },
    ],
    third: [
      {
        project: 'ESN a Milano Unita',
        organizer:
          'ESN Milano Bocconi, ESN Milano IULM, ESN Milano Statale, ESN Milano Unicatt, ESN Milano-Bicocca, ESN Politecnico Milano',
      },
    ],
    honorable: [],
  },
  {
    title: 'cultureSTAR',
    public: false,
    id: 'culture',
    first: [
      {
        project: 'Incontro Culturale Erasmus (ICE) 2019',
        organizer: 'ESN Italy',
      },
    ],
    second: [
      {
        project:
          'ESN Estonia x Võrumaa Youth Council: youth participation and culture',
        organizer: 'ESN Estonia',
      },
    ],
    third: [
      {
        project: 'Project UE Libre (Optional educational unit)',
        organizer: 'ESN Besançon',
      },
    ],
    honorable: [],
  },
  {
    title: 'educationSTAR',
    public: false,
    id: 'education',
    first: [{ project: '(EX)Change Your Lives', organizer: 'ESN Novi Sad' }],
    second: [
      {
        project:
          'The contribution of ESN Spain to a better-funded Erasmus+ programme',
        organizer: 'ESN Spain',
      },
    ],
    third: [
      {
        project: 'Glocal Conference and Training',
        organizer: 'ESN Portugal',
      },
    ],
    honorable: [],
  },
  {
    title: 'employabilitySTAR',
    public: false,
    id: 'employability',
    first: [
      {
        project: 'International Student Employability',
        organizer: 'ESN FINT',
      },
    ],
    second: [{ project: 'Career Mixers', organizer: 'ESN Utrecht' }],
    third: [
      {
        project:
          'Conference: “International mobility and employability: advantages and disadvantages of an abroad experience”',
        organizer: 'ESN Milano IULM',
      },
    ],
    honorable: [],
  },
  {
    title: 'environmentSTAR',
    public: false,
    id: 'environment',
    first: [
      {
        project: 'Zero Waste month',
        organizer: 'ESN Strasbourg',
        type: 'Project',
        picture: 'strasbourg.png',
        longText:
          'Zero Waste Month was a series of connected activities during November 2019. ESN Strasbourg organised five events, started with the screening of the film “Tomorrow” which talks about different positive alternatives for a life respectful of the planet, then followed by a flea-market, a conference on how to sort your waste and two activities where trash and cigarette butts were collected on the street.\nThe main objective was to make international students aware of the zero-waste lifestyle, to integrate them and spread awareness on how waste is sorted in their host city, to enable them to dress economically and ecologically and to get to know the different associations/departments of the city that work for the environment. \nESN Strasbourg worked with various partners for the project and used their venues for the activities.',
      },
    ],
    second: [
      {
        project: 'Think Reusable - Save the Earth with ESN-EYE',
        organizer: 'ESN-EYE Lodz',
        type: 'Project',
        picture: 'lodz.png',
        longText:
          'The project was focused on raising awareness of ‘zero-waste ideas’ and “being eco-friendly” among local and exchange students. Within two weeks full of events, ESN-EYE Lodz presented ‘reusable thinking’ and eco-friendly habits that should be introduced to everyday life. They organised various activities such as plant-based and zero-waste cooking, creating textile and eco-bags, remaking old clothes or manufacturing homemade gifts and beauty products.\nThe main objective of the project was to raise awareness of the planet’s condition. The volunteers wanted to show how everyday activities can significantly change our influence on the planet.\nDuring the project, ESN-EYE Lodz collaborated with two NGOs, the University and one company as well as Viva!, which is a Foundation International Movement for Animals.\n',
      },
    ],
    third: [
      {
        project: 'ZeroWaste November',
        organizer: 'ESN Rijeka',
        type: 'Campaign',
        picture: 'rijeka.png',
        longText:
          'ZeroWaste November was a one-month long social media campaign where helpful tips and advice were posted on a daily basis. They encouraged their followers to use alternative products to single-use ones, suggested ways of recycling and creating DIY products and explained general concepts related to sustainability and zero-waste.\nThe aim of the campaign was to raise awareness on excessive waste making and how to minimize personal waste and positively influence the audience of social media pages of ESN Rijeka with the overall goal of the betterment of the environment on a local level.\nDuring the campaign, ESN Rijeka collaborated with Špajza - a specialized store that sells zero waste products and groceries in bulk and Riperaj which is a space where people can go and fix their household items by themselves.\n',
      },
    ],
    honorable: [],
  },
  {
    title: 'fundraisingSTAR',
    public: false,
    id: 'fundraising',
    first: [
      {
        project: 'South Eastern European Platform Baku',
        organizer: 'ESN Azerbaijan',
      },
    ],
    second: [
      {
        project: 'Network Exchange Forum Milano Statale 2019',
        organizer: 'ESN Milano Statale',
      },
    ],
    third: [
      {
        project:
          'Fundraising to launch the Secretariat and to improve events for the international students',
        organizer: 'ESN Italy',
      },
    ],
    honorable: [],
  },
  {
    title: 'healthSTAR',
    public: false,
    id: 'health',
    first: [{ project: 'National Erasmus Games 2019', organizer: 'ESN Italy' }],
    second: [
      { project: 'Shape Challenge with ESN-EYE', organizer: 'ESN-EYE Lodz' },
    ],
    third: [
      { project: 'ESN Gent: Silent Disco Yoga', organizer: 'ESN Gent' },
      { project: `Autumn Erasmus Games '19`, organizer: 'ESN Lithuania' },
    ],
    honorable: [],
  },
  {
    title: 'hrSTAR',
    public: false,
    id: 'hr',
    first: [
      {
        project: 'Internal Buddy System Thessaloniki: The Game of the Crown',
        organizer: 'ESN AUTH, ESN UOM THESSALONIKI, ESN IHU THESSALONIKI',
      },
    ],
    second: [
      {
        project: 'HR Community Management by HR Committee in ESN Poland',
        organizer: 'ESN Poland',
      },
    ],
    third: [
      {
        project: 'Section Reference tasks guide',
        organizer: 'ESN Bulgaria',
      },
    ],
    honorable: [],
  },
  {
    title: 'itSTAR',
    public: false,
    id: 'it',
    first: [{ project: 'Fiesta', organizer: 'ESN VUT Brno' }],
    second: [
      {
        project: 'Erasmus Manager',
        organizer: 'ESN AUTH, ESN UOM Thessaloniki, ESN IHU Thessaloniki',
      },
    ],
    third: [
      { project: 'Pretix Online Payment System', organizer: 'ESN Germany' },
    ],
    honorable: [],
  },
  {
    title: 'mobilitySTAR',
    public: false,
    id: 'mobility',
    first: [
      {
        project: 'Internationalisation and Mobility Conference',
        organizer: 'ESN Serbia',
      },
    ],
    second: [
      {
        project: 'Erasmus in Estonian high schools',
        organizer: 'ESN Estonia',
      },
      {
        project: 'Accessible Experiences Conference',
        organizer: 'ESN Turkey',
      },
    ],
    third: [{ project: '#ErasmusDays', organizer: 'ESN Debrecen' }],
    honorable: [],
  },
  {
    title: 'socialinclusionSTAR',
    public: false,
    id: 'socialinclusion',
    first: [
      {
        project: 'Ludàlia and ESN: towards a bidirectional normalization',
        organizer:
          'ESN UAB Barcelona, ESN UPC Barcelona, ESN Barcelona UB, ESN Barcelona UPF',
      },
      {
        project:
          'Visibility of the structural male chauvinist violence during international mobilities',
        organizer: 'ESN UCM, ESN UAH, ESN URJC, ESN UC3M, ESN UAM, ESN UAX',
      },
    ],
    second: [{ project: 'Social Tuesday', organizer: 'ESN Granada' }],
    third: [
      {
        project: 'International students theatre',
        organizer: 'ESN Besançon',
      },
    ],
    honorable: [],
  },
  {
    title: 'trainingSTAR',
    public: false,
    id: 'training',
    first: [
      {
        project: 'Social Inclusion Weekend Vaasa 2019',
        organizer: 'ESN Finland',
      },
    ],
    second: [{ project: 'Awareness Of The Disability', organizer: 'ESN CAG' }],
    third: [{ project: 'Education Training 2019', organizer: 'ESN Romania' }],
    honorable: [],
  },
  {
    title: 'visibilitySTAR',
    public: false,
    id: 'visibility',
    first: [
      {
        project:
          'From #StavoltaVoto (#ThisTimeImVoting) to #StavoltaHoVotato (#ThisTimeIVoted)',
        organizer: 'ESN Italy',
      },
    ],
    second: [
      { project: `International Volunteers' Day`, organizer: 'ESN Spain' },
    ],
    third: [
      {
        project:
          'This is Me in Sign Language - 14th National Platform of ESN Croatia, ESN Rijeka',
        organizer: 'ESN Croatia',
      },
    ],
    honorable: [],
  },
];
