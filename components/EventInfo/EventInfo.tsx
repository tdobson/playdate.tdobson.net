import { Card, Stack, Title, Text, Group, Badge } from '@mantine/core';
import { IconCalendar, IconClock, IconBabyBottle } from '@tabler/icons-react';
import { EventStream, EventDate } from '../../types/events';

interface EventInfoProps {
  stream: EventStream;
  event: EventDate;
}

export function EventInfo({ stream, event }: EventInfoProps) {
  return (
    <Card shadow="sm" p="xl" radius="md" withBorder>
      <Stack gap="md">
        <Title order={1} ta="center">{stream.title}</Title>
        <Text size="lg" ta="center">Hosted by {stream.hosts.join(", ")}</Text>

        <Card withBorder p="md">
          <Group justify="space-between">
            <Group>
              <IconCalendar size={20} />
              <Text>{event.date}</Text>
              <IconClock size={20} />
              <Text>{event.time}</Text>
            </Group>
            <Badge color={stream.id === 'dads-club' ? 'grape' : 'pink'} variant="light">
              {stream.id === 'dads-club' ? 'Just For Dads' : 'Regular'}
            </Badge>
          </Group>
        </Card>

        <Group justify="center" gap="xs">
          <IconBabyBottle size={20} />
          <Text>Ages {stream.details.ageRange}</Text>
          <Text>•</Text>
          <Text>{stream.details.cost}</Text>
        </Group>
      </Stack>
    </Card>
  );
}
