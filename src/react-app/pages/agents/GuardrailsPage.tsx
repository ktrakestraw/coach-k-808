import { Box, Checkbox, Flex, RadioCard, Text } from "@chakra-ui/react";
import { AGENTS } from "../../features/agents/mock-data";
import { useParams } from "react-router-dom";
import { Agent, Audience, Message } from "../../features/agents/types";

export default function GuardrailsPage() {
  const { agentId } = useParams();
  const agent = AGENTS.find((a) => a.id === agentId);

  if (!agent) return <Box>Agent not found</Box>;
  return <Guardrails agent={agent} />;
}

export function Guardrails(props: { agent: Agent }) {
  const { agent } = props;
  return (
    <Flex direction="column" gap={8}>
      <FieldAccess audience={agent.audience} />
      <MessageFrequency messages={agent.messages} />
    </Flex>
  );
}

function FieldAccess(props: { audience: Audience }) {
  const fields = Object.keys(props.audience.fields);

  return (
    <Flex direction="column" gap={4}>
      <Text fontWeight="medium">Data Access</Text>
      <Flex direction="column" gap={4}>
        {fields.map((key) => (
          <Checkbox.Root key={key} defaultChecked>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label textTransform="capitalize">{key}</Checkbox.Label>
          </Checkbox.Root>
        ))}
      </Flex>
    </Flex>
  );
}

function MessageFrequency(props: { messages: Message[] }) {
  return (
    <Flex direction="column" gap={4}>
      <Text fontWeight="medium">Message Frequency</Text>
      <Flex direction="column" gap={4}>
        {props.messages.map((message) => (
          <Flex key={message.id} direction="column" gap={2}>
            <Text fontSize="sm" fontWeight="medium">
              {message.type}
            </Text>
            <RadioCard.Root defaultValue={message.frequency}>
              <Flex gap={2}>
                {["whenever", "hourly", "daily", "weekly"].map((frequency) => (
                  <RadioCard.Item
                    key={frequency}
                    value={frequency}
                    borderWidth="0"
                    shadow="none"
                    flexDirection="row"
                    gap={2}
                    alignItems="center"
                    p={2}
                  >
                    <RadioCard.ItemHiddenInput />
                    <RadioCard.ItemIndicator />
                    <RadioCard.ItemText>
                      <Text textTransform="capitalize">{frequency}</Text>
                    </RadioCard.ItemText>
                  </RadioCard.Item>
                ))}
              </Flex>
            </RadioCard.Root>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
