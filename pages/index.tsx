import React from 'react';
import { Container, Title, Text, Stack, Card, Group, Button, Badge, Box } from '@mantine/core';
import { IconCalendar, IconClock, IconBabyBottle, IconMail, IconBrandFacebook } from '@tabler/icons-react';
import { FAQ } from '../components/FAQ/FAQ';

export default function PlayDatePage() {
  const email = ["timandjen", "@", "tdobson.net"].join("");
  
  const playDates = [
    { date: "14th December", time: "2-5pm", type: "dads" },
    { date: "21st December", time: "2-5pm", type: "dads" },
  ];

  const questions = [
    {
      q: "Why are you doing this?",
      a: "We found it difficult to arrange playdates with people due to all the challenges of arranging diaries. This avoids the need to do that, and makes it much easier to welcome people who are free, and meetup with people more who we might not see so much",
    },
    {
      q: "Do I need to RSVP?",
      a: "Nope - just turn up. If you make it yay, if life gets in the way, such is life!",
    },
    {
      q: "What's the age range?",
      a: "0 -> 2ish is probably the best age, but older might be fine - drop us a message",
    },
    {
      q: "Where can we park?",
      a: "Park on road by Strines Church - 30 second walk away",
    },
    {
      q: "What will we do?",
      a: "We have some toys, and the kids can play around whilst the adults chat",
    },
    {
      q: "What about outdoor play?",
      a: "If the weather's nice, we have a slide and baby swing! The ground is quite boggy though, so full outdoor suits and outdoor shoes or wellies are recommended. We also have an indoor trampoline and plenty of room indoors.",
    },
    {
      q: "How many people are coming?",
      a: "As many as come. If it's many, great, if it's a few - also great.",
    },
    {
      q: "Can I bring my partner?",
      a: "Sure.",
    },
    {
      q: "I don't know you very well, can I come?",
      a: "Yep - please do. If you're reading this, and your child is in the age range - please do",
    },
    {
      q: "Shall I bring food?",
      a: "We'll do some snacky finger food like toast for the youth, but if there's snacks you think you or other adults would enjoy, please feel free to bring it along. Please only bring things you'd be willing to take home.",
    },
    {
      q: "What if I'm late?",
      a: "That's chill. Arrive when you arrive.",
    },
    {
      q: "Can I invite my friend with their kids?",
      a: "Probably, but drop us a line first",
    },
    {
      q: "Can we bring this specific toy or toys?",
      a: "err, sure? We have plenty, and anything you bring has a risk of getting lost - but if you think it'd be awesome, or work well for your child - please do!",
    },
    {
      q: "I can't make this one, will you do it again?",
      a: "Hopefully!",
    },
    {
      q: "Does it cost anything?",
      a: "Don't be silly! Absolutely not.",
    },
    {
      q: "Can I come if I've never met you before?",
      a: "Probably not this time - generally this one is aimed as people at people we know.",
    },
  ];

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Card shadow="sm" p="xl" radius="md" withBorder>
          <Stack gap="md">
            <Title order={1} ta="center">Baby & Toddler Play-in</Title>
            <Text size="lg" ta="center">Hosted by Tim, Jen and James</Text>
            
            {playDates.map((date, index) => (
              <Card key={index} withBorder p="md">
                <Group justify="space-between">
                  <Group>
                    <IconCalendar size={20} />
                    <Text>{date.date}</Text>
                    <IconClock size={20} />
                    <Text>{date.time}</Text>
                  </Group>
                  <Badge color="blue" variant="light">
                    {date.type === 'dads' ? 'Just For Dads' : 'Regular'}
                  </Badge>
                </Group>
              </Card>
            ))}

            <Group justify="center" gap="xs">
              <IconBabyBottle size={20} />
              <Text>Ages 0-2</Text>
              <Text>•</Text>
              <Text>Free Event</Text>
            </Group>
          </Stack>
        </Card>

        <Card shadow="sm" p="xl" radius="md" withBorder>
          <Text size="lg" ta="center" mb="xl">
            We're hosting a baby and toddler play-in at our house, and you're invited!
          </Text>
          
          <Box mb="xl">
            <Text component="a" 
                  href="https://maps.apple.com/?address=272 Strines Road, Sk6 7GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  c="teal">
              272 Strines Road
            </Text>
            <Text c="dimmed">SK6 7GB</Text>
          </Box>

          <Title order={2} mb="md">Q&A</Title>
          <FAQ questions={questions} />

          <Group justify="center" mt="xl">
            <Button 
              component="a"
              href={`mailto:${email}`}
              leftSection={<IconMail size={20} />}
              variant="light">
              Email Us
            </Button>
            <Button
              component="a"
              href="https://m.me/tdobson"
              target="_blank"
              rel="noopener noreferrer"
              leftSection={<IconBrandFacebook size={20} />}
              variant="light">
              Message on Facebook
            </Button>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
}
