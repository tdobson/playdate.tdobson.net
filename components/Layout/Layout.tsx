import React from 'react';
import { AppShell, Burger, Group, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCalendar, IconBabyBottle, IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import eventsConfig from '../../config/events.json';

const colors = {
  dadsClub: '#BE4BDB',    // grape
  thursdayPlayin: '#E64980'  // pink
};

export function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure();
  const router = useRouter();

  // Create links array directly from event streams
  const links = eventsConfig.eventStreams.map(stream => ({
    icon: IconBabyBottle,
    label: stream.title,
    href: `/events/${stream.id}`,
    color: stream.id === 'dads-club' ? colors.dadsClub : colors.thursdayPlayin
  }));

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
            <h1 style={{ margin: 0, cursor: 'pointer' }}>Strines Playdate 👶</h1>
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
            styles={{
              root: {
                '&[data-active="true"]': {
                  backgroundColor: `${link.color}19`,
                },
              },
              label: {
                fontSize: '1.1rem',
              }
            }}
          />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
