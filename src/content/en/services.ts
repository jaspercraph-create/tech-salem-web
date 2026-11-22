import type { ServicesPageContent } from '@/types/content';

const heroImage = {
  src: '/images/hero-office-wide.png',
  alt: 'Open-plan office with people working at desks',
  width: 1920,
  height: 720,
} satisfies ServicesPageContent['hero']['image'];

const processText = 'Every engagement starts with context—not a predetermined answer.';

export const services: ServicesPageContent = {
  meta: {
    title: 'Services',
    description:
      "TechSalem's services in custom web development, business consulting and digital transformation—from strategy to practical solutions.",
    image: heroImage,
  },
  hero: {
    eyebrow: 'Consulting & website development',
    title: 'Practical expertise for meaningful progress.',
    text: 'We help organisations understand their real needs, prioritise the next step and turn technology into measurable business improvement. Our services include custom website development, business consulting and digital transformation.',
    image: heroImage,
    primaryCta: { label: 'Start a conversation', href: '/contact' },
  },
  perspective: {
    label: '01 / Our perspective',
    title: 'A clear focus. One connected view.',
    titleAccent: 'Sustainable outcomes.',
    text: 'We start with the organisation’s goals and current situation. From there, we shape a practical engagement where technology, processes and people work together to create lasting value.',
  },
  services: {
    areaLabel: 'Service',
    items: [
      {
        title: 'Custom website development',
        text: 'We design and build modern websites and digital applications around your business goals—from clear, streamlined solutions to advanced, integration-led platforms.',
        tone: 'navy',
      },
      {
        title: 'Technology and business consulting',
        text: 'Get a clear decision framework for new systems, digital investments or organisational change. We connect technology choices and delivery options with value, risk and long-term impact.',
        tone: 'lavender',
      },
      {
        title: 'Digital transformation and optimisation',
        text: 'We examine your workflows and existing systems, identify bottlenecks and help prioritise improvements that simplify everyday work and strengthen the organisation.',
        tone: 'red',
      },
    ],
    imageCard: {
      image: {
        src: '/images/services-card-office.jpg',
        alt: 'Bright office with workstations and a lounge area',
        width: 1600,
        height: 1200,
      },
      text: 'Expertise shaped around your context.',
    },
  },
  process: {
    label: '02 / From need to outcome',
    title: 'From question to clear direction.',
    text: processText,
    steps: [
      {
        title: 'Understand the business need',
        text: 'We explore your goals, challenges and current environment through open discussion and a shared analysis of what needs to improve.',
      },
      {
        title: 'Shape a focused engagement',
        text: 'Together, we prioritise the right scope, approach and deliverables—with clear ownership, timelines and expected outcomes.',
      },
      {
        title: 'Deliver practical next steps',
        text: 'We turn decisions into practical action and hand over the solution so ongoing ownership, operation and development remain clear.',
      },
    ],
  },
  next: {
    label: '03 / Next step',
    title: 'The right engagement starts with the right question.',
    text: 'Tell us what you need to change, improve or understand. We will help shape the next step.',
    link: { label: 'Start a conversation', href: '/contact' },
  },
};
