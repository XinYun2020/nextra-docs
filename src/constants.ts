type TSectionData = {
    type: 'work' | 'project' | 'edu' | 'extra';
    what: string;
    when: string;
    role?: string;
    how?: string[];
}

export const WORK_EXPERIENCES: TSectionData[] = [
  {
    type: 'work'
    what: "Frontend Developer, IPIC Pty Ltd, George & Matilda",
    when: "Aug 2022 - Current",
    role: "",
    how: [
      `Responsible for development and maintenance of web applications using modern technologies like Typescript, ReactJs, Tailwind`,
      `Built company styled design system.`,
      `Frontend architecture`,
      `Developing microservices`,
      `Engaged in customer support for the existing code, troubleshoot and optimize the system.`,
      `Produced planning, development, and deployment technical documentation.`,
      `Present on tech decisions and component architecture designs.`,
    ],
  },
];

export const PROJECTS: TSectionData[] = [
    {
      type: 'project'
      what: "Frontend Developer, IPIC Pty Ltd, George & Matilda",
      when: "Aug 2022 - Current",
      role: "Frontend Engineer and UI/UX Designer",
      how: [
        `Responsible for development and maintenance of web applications using modern technologies like Typescript, ReactJs, Tailwind`,
        `Built company styled design system.`,
        `Frontend architecture`,
        `Developing microservices`,
        `Engaged in customer support for the existing code, troubleshoot and optimize the system.`,
        `Produced planning, development, and deployment technical documentation.`,
        `Present on tech decisions and component architecture designs.`,
      ],
    },
  ];

