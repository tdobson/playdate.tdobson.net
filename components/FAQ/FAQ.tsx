import React from 'react';
import { Accordion, Text } from '@mantine/core';
import type { Question } from '../../types/questions';

interface FAQProps {
  questions: Question[];
}

export function FAQ({ questions }: FAQProps) {
  return (
    <Accordion>
      {questions.map((item, index) => (
        <Accordion.Item key={index} value={item.q}>
          <Accordion.Control>{item.q}</Accordion.Control>
          <Accordion.Panel>
            <Text c="dimmed">{item.a}</Text>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
