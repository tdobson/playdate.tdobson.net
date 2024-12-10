import { GetStaticProps, GetStaticPaths } from 'next';
import { Container, Stack, Title, Card, Text, Button, Group } from '@mantine/core';
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
              <Title order={2}>Event Details</Title>
              <Text fw={500}>
                {new Date(event.date).toLocaleDateString('en-GB', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </Text>
              <Text>{event.time}</Text>
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
