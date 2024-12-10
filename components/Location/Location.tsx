import { Stack, Title, Card, Text, Button, Group, Accordion } from '@mantine/core';
import { 
  IconMapPin, 
  IconBus, 
  IconTrain, 
  IconCar, 
  IconExternalLink,
  IconClock 
} from '@tabler/icons-react';
import type { EventStream } from '../../types/events';

interface LocationProps {
  location: EventStream['location'];
  variant?: 'full' | 'compact';
}

export function Location({ location, variant = 'full' }: LocationProps) {
  const formattedAddress = location.address === "272 Strines Road" 
    ? "272 Strines Road, Strines, SK6 7GB"
    : location.address;

  if (variant === 'compact') {
    return (
      <Card withBorder>
        <Stack gap={8}>
        <Group>
          <IconMapPin size={20} color="gray" />
          <Text>{formattedAddress}</Text>
        </Group>
        
        <Group>
          <IconCar size={20} color="gray" />
          <Text size="sm">{location.parking}</Text>
        </Group>

        {location.transport?.bus && (
          <Group>
            <IconBus size={20} color="gray" />
            <Stack gap={4}>
              <Text>Bus {location.transport.bus.route}</Text>
              <Text size="sm" c="dimmed">{location.transport.bus.description}</Text>
              <Group>
                <Button 
                  component="a"
                  href={location.transport.bus.timetableUrl}
                  target="_blank"
                  variant="light"
                  size="xs"
                  leftSection={<IconExternalLink size={16} />}
                >
                  View Timetable
                </Button>
                <Button
                  component="a"
                  href={location.transport.bus.liveTimesUrl}
                  target="_blank"
                  variant="light"
                  size="xs"
                  leftSection={<IconClock size={16} />}
                >
                  Live Times
                </Button>
              </Group>
            </Stack>
          </Group>
        )}

        <Button 
          component="a" 
          href={location.mapsUrl}
          target="_blank"
          variant="light"
          leftSection={<IconMapPin size={20} />}
        >
          Open in Maps
        </Button>
      </Stack>
    );
  }

  return (
    <Card withBorder>
      <Stack gap={16}>
      <Group>
        <IconMapPin size={24} />
        <Title order={2}>Location</Title>
      </Group>
      
      <Stack gap="xs">
        <Text size="lg" fw={500}>{formattedAddress}</Text>
        
        <Button 
          component="a" 
          href={location.mapsUrl}
          target="_blank"
          variant="light"
          leftSection={<IconMapPin size={20} />}
          mt="xs"
        >
          Open in Maps
        </Button>
      </Stack>

      <Accordion variant="contained" mt="md">
        <Accordion.Item value="car">
          <Accordion.Control icon={<IconCar size={20} />}>
            Arriving by Car
          </Accordion.Control>
          <Accordion.Panel>
            <Text size="sm">{location.parking}</Text>
          </Accordion.Panel>
        </Accordion.Item>

        {location.transport?.bus && (
          <Accordion.Item value="bus">
            <Accordion.Control icon={<IconBus size={20} />}>
              Bus Route {location.transport.bus.route}
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="sm">
                <Text size="sm">{location.transport.bus.description}</Text>
                <Group>
                  <Button 
                    component="a"
                    href={location.transport.bus.timetableUrl}
                    target="_blank"
                    variant="light"
                    size="xs"
                    leftSection={<IconExternalLink size={16} />}
                  >
                    View Timetable
                  </Button>
                  <Button
                    component="a"
                    href={location.transport.bus.liveTimesUrl}
                    target="_blank"
                    variant="light"
                    size="xs"
                    leftSection={<IconClock size={16} />}
                  >
                    Live Times
                  </Button>
                </Group>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        )}

        {location.transport?.train && (
          <Accordion.Item value="train">
            <Accordion.Control icon={<IconTrain size={20} />}>
              Train to Strines
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="sm">
                <Text size="sm">
                  {location.transport.train.station} Station is a {location.transport.train.walkTime} walk away.
                </Text>
                <Text size="sm">
                  {location.transport.train.connections}
                </Text>
                <Button 
                  component="a"
                  href={location.transport.train.timetableUrl}
                  target="_blank"
                  variant="light"
                  size="xs"
                  leftSection={<IconExternalLink size={16} />}
                >
                  View Train Times
                </Button>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        )}
      </Accordion>
      </Stack>
    </Card>
  );
}
