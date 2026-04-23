import { Box, Flex, Text } from "@chakra-ui/react";
import PageContent from "../../ui/content/PageContent";
import Chip from "../../ui/feedback/Chip";
import { Link } from "react-router-dom";
import { AGENTS } from "../../features/agents/mock-data";
import Button from "../../ui/inputs/Button";

export default function AgentsPage() {
  return (
    <PageContent title="Agents">
      <Flex gap={8} direction="column">
        <ContentHeader />
        <Content />
      </Flex>
    </PageContent>
  );
}

function ContentHeader() {
  return (
    <Flex gap={2} justify="space-between" alignItems="center">
      <Text fontSize="2xl">Agents</Text>

      <Button label="New Agent" isDisabled />
    </Flex>
  );
}

function Content() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Flex bg="gray.100" p={4} fontWeight="bold">
        <Box flex={1}>ID</Box>
        <Box flex={2}>Stats</Box>
        <Box flex={2}>Audience</Box>
        <Box flex={2}>Strategies</Box>
        <Box flex={2}>Success Metric</Box>
        <Box flex={1}>Created At</Box>
      </Flex>
      {AGENTS.map((agent) => (
        <Link
          key={agent.id}
          to={`/agents/${agent.id}`}
          style={{ display: "contents" }}
        >
          <Flex key={agent.id} p={4} borderTopWidth="1px" color="black">
            <Box flex={1}>{agent.id}</Box>
            <Box flex={2}>
              <Chip status={agent.status} text={agent.status} />
            </Box>
            <Box flex={2}>{agent.audience.model}</Box>
            <Box flex={2}>
              {agent.messages.flatMap((s) => s.strategies).length}
            </Box>
            <Box flex={2}>{agent.criteria.successMetric}</Box>
            <Box flex={1}>{agent.createdAt}</Box>
          </Flex>
        </Link>
      ))}
    </Box>
  );
}
