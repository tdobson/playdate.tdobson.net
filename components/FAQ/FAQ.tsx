import { Accordion, Text } from "@mantine/core";
import React from "react";
import type { Question } from "../../types/events.types";

interface FAQProps {
	questions: Question[];
}

export function FAQ({ questions }: FAQProps) {
	return (
		<Accordion>
			{questions.map((item, index) => (
				<Accordion.Item key={item.q} value={item.q}>
					<Accordion.Control>{item.q}</Accordion.Control>
					<Accordion.Panel>
						<Text c="dimmed">{item.a}</Text>
					</Accordion.Panel>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
