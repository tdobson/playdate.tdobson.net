import { GetStaticProps, GetStaticPaths } from 'next';
import { Container, Stack, Title, Card, Text, Button, Group } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import Link from 'next/link';
import { Layout } from '../../../components/Layout/Layout';
import { FAQ } from '../../../components/FAQ/FAQ';
import eventsConfig from '../../../config/events.json';
import type { EventStream } from '../../../types/events';

interface EventStreamPageProps {
  stream: EventStream;
}

export default function EventStreamPage({ stream }: EventStreamPageProps) {
  const futureEvents = stream.dates
    .filter(date => new Date(date.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Layout>
      <Container size="md">
        <Stack gap="xl">
          <Title>{stream.title}</Title>

          <Card withBorder>
            <Stack gap="md">
              <Title order={2}>About</Title>
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

          <Card withBorder>
            <Stack gap="md">
              <Title order={2}>Location</Title>
              <Text>{stream.location.address}</Text>
              <Text>{stream.location.postcode}</Text>
              <Text size="sm">{stream.location.parking}</Text>
              <Button 
                component="a" 
                href={stream.location.mapsUrl}
                target="_blank"
                variant="light"
              >
                Open in Maps
              </Button>
            </Stack>
          </Card>

          <Card withBorder>
            <Stack gap="md">
              <Title order={2}>Upcoming Dates</Title>
              {futureEvents.map(event => (
                <Card key={event.id} withBorder>
                  <Group position="apart">
                    <Stack gap="xs">
                      <Text fw={500}>
                        {new Date(event.date).toLocaleDateString('en-GB', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </Text>
                      <Text size="sm">{event.time}</Text>
                    </Stack>
                    <Button
                      component={Link}
                      href={`/events/${stream.id}/${event.id}`}
                      variant="light"
                    >
                      View Details
                    </Button>
                  </Group>
                </Card>
              ))}
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
                >
                  Email Us
                </Button>
                <Button 
                  component="a"
                  href={stream.contact.facebook}
                  target="_blank"
                  variant="light"
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
  const paths = eventsConfig.eventStreams.map(stream => ({
    params: { streamId: stream.id }
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<EventStreamPageProps> = async ({ params }) => {
  const stream = eventsConfig.eventStreams.find(s => s.id === params?.streamId);
  if (!stream) {
    return { notFound: true };
  }
  return { props: { stream } };
};
