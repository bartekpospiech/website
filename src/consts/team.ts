import enhanceTeamMembers from '@utils/enhanceTeamMembers';
import colors from '@theme/colors';

export const CATEGORIES = {
  FULL_TIME_MEMBERS: 'Full-time Members',
  BOARD_OF_DIRECTORS: 'Board of Directors',
  ADVISORS: 'Advisors',
};

export const MEMBERS = enhanceTeamMembers([
  {
    name: 'Mrinal',
    surname: 'Wadhwa',
    position: 'CTO',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'US',
    photo: 'mrinal-wadhwa.png',
    description: 'Loves rock-n-roll and has a dog named Sargent Pepper',
    bgColor: colors.extras.pictonBlue,
  },
  {
    name: 'Matthew',
    surname: 'Gregory',
    position: 'CEO',
    categories: [CATEGORIES.FULL_TIME_MEMBERS, CATEGORIES.BOARD_OF_DIRECTORS],
    country: 'US',
    photo: 'matthew-gregory.png',
    description: 'Started his career in professional sailing and has a passion for meteorology',
    bgColor: colors.extras.iceCold,
  },
  {
    name: 'Michael',
    surname: 'Uti',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'NG',
    photo: 'michael-uti.png',
    description: 'A recent graduate that is an ace with GitHub actions',
  },
  {
    name: 'Oleksandr',
    surname: 'Deundiak',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'UA',
    photo: 'oleksandr-deundiak.png',
    description: 'Rides really fast motorcycles',
  },
  {
    name: 'Pablo',
    surname: 'Polvorin',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'AR',
    photo: 'pablo-polvorin.png',
    description:
      'Once debugged a performance issue on a large scale system below a giant tree in the amazon',
  },
  {
    name: 'Nicholas',
    surname: 'Ippolito',
    position: 'Business Operations',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'US',
    photo: 'nicholas-ippolito.png',
    description: 'Enjoys snowboarding, fishing and surfing',
  },
  {
    name: 'Adrian',
    surname: 'Benavides',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'ES',
    photo: 'adrian-benavides.png',
    description: 'Loves music, playing the guitar and video games',
  },
  {
    name: 'Michał',
    surname: 'Szpakowski',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'PL',
    photo: 'michal-szpakowski.png',
    description: 'Loves swimming in the oceans, hiking in the mountains and gazing at the stars',
  },
  {
    name: 'Eric',
    surname: 'Torreborre',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'NL',
    photo: 'eric-torreborre.png',
    description: 'Loves functional programming and blowing into my saxophone',
  },
  {
    name: 'Davide',
    surname: 'Baldo',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'IT',
    photo: 'davide-baldo.png',
    description: 'Lives in the countryside, have the urge to learn how everything works',
  },
  {
    name: 'Glenn',
    surname: 'Gillen',
    position: 'VP of Product / GTM',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'AU',
    photo: 'glenn-gillen.png',
    description: 'Addicted to building world class tools for developers',
  },
  {
    name: 'Shane',
    surname: 'Sveller',
    position: 'Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'US',
    photo: 'shane-sveller.png',
    description: 'Obsessed with reproducible and declarative software',
  },
  {
    name: 'Talita',
    surname: 'Rodrigues',
    position: 'Applied Cryptographer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'BR',
    photo: 'talita-rodrigues.png',
    description:
      'Have this rule of not visiting two countries more than one time until I visit 55 countries at least.',
  },
  {
    name: 'Ryan',
    surname: 'Huber',
    position: 'Developer Advocate',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'US',
    photo: 'ryan-huber.png',
    description:
      'Teaching his young kids how to golf so he can spend future weekends on the course guilt free.',
  },
  {
    name: 'Nazmul',
    surname: 'Idris',
    position: 'Software Engineer',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'US',
    photo: 'nazmul-idris.png',
    description:
      'Loves driving fast cars, Rust, developer experience, open source, community, empathy, empowerment',
  },
  {
    name: 'Maryanna',
    surname: 'Saenko',
    position: 'Board Member',
    categories: [CATEGORIES.BOARD_OF_DIRECTORS],
    country: 'US',
    photo: 'maryanna-saenko.png',
    description: 'Partner at Future Ventures',
  },
  {
    name: 'Arra',
    surname: 'Malekzadeh',
    position: 'Board Member',
    categories: [CATEGORIES.BOARD_OF_DIRECTORS],
    country: 'US',
    photo: 'arra-malekzadeh.png',
    description: 'Partner at Craft Ventures',
  },
  {
    name: 'Fergal',
    surname: 'Donoher',
    position: 'Board Member',
    categories: [CATEGORIES.BOARD_OF_DIRECTORS],
    country: 'US',
    photo: 'fergal-donoher.png',
    description: 'SVP at Flex',
  },
  {
    name: 'Joanna',
    surname: 'Drake',
    position: 'Board Member',
    categories: [CATEGORIES.BOARD_OF_DIRECTORS],
    country: 'US',
    photo: 'joanna-drake.png',
    description: 'Partner at Core Ventures',
  },
  {
    name: 'Jeanne',
    surname: 'DeWitt Grosser',
    position: 'Product Advisor',
    categories: [CATEGORIES.ADVISORS],
    country: 'US',
    photo: 'j-dewitt-grosser.png',
    description: 'Head of Revenue and Growth at Stripe',
  },
  {
    name: 'Matthew',
    surname: 'Trifiro',
    position: 'Product Advisor',
    categories: [CATEGORIES.ADVISORS],
    country: 'US',
    photo: 'matthew-trifiro.png',
    description: 'CMO at Vapor.io',
  },
  {
    name: 'Brian',
    surname: 'Mullen',
    position: 'Product Advisor',
    categories: [CATEGORIES.ADVISORS],
    country: 'US',
    photo: 'brian-mullen.png',
    description: 'CMO at InfluxData',
  },
]);
