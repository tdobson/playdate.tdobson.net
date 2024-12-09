import { Card, Stack, Title, Text, Group, Badge } from '@mantine/core';
import { IconCalendar, IconClock, IconBabyBottle } from '@tabler/icons-react';
import { Event } from '../../types/events';

interface EventInfoProps {
  event: Event;
}

export function EventInfo({ event }: EventInfoProps) {
  return (
    <Card shadow="sm" p="xl" radius="md" withBorder>
      <Stack gap="md">
        <Title order={1} ta="center">{event.title}</Title>
        <Text size="lg" ta="center">Hosted by {event.hosts.join(", ")}</Text>

        {event.dates.map((date, index) => (
          <Card key={date.date} withBorder p="md">
            <Group justify="space-between">
              <Group>
                <IconCalendar size={20} />
                <Text>{date.date}</Text>
                <IconClock size={20} />
                <Text>{date.time}</Text>
              </Group>
              <Badge color={event.type === 'dads' ? 'grape' : 'pink'} variant="light">
                {event.type === 'dads' ? 'Just For Dads' : 'Regular'}
              </Badge>
            </Group>
          </Card>
        ))}

        <Group justify="center" gap="xs">
          <IconBabyBottle size={20} />
          <Text>Ages {event.details.ageRange}</Text>
          <Text>•</Text>
          <Text>{event.details.cost}</Text>
        </Group>
      </Stack>
    </Card>
  );
}
