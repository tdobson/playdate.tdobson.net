import { Container, Stack } from '@mantine/core';
import { Layout } from '../components/Layout/Layout';
import { EventInfo } from '../components/EventInfo/EventInfo';
import { FAQ } from '../components/FAQ/FAQ';
import eventsConfig from '../config/events.json';
import faqConfig from '../config/faq.json';
import type { EventsConfig } from '../types/events.types';

export default function DadsPlayinPage() {
  const config = eventsConfig as EventsConfig;
  
  if (!config.eventStreams?.length) {
    return (
      <Layout>
        <Container size="md">
          <Text>Event not found</Text>
        </Container>
      </Layout>
    );
  }

  const dadsStream = config.eventStreams.find(stream => stream.id === 'dads-club');
  
  if (!dadsStream) {
    return (
      <Layout>
        <Container size="md">
          <Text>Dads club event stream not found</Text>
        </Container>
      </Layout>
    );
  }

  const event = {
    id: 'dads-playin',
    type: 'dads' as const,
    title: eventsConfig.title,
    hosts: eventsConfig.hosts,
    dates: eventsConfig.dates.filter(d => d.type === 'dads').map(d => ({
      date: d.date,
      time: d.time
    })),
    location: eventsConfig.location,
    contact: eventsConfig.contact,
    details: eventsConfig.details
  };

  return (
    <Layout>
      <Container size="md">
        <Stack gap="xl">
          <EventInfo event={event} />
          <FAQ questions={faqConfig.questions} />
        </Stack>
      </Container>
    </Layout>
  );
}
