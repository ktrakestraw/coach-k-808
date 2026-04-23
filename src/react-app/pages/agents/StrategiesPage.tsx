import { Box, Flex, Text } from "@chakra-ui/react";
import { AGENTS } from "../../features/agents/mock-data";
import { Link, useParams } from "react-router-dom";
import { Agent } from "../../features/agents/types";
import Chip from "../../ui/feedback/Chip";

export default function StrategiesPage() {
  const { agentId } = useParams();
  const agent = AGENTS.find((a) => a.id === agentId);

  if (!agent) return <Box>Agent not found</Box>;
  return <Strategies agent={agent} />;
}

export function Strategies(props: { agent: Agent }) {
  return (
    <Box overflow="hidden">
      <Flex
        p={4}
        fontSize="md"
        fontWeight="medium"
        textTransform="uppercase"
        color="gray.500"
      >
        <Box flex={3}>Name</Box>
        <Box flex={1}>Traffic</Box>
        <Box flex={1}>Success Rate</Box>
        <Box flex={2}>Last Checkpoint</Box>
      </Flex>
      {props.agent.messages.map((message) =>
        message.strategies.map((strategy) => (
          <Link
            key={strategy.id}
            to={`/agents/${props.agent.id}/strategies/${strategy.id}`}
            style={{ display: "contents" }}
          >
            <Flex
              key={strategy.name}
              p={4}
              borderTopWidth="1px"
              color="black"
              alignItems="center"
              _hover={{ bg: "gray.50" }}
            >
              <Box flex={3}>
                <Flex alignItems="center" gap={2}>
                  <Text>{strategy.name}</Text>
                  <Chip text={message.type} />
                </Flex>
              </Box>
              <Box flex={1}>
                <Text>{strategy.percentage}%</Text>
              </Box>
              <Box flex={1}>
                <Text>{strategy.success}%</Text>
              </Box>
              <Box flex={2}>
                <Text>{strategy.lastCheckpoint}</Text>
              </Box>
            </Flex>
          </Link>
        )),
      )}
    </Box>
  );
}
