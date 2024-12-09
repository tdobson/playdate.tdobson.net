import { Container, Stack } from '@mantine/core';
import { Layout } from '../components/Layout/Layout';
import { EventInfo } from '../components/EventInfo/EventInfo';
import { FAQ } from '../components/FAQ/FAQ';
import eventsConfig from '../config/events.json';
import faqConfig from '../config/faq.json';

export default function DadsPlayinPage() {
  // Create an event object from the config that matches the Event type
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
