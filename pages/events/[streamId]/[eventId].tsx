import { GetStaticProps, GetStaticPaths } from 'next';
import { Container, Stack, Title, Card, Text, Button, Group, Accordion } from '@mantine/core';
import { 
  IconMapPin, 
  IconBus, 
  IconTrain, 
  IconCar, 
  IconClock, 
  IconCalendar,
  IconMail,
  IconBrandFacebook,
  IconExternalLink
} from '@tabler/icons-react';
import { Layout } from '../../../components/Layout/Layout';
import { FAQ } from '../../../components/FAQ/FAQ';
import eventsConfig from '../../../config/events.json';
import type { EventStream, EventDate } from '../../../types/events';

interface EventPageProps {
  stream: EventStream;
  event: EventDate;
}

export default function EventPage({ stream, event }: EventPageProps) {
  return (
    <Layout>
      <Container size="md">
        <Stack gap="xl">
          <Title>{stream.title}</Title>
          
          <Card withBorder>
            <Stack gap="md">
              <Group>
                <IconCalendar size={24} />
                <Title order={2}>Event Details</Title>
              </Group>
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
            </Stack>
          </Card>

          <Card withBorder>
            <Stack gap="md">
              <Group>
                <IconMapPin size={24} />
                <Title order={2}>Location</Title>
              </Group>
              
              {/* Primary Location Info */}
              <Stack gap="xs">
                <Text size="lg" fw={500}>
                  {stream.location.address === "272 Strines Road" ? "Strines" : stream.location.address}
                </Text>
                <Text size="sm" c="dimmed">{stream.location.postcode}</Text>
                
                <Button 
                  component="a" 
                  href={stream.location.mapsUrl}
                  target="_blank"
                  variant="light"
                  leftSection={<IconMapPin size={20} />}
                  mt="xs"
                >
                  Open in Maps
                </Button>
              </Stack>

              {/* Transport Options Accordion */}
              <Accordion variant="contained" mt="md">
                <Accordion.Item value="car">
                  <Accordion.Control icon={<IconCar size={20} />}>
                    Arriving by Car
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text size="sm">{stream.location.parking}</Text>
                  </Accordion.Panel>
                </Accordion.Item>

                {stream.location.transport?.bus && (
                  <Accordion.Item value="bus">
                    <Accordion.Control icon={<IconBus size={20} />}>
                      Bus Route 358
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text size="sm">{stream.location.transport.bus.description}</Text>
                        <Group>
                          <Button 
                            component="a"
                            href={stream.location.transport.bus.timetableUrl}
                            target="_blank"
                            variant="light"
                            size="xs"
                            leftSection={<IconExternalLink size={16} />}
                          >
                            View Timetable
                          </Button>
                          <Button
                            component="a"
                            href={stream.location.transport.bus.liveTimesUrl}
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

                {stream.location.transport?.train && (
                  <Accordion.Item value="train">
                    <Accordion.Control icon={<IconTrain size={20} />}>
                      Train to Strines
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text size="sm">
                          {stream.location.transport.train.station} Station is a {stream.location.transport.train.walkTime} walk away.
                        </Text>
                        <Text size="sm">
                          {stream.location.transport.train.connections}
                        </Text>
                        <Button 
                          component="a"
                          href={stream.location.transport.train.timetableUrl}
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

          <Card withBorder>
            <Stack gap="md">
              <Title order={2}>Contact</Title>
              <Group>
                <Button 
                  component="a"
                  href={`mailto:${stream.contact.email.join('')}`}
                  variant="light"
                  leftSection={<IconMail size={20} />}
                >
                  Email Us
                </Button>
                <Button 
                  component="a"
                  href={stream.contact.facebook}
                  target="_blank"
                  variant="light"
                  leftSection={<IconBrandFacebook size={20} />}
                >
                  Message on Facebook
                </Button>
              </Group>
            </Stack>
          </Card>

          <Card withBorder>
            <Stack gap="md">
              <Title order={2}>FAQ</Title>
              <FAQ questions={stream.faq} />
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = eventsConfig.eventStreams.flatMap(stream => 
    stream.dates.map(event => ({
      params: { 
        streamId: stream.id,
        eventId: event.id
      }
    }))
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<EventPageProps> = async ({ params }) => {
  const stream = eventsConfig.eventStreams.find(s => s.id === params?.streamId);
  if (!stream) {
    return { notFound: true };
  }

  const event = stream.dates.find(d => d.id === params?.eventId);
  if (!event) {
    return { notFound: true };
  }

  return { props: { stream, event } };
};
