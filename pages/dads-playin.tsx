import { Container, Stack } from '@mantine/core';
import { Layout } from '../components/Layout/Layout';
import { EventInfo } from '../components/EventInfo/EventInfo';
import { FAQ } from '../components/FAQ/FAQ';
import eventsConfig from '../config/events.json';
import faqConfig from '../config/faq.json';

export default function DadsPlayinPage() {
  const event = eventsConfig.events.find(e => e.type === 'dads');

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
