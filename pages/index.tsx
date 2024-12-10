import { Container, Stack, Title, Timeline, Text, Button, Group } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import Link from 'next/link';
import { Layout } from '../components/Layout/Layout';
import eventsConfig from '../config/events.json';
import type { EventsConfig } from '../types/questions';

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
          <Title>Upcoming Play-ins</Title>

          <Timeline active={-1}>
            {allFutureEvents.map((event) => (
              <Timeline.Item
                key={event.id}
                bullet={<IconCalendar size={16} />}
                title={
                  <Group gap="xs">
                    <Link 
                      href={`/events/${event.streamId}`} 
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Text fw={500}>{event.streamTitle}</Text>
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
                <Button
                  component={Link}
                  href={`/events/${event.streamId}/${event.id}`}
                  variant="light"
                  size="xs"
                  mt="xs"
                >
                  View Details
                </Button>
              </Timeline.Item>
            ))}
          </Timeline>

          <Stack gap="md">
            {eventsConfig.eventStreams.map(stream => (
              <Button
                key={stream.id}
                component={Link}
                href={`/events/${stream.id}`}
                variant="outline"
                fullWidth
              >
                View all {stream.title} dates
              </Button>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
}
