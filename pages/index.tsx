import { Container, Stack, Title, SimpleGrid, Card, Text, Group } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import Link from 'next/link';
import { Layout } from '../components/Layout/Layout';
import eventsConfig from '../config/events.json';

export default function HomePage() {
  const upcomingEvents = eventsConfig.events.filter(event => {
    const nextDate = new Date(event.dates[0].date);
    return nextDate >= new Date();
  });

  return (
    <Layout>
      <Container size="md">
        <Stack gap="xl">
          <Title>Upcoming Play-ins</Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                shadow="sm"
                p="xl"
                radius="md"
                withBorder
                component={Link}
                href={`/${event.type}-playin`}
                style={{ textDecoration: 'none' }}
              >
                <Group>
                  <IconCalendar size={32} color={event.type === 'dads' ? 'var(--mantine-color-grape-6)' : 'var(--mantine-color-pink-6)'} />
                  <div>
                    <Title order={3} c={event.type === 'dads' ? 'grape' : 'pink'}>{event.title}</Title>
                    <Text c="dimmed" size="sm">Next: {event.dates[0].date}</Text>
                  </div>
                </Group>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Layout>
	);
}
