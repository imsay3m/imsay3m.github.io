// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'imsay3m', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/imsay3m/gitprofile, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/imsay3m/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['imsay3m/cinecraze-client', 'imsay3m/cinecraze-server']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['imsay3m/cinecraze-client', 'imsay3m/cinecraze-server'], // List of repository names to display. example: ['imsay3m/cinecraze-client', 'imsay3m/cinecraze-server']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'CineCraze',
          description:
            '	CineCraze is a movie and series downloading and streaming website with a rating system, featuring role-based access users. The backend is built with Django Rest API, while the frontend uses TailwindCSS, DaisyUI, and SwiperJS, providing a seamless and visually appealing user experience.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://cinecraze-client.vercel.app/',
        },
        {
          title: 'Shonali Krishi',
          description:
            '	This e-commerce platform bridges the gap between rural producers and urban consumers, fostering sustainability and economic equity.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/imsay3m/shonali-krishi',
        },
        {
          title: 'Omni Listing',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/imsay3m/omniListingAPI',
        },
        {
          title: 'Fluffypaw',
          description:
            '	I`ve built a Pet Adoption System using Django Rest API framework to make adopting pets easier and more efficient. It allows users to browse pets, then adopt a pet as user`s like. This system aims to streamline the adoption process, ensuring a smoother experience for both pets and potential adopters.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://imsay3m.github.io/fluffypaw-frontend/',
        },
      ],
    },
  },
  seo: {
    title: 'Sheikh Eismile Ahmed Sayem',
    description: 'Portfolio Of imsay3m',
    imageURL: 'https://avatars.githubusercontent.com/u/86166807',
  },
  social: {
    linkedin: 'imsay3m',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: 'imsay3m',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'imsay3m',
    website: 'https://imsay3m.github.io',
    phone: '+8801713807932',
    email: 'ahmedsayem730@gmail.com',
  },
  resume: {
    fileUrl:
      'https://imsay3m.eu.org/0:/Phitron/job-placement/jp-task/online-resume/sayem-resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'JavaScript',
    'Python',
    'Django',
    'Django RSET Framework',
    'MySQL',
    'PostgreSQL',
    'Git',
    'HTML',
    'CSS',
    'Bootstrap',
    'Tailwindcss',
    'SASS',
    'Figma',
  ],
  experiences: [
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'September 2021',
    //   to: 'Present',
    //   companyLink: 'https://example.com',
    // },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  certifications: [
    {
      name: 'Phitron',
      body: 'CSE Fundamentals with Phitron',
      year: 'May 2024',
      link: 'https://phitron.io/verification?validationNumber=PHBATCH36140991010',
    },
  ],
  educations: [
    {
      institution: 'Metropolitan University Sylhet',
      degree: 'BSc in Computer Science & Engineering',
      from: '2022',
      to: '2026',
    },
    {
      institution: 'Dakshin Surma Govt. College',
      degree: 'HSC',
      from: '2019',
      to: '2021',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'imsay3m', // to hide blog section, keep it empty
    // limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '5050582',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      // 'cupcake',
      // 'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      'halloween',
      'garden',
      // 'forest',
      'aqua',
      'lofi',
      'pastel',
      // 'fantasy',
      'wireframe',
      'black',
      // 'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      // 'lemonade',
      'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
