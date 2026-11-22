import type { AboutPageContent } from '@/types/content';

const officeImage = {
  src: '/images/office-open-space.jpg',
  alt: 'Open office space with a long meeting table and large windows',
  width: 1600,
  height: 1068,
} satisfies AboutPageContent['hero']['image'];

const values = [
  {
    title: 'Clarity first',
    text: 'We create a shared view of the challenge before defining the solution.',
  },
  {
    title: 'Business aligned',
    text: 'Technology decisions are connected to goals, people, and operational reality.',
  },
  {
    title: 'Built together',
    text: 'Close collaboration creates stronger decisions and solutions that last.',
  },
] satisfies AboutPageContent['values']['items'];

export const about: AboutPageContent = {
  meta: {
    title: 'About',
    description:
      'Learn about TechSalem, a technology and business consulting partner in Sweden that connects strategic intent with practical progress.',
    image: officeImage,
  },
  hero: {
    eyebrow: 'Technology & business consulting',
    title: 'Technology thinking, grounded in business.',
    text: 'TechSalem is a technology and business consulting partner for organizations seeking a clearer path through change.',
    image: officeImage,
    primaryCta: { label: 'Start a conversation', href: '/contact' },
    secondaryCta: { label: 'Book a consultation', href: '/booking' },
  },
  perspective: {
    label: '01 / Our perspective',
    title: 'We make complexity easier to act on.',
    titleAccent: 'About TechSalem.',
    text: 'Our role is to connect strategic intent with practical progress. We listen carefully, frame the right questions, and shape solutions around the realities of your organization.',
  },
  stat: {
    image: {
      src: '/images/about-quote-office.jpg',
      alt: 'Team working at desks in a bright, modern office',
      width: 1800,
      height: 1350,
    },
    value: '100%',
    label: 'Focused on your reality',
  },
  values: {
    label: '02 / What we value',
    items: values,
  },
  capabilities: {
    label: '03 / Our capabilities',
    title: 'A focused, human approach.',
    titleAccent: 'Every day.',
    text: 'We combine technical understanding with clear business thinking—bringing the right expertise to each stage of the engagement.',
    items: [
      {
        title: 'Understand the business context',
        text: 'We explore your goals, challenges and operating environment before recommending the next step.',
      },
      {
        title: 'Clarify technology decisions',
        text: 'We translate technical choices into clear benefits, risks, costs and practical implications.',
      },
      {
        title: 'Shape practical solutions',
        text: 'We turn requirements and opportunities into solutions designed for your organisation and its people.',
      },
      {
        title: 'Build modern digital experiences',
        text: 'We develop clear, reliable websites and applications that support real business needs and can grow over time.',
      },
      {
        title: 'Improve ways of working',
        text: 'We identify inefficiencies, simplify processes and connect digital improvements with measurable outcomes.',
      },
      {
        title: 'Support lasting change',
        text: 'We stay close to implementation, handover and follow-through so progress continues beyond delivery.',
      },
    ],
  },
  quote: {
    image: officeImage,
    label: 'What we believe',
    text: '“No unnecessary layers. No one-size-fits-all playbook. Just thoughtful expertise applied where it matters.”',
    source: 'TechSalem / Sweden',
  },
};
