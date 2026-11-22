import { Section } from '@/components/ui/Section';
import type { HomePageContent } from '@/types/content';

interface HomeRolesProps {
  content: HomePageContent['roles'];
}

export function HomeRoles({ content }: HomeRolesProps) {
  return (
    <Section labelledBy="home-roles-title" className="bg-white py-20 lg:py-24">
      <h2 id="home-roles-title" className="text-h2 text-zinc-950">
        {content.title}
      </h2>

      <ul data-reveal className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14">
        {content.items.map((role) => (
          <li
            key={role.title}
            className="flex min-h-28 items-center justify-center rounded-lg bg-purple px-6 text-center text-title-24 font-extrabold text-white sm:min-h-32"
          >
            {role.title}
          </li>
        ))}
      </ul>
    </Section>
  );
}
