import { Accordion, Text } from "@mantine/core";
import React from "react";
import type { Question } from "../../types/events";
import faqData from "../../config/faq.json";

interface FAQProps {
  questions?: Question[];
  includeShared?: boolean;
}

export function FAQ({ questions = [], includeShared = true }: FAQProps) {
  const sharedQuestions = includeShared ? faqData.shared : [];
  const allQuestions = [...questions, ...sharedQuestions];

  return (
    <Accordion>
      {allQuestions.map((item) => (
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
