import { Box, Flex, Text } from "@chakra-ui/react";
import PageContent from "../../ui/content/PageContent";
import { AGENTS } from "../../features/agents/mock-data";
import { Link, useParams } from "react-router-dom";
import { Agent } from "../../features/agents/types";
import DividedContent from "../../ui/content/DividedContent";
import LabeledContent from "../../ui/content/LabeledContent";
import { BiCube, BiSync } from "react-icons/bi";
import Chip from "../../ui/feedback/Chip";
import IconButton from "../../ui/inputs/IconButton";

export default function AudiencePage() {
  const { agentId } = useParams();
  const agent = AGENTS.find((a) => a.id === agentId);

  return (
    <PageContent title={<Title agent={agent} />}>
      {agent ? (
        <Flex gap={12} h={"100%"} direction="column">
          <ContentHeader agent={agent} />
          <Content agent={agent} />
        </Flex>
      ) : (
        <Text color={"red.500"}>Agent with ID {agentId} not found.</Text>
      )}
    </PageContent>
  );
}

function Title(props: { agent?: Agent }) {
  return (
    <DividedContent type="breadcrumbs">
      <Link to="/agents">
        <Text color={"teal.800"}>Agents</Text>
      </Link>
      {props.agent && (
        <Link to={`/agents/${props.agent.id}/flow`}>
          <Text color={"teal.800"}>{props.agent.id}</Text>
        </Link>
      )}
      {props.agent?.audience && (
        <Text color={"black"}>{props.agent.audience.model}</Text>
      )}
    </DividedContent>
  );
}

function ContentHeader(props: { agent: Agent }) {
  return (
    <Flex gap={2} justify="space-between" alignItems="center">
      <Flex alignItems="center" gap={2}>
        <Box
          w="28px"
          h="28px"
          bg="purple"
          rounded={"lg"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <BiCube size={16} color="white" />
        </Box>
        <Flex direction="column">
          <Text fontSize={"xl"} fontWeight={"medium"}>
            {props.agent.audience.model}
          </Text>
          <Text fontSize={"sm"} color="gray.500">
            {props.agent.audience.description}
          </Text>
        </Flex>
      </Flex>

      <Flex gap={2} alignItems="center">
        <IconButton label="Edit Audience" isDisabled />
        <IconButton label="Sync Audience" isDisabled icon={<BiSync />} />
      </Flex>
    </Flex>
  );
}

export function Content(props: { agent: Agent }) {
  return (
    <Flex gap={8} direction="column" h={"100%"}>
      <DividedContent>
        <LabeledContent label="Audience ID">
          <Text>{props.agent.audience.id}</Text>
        </LabeledContent>
        <LabeledContent label="Audience Size">
          <Text>{props.agent.audience.size}</Text>
        </LabeledContent>
        <LabeledContent label="Last Synced">
          <Text>{props.agent.audience.lastSynced}</Text>
        </LabeledContent>
      </DividedContent>

      <Flex direction="column" gap={3}>
        <Text fontWeight="medium">Schema Fields</Text>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Flex bg="gray.100" px={4} py={2} fontWeight="bold" fontSize="sm">
            <Box flex={2}>Field</Box>
            <Box flex={1}>Type</Box>
          </Flex>
          {Object.entries(props.agent.audience.fields).map(([field, type]) => (
            <Flex key={field} px={4} py={2} borderTopWidth="1px" fontSize="sm">
              <Box flex={2}>{field}</Box>
              <Box flex={1}>{type}</Box>
            </Flex>
          ))}
        </Box>
      </Flex>

      <Flex direction="column" gap={3}>
        <Text fontWeight="medium">Destinations</Text>
        <Flex gap={2} wrap="wrap">
          {props.agent.audience.destinations.map((destination) => (
            <Chip key={destination} text={destination} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
