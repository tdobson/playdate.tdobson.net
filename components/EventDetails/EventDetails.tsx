import { Stack, Title, Card, Text, Group } from '@mantine/core';
import { IconClock, IconCalendar } from '@tabler/icons-react';
import type { EventStream, EventDate } from '../../types/events';

interface EventDetailsProps {
  stream: EventStream;
  event?: EventDate;  // Optional - only provided on single event pages
}

export function EventDetails({ stream, event }: EventDetailsProps) {
  return (
    <Card withBorder>
      <Stack gap="md">
        <Group>
          <IconCalendar size={24} />
          <Title order={2}>Event Details</Title>
        </Group>

        {event && (
          <>
            <Group>
              <IconCalendar size={20} color="gray" />
              <Text fw={500}>
                {new Date(event.date).toLocaleDateString('en-GB', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </Text>
            </Group>
            <Group>
              <IconClock size={20} color="gray" />
              <Text>{event.time}</Text>
            </Group>
          </>
        )}

        <Text>{stream.details.description}</Text>
        
        <Group>
          <Text fw={500}>Age Range:</Text>
          <Text>{stream.details.ageRange}</Text>
        </Group>
        
        <Group>
          <Text fw={500}>Cost:</Text>
          <Text>{stream.details.cost}</Text>
        </Group>
      </Stack>
    </Card>
  );
}
