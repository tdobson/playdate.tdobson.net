import {
	Badge,
	Box,
	Button,
	Card,
	Container,
	Group,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import {
	IconBabyBottle,
	IconBrandFacebook,
	IconCalendar,
	IconClock,
	IconMail,
} from "@tabler/icons-react";
import React from "react";
import { FAQ } from "../components/FAQ/FAQ";
import eventConfig from "../config/events.json";
import faqConfig from "../config/faq.json";

export default function PlayDatePage() {
	const email = eventConfig.contact.email.join("");


	return (
		<Container size="md" py="xl">
			<Stack gap="xl">
				<Card shadow="sm" p="xl" radius="md" withBorder>
					<Stack gap="md">
						<Title order={1} ta="center">
							{eventConfig.title}
						</Title>
						<Text size="lg" ta="center">
							Hosted by {eventConfig.hosts.join(", ")}
						</Text>

						{eventConfig.dates.map((date, index) => (
							<Card key={index} withBorder p="md">
								<Group justify="space-between">
									<Group>
										<IconCalendar size={20} />
										<Text>{date.date}</Text>
										<IconClock size={20} />
										<Text>{date.time}</Text>
									</Group>
									<Badge color="blue" variant="light">
										{date.type === "dads" ? "Just For Dads" : "Regular"}
									</Badge>
								</Group>
							</Card>
						))}

						<Group justify="center" gap="xs">
							<IconBabyBottle size={20} />
							<Text>Ages {eventConfig.details.ageRange}</Text>
							<Text>•</Text>
							<Text>{eventConfig.details.cost}</Text>
						</Group>
					</Stack>
				</Card>

				<Card shadow="sm" p="xl" radius="md" withBorder>
					<Text size="lg" ta="center" mb="xl">
						{eventConfig.details.description}
					</Text>

					<Box mb="xl">
						<Text
							component="a"
							href={eventConfig.location.mapsUrl}
							target="_blank"
							rel="noopener noreferrer"
							c="teal"
						>
							{eventConfig.location.address}
						</Text>
						<Text c="dimmed">{eventConfig.location.postcode}</Text>
					</Box>

					<Title order={2} mb="md">
						Q&A
					</Title>
					<FAQ questions={faqConfig.questions} />

					<Group justify="center" mt="xl">
						<Button
							component="a"
							href={`mailto:${email}`}
							leftSection={<IconMail size={20} />}
							variant="light"
						>
							Email Us
						</Button>
						<Button
							component="a"
							href={eventConfig.contact.facebook}
							target="_blank"
							rel="noopener noreferrer"
							leftSection={<IconBrandFacebook size={20} />}
							variant="light"
						>
							Message on Facebook
						</Button>
					</Group>
				</Card>
			</Stack>
		</Container>
	);
}
