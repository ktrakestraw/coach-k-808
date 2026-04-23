import { Box, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import PageContent from "../../ui/content/PageContent";
import { AGENTS } from "../../features/agents/mock-data";
import { Link, useParams } from "react-router-dom";
import ArrowLink from "../../ui/navigation/ArrowLink";
import { Agent, Message, Strategy } from "../../features/agents/types";
import DividedContent from "../../ui/content/DividedContent";
import LabeledContent from "../../ui/content/LabeledContent";
import Chip from "../../ui/feedback/Chip";
import { BiTestTube } from "react-icons/bi";
import IconButton from "../../ui/inputs/IconButton";

export default function StrategyPage() {
  const { agentId, strategyId } = useParams();

  const agent = AGENTS.find((a) => a.id === agentId);
  const message = agent?.messages.find((m) =>
    m.strategies.some((s) => s.id === strategyId),
  );
  const strategy = message?.strategies.find((s) => s.id === strategyId);

  return (
    <PageContent
      title={<Title agent={agent} message={message} strategy={strategy} />}
    >
      {agent && message && strategy && strategyId ? (
        <Flex gap={12} h="100%" direction="column">
          <ContentHeader agent={agent} message={message} strategy={strategy} />
          <Content agent={agent} strategy={strategy} message={message} />
        </Flex>
      ) : (
        <Text color="red.500">Strategy with ID {strategyId} not found.</Text>
      )}
    </PageContent>
  );
}

function Title(props: {
  agent?: Agent;
  strategy?: Strategy;
  message?: Message;
}) {
  return (
    <DividedContent type="breadcrumbs">
      <Link to="/agents">
        <Text color="teal.800">Agents</Text>
      </Link>
      {props.agent && (
        <Link to={`/agents/${props.agent.id}/strategies`}>
          <Text color="teal.800">{props.agent.id}</Text>
        </Link>
      )}
      {props.strategy && <Text color="black">{props.strategy.id}</Text>}
    </DividedContent>
  );
}

function ContentHeader(props: {
  agent: Agent;
  message: Message;
  strategy: Strategy;
}) {
  const strategies = props.agent.messages.flatMap((m) => m.strategies) || [];

  const currentIndex = strategies.findIndex((s) => s.id === props.strategy.id);
  const previousStrategy =
    currentIndex > 0 ? strategies[currentIndex - 1] : undefined;
  const nextStrategy =
    currentIndex < strategies.length - 1
      ? strategies[currentIndex + 1]
      : undefined;

  return (
    <Flex gap={2} justify="space-between" alignItems="center">
      <Flex alignItems="center" gap={2}>
        <Box
          w="28px"
          h="28px"
          bg="teal"
          rounded="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <BiTestTube size={16} color="white" />
        </Box>
        <Text fontSize="xl" fontWeight="medium">
          {props.strategy.name}
        </Text>
        {props.message && <Chip text={props.message.type} />}
      </Flex>

      <Flex gap={4} alignItems="center">
        <DividedContent type="dot">
          <ArrowLink
            direction="prev"
            to={
              previousStrategy &&
              `/agents/${props.agent.id}/strategies/${previousStrategy.id}`
            }
            label={previousStrategy?.id}
          />
          <ArrowLink
            direction="next"
            to={
              nextStrategy &&
              `/agents/${props.agent.id}/strategies/${nextStrategy.id}`
            }
            label={nextStrategy?.id}
          />
        </DividedContent>
        <IconButton label="Edit Strategy" isDisabled />
      </Flex>
    </Flex>
  );
}

export function Content(props: {
  agent: Agent;
  strategy: Strategy;
  message: Message;
}) {
  return (
    <Flex gap={8} direction="column" h="100%">
      <DividedContent>
        <LabeledContent label="Strategy ID">
          <Text>{props.strategy.id}</Text>
        </LabeledContent>
        <LabeledContent label="Audience Percentage">
          <Text>{props.strategy.percentage}%</Text>
        </LabeledContent>
        <LabeledContent label="Success Metric">
          <Text textTransform="capitalize">
            {props.agent.criteria.successMetric.replace("_", " ")}
          </Text>
        </LabeledContent>
        <LabeledContent label="Success Rate">
          <Text>{props.strategy.success}%</Text>
        </LabeledContent>

        <LabeledContent label="Frequency Restriction">
          <Text textTransform="capitalize">{props.message.frequency}</Text>
        </LabeledContent>
      </DividedContent>

      <Flex direction="column" gap={4}>
        <Text fontWeight="medium">Tags</Text>
        <Input defaultValue={props.strategy.tags.join(", ")} />
      </Flex>

      <Flex direction="column" gap={4}>
        <Text fontWeight="medium">Prompt</Text>
        <Textarea value={props.strategy.prompt} rows={5} />
      </Flex>
    </Flex>
  );
}
