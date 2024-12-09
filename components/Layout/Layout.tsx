import { AppShell, Burger, Group, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCalendar, IconBabyBottle, IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const colors = {
  home: '#228BE6',    // blue
  schedule: '#40C057', // green
  dadsPlayin: '#BE4BDB', // grape
  regularPlayin: '#E64980'  // pink
};

export function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure();
  const router = useRouter();

  const links = [
    { icon: IconHome, label: 'Home', href: '/', color: colors.home },
    { icon: IconCalendar, label: 'Schedule', href: '/schedule', color: colors.schedule },
    { icon: IconBabyBottle, label: 'Dads Play-in', href: '/dads-playin', color: colors.dadsPlayin },
    { icon: IconBabyBottle, label: 'Regular Play-in', href: '/regular-playin', color: colors.regularPlayin },
  ];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px={{ base: 'md', sm: 'xl' }} align="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 style={{ margin: 0, cursor: 'pointer' }}>Strines Play-in 👶</h1>
          </Link>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {links.map((link) => (
          <NavLink
            key={link.href}
            component={Link}
            href={link.href}
            label={link.label}
            leftSection={<link.icon size="1.2rem" stroke={1.5} style={{ color: link.color }} />}
            active={router.pathname === link.href}
            onClick={() => close()}
            styles={(theme) => ({
              root: {
                '&[data-active]': {
                  backgroundColor: `${link.color}19`,
                },
              },
              label: {
                fontSize: '1.1rem',
              }
            })}
          />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
