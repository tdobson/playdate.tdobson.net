import { Container, Stack, Title, Timeline, Text, Button, Group, Paper, SimpleGrid } from '@mantine/core';
import { IconCalendar, IconBabyBottle } from '@tabler/icons-react';
import Link from 'next/link';
import { Layout } from '../components/Layout/Layout';
import eventsConfig from '../config/events.json';
import type { EventsConfig } from '../types/events';

export default function SchedulePage() {
  // Type assertion and validation
  const config = eventsConfig as EventsConfig;

  if (!config.eventStreams?.length) {
    return (
      <Layout>
        <Container size="md">
          <Text>No events currently scheduled</Text>
        </Container>
      </Layout>
    );
  }

  // Combine all future dates from all streams
  const allFutureEvents = config.eventStreams.flatMap(stream =>
    stream.dates
      .filter(date => new Date(date.date) >= new Date())
      .map(date => ({
        ...date,
        streamId: stream.id,
        streamTitle: stream.title
      }))
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Layout>
      <Container size="md">
        <Stack gap="xl">
          <Title>Upcoming Playdates</Title>

          <Timeline active={-1}>
            {allFutureEvents.map((event) => (
              <Timeline.Item
                key={event.id}
                bullet={<IconCalendar size={20} />}
                bulletSize={32}
                title={
                  <Group gap="xs">
                    <Link
                      href={`/events/${event.streamId}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Text fw={500}>
                        {event.streamTitle}
                      </Text>
                    </Link>
                  </Group>
                }
              >
                <Text size="sm" c="dimmed">
                  {new Date(event.date).toLocaleDateString('en-GB', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </Text>
                <Text size="sm" c="dimmed">{event.time}</Text>
                <Text size="sm" c="dimmed">
                  {config.eventStreams.find(s => s.id === event.streamId)?.location.address === "272 Strines Road" ? "Strines" : config.eventStreams.find(s => s.id === event.streamId)?.location.address}
                </Text>
                <Button
                  component={Link}
                  href={`/events/${event.streamId}/${event.id}`}
                  variant="light"
                  size="xs"
                  mt="xs"
                  color="gray"
                >
                  View Details
                </Button>
              </Timeline.Item>
            ))}
          </Timeline>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            {eventsConfig.eventStreams.map(stream => (
              <Paper
                key={stream.id}
                shadow="sm"
                p="xl"
                radius="md"
                withBorder
                component={Link}
                href={`/events/${stream.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Group>
                  <IconBabyBottle size={30} color={stream.id === 'dads-club' ? 'var(--mantine-color-grape-6)' : 'var(--mantine-color-pink-6)'} />
                  <div>
                    <Title order={3} c={stream.id === 'dads-club' ? 'grape' : 'pink'}>
                      {stream.id === 'dads-club' ? "Dad's Club Playdates" : "Thursday Playdates"}
                    </Title>
                    <Text c="dimmed" size="sm">View all dates</Text>
                  </div>
                </Group>
              </Paper>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Layout>
  );
}
