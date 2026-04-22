import { Box, Flex, Text } from "@chakra-ui/react";
import { AGENTS } from "../../features/agents/mock-data";
import { useParams } from "react-router-dom";
import { Agent } from "../../features/agents/types";

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
      {props.agent.strategies.map((strategy) => (
        <Flex
          key={strategy.name}
          p={4}
          borderTopWidth="1px"
          color="black"
          alignItems="center"
        >
          <Box flex={3}>
            <Text>{strategy.name}</Text>
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
      ))}
    </Box>
  );
}
