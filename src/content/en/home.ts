import type { HomePageContent } from '@/types/content';

const heroImage = {
  src: '/images/home-hero-team-meeting.jpg',
  alt: 'Business team discussing a technology strategy around a laptop',
  width: 1024,
  height: 1280,
  // Phones/tablets: keep the seated woman and man in view.
  focalPoint: '68% 30%',
} satisfies HomePageContent['hero']['image'];

export const home: HomePageContent = {
  meta: {
    title: 'TechSalem | Technology & business consulting',
    absoluteTitle: true,
    description:
      'TechSalem is a technology and business consulting firm in Sweden. We help businesses navigate technology, optimize operations and find smarter solutions.',
    image: heroImage,
  },
  hero: {
    eyebrow: 'Technology & business consulting',
    title: 'Driving business forward through smarter technology.',
    text: 'We help businesses navigate technology, optimize operations, and discover smarter solutions that create meaningful business impact.',
    image: heroImage,
    primaryCta: { label: 'Explore our services', href: '/services' },
    secondaryCta: { label: 'Book a consultation', href: '/booking' },
  },
  services: {
    eyebrow: 'Services',
    title: 'Where we make the greatest difference',
    text: 'Practical expertise and tailored solutions that help businesses solve challenges and create lasting results.',
    cards: [
      {
        icon: 'network',
        areaLabel: 'Development',
        title: 'Custom website development',
        text: 'Modern, tailored websites and digital solutions—from clear, simple sites to advanced, complex applications.',
        link: { label: 'Learn more', href: '/services' },
      },
      {
        icon: 'workflow',
        areaLabel: 'Consulting',
        title: 'Technology and business consulting',
        text: 'Clear decision support for systems, digital investments and organisational change—connected to business value, risk and long-term sustainability.',
        link: { label: 'Learn more', href: '/services' },
      },
      {
        icon: 'chart-column',
        areaLabel: 'Improvement',
        title: 'Digital transformation and optimisation',
        text: 'We examine workflows and existing systems, identify bottlenecks and prioritise improvements that simplify day-to-day operations.',
      },
      {
        icon: 'shield-check',
        areaLabel: 'IT support',
        title: 'Reliable operations and ongoing support',
        text: 'Practical technical support that helps organisations reduce disruptions, resolve issues quickly and work more securely and predictably.',
        link: { label: 'Explore support', href: '/support/support-01' },
      },
    ],
  },
  about: {
    image: {
      src: '/images/home-about-presentation.jpg',
      alt: 'Consultant presenting a strategy on a screen to a colleague',
      width: 1200,
      height: 1024,
    },
    badge: { label: 'Our focus', text: 'Clear decisions. Meaningful impact.' },
    eyebrow: 'About TechSalem',
    title: 'Your Partner in Technology and Business Transformation.',
    paragraphs: [
      "TechSalem partners with companies to navigate technology, strengthen operations, and turn ideas into working solutions. Our approach is practical, business-first, and shaped around each client's unique situation.",
      'From the first conversation to a delivered result, we stay close to your goals and make every step of the journey clear and predictable.',
    ],
    link: { label: 'Discover TechSalem', href: '/about' },
  },
  why: {
    eyebrow: 'Why TechSalem',
    title: 'Built around your business, not a template.',
    items: [
      {
        title: 'Tailored business solutions',
        text: "A clear, collaborative approach with your organization's goals at the center.",
      },
      {
        title: 'Professional expertise',
        text: "A clear, collaborative approach with your organization's goals at the center.",
      },
      {
        title: 'Strategic thinking',
        text: "A clear, collaborative approach with your organization's goals at the center.",
      },
      {
        title: 'Reliable partnership',
        text: "A clear, collaborative approach with your organization's goals at the center.",
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'The right help, right when you need it.',
    image: {
      src: '/images/6305419613449164358.jpg',
      alt: 'TechSalem IT support banner with two people working at computers',
      width: 1254,
      height: 1254,
    },
    cards: [
      {
        icon: 'headphones',
        title: 'IT support for home',
        text: 'Practical support for computers, networks and everyday IT—on site or remotely.',
        link: { label: 'Explore support', href: '/support/support-01' },
      },
      {
        icon: 'headphones',
        title: 'IT support for business',
        text: 'Reliable IT operations and practical support that keep small businesses productive and secure.',
        link: { label: 'Explore support', href: '/support/support-02' },
      },
    ],
  },
  cta: {
    title: "Let's build what's next. Together.",
    text: "Have a business challenge or a new idea? Let's discuss how TechSalem can help you move forward.",
    button: { label: 'Book a consultation', href: '/booking' },
  },
  roles: {
    title: 'Some of the roles we work with',
    items: [
      { title: 'Cloud Engineer' },
      { title: 'DevOps Engineer' },
      { title: 'Backend Developer' },
      { title: 'Frontend Developer' },
      { title: 'Infrastructure Specialist' },
      { title: 'Cybersecurity Consultant' },
      { title: 'Azure Specialist' },
      { title: 'System Architect' },
    ],
  },
};
