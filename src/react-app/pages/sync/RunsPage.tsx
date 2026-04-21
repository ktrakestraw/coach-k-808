import { Box, Flex, Text } from "@chakra-ui/react";
import { SYNCS } from "../../features/sync/mock-data";
import { useParams } from "react-router-dom";
import { Sync } from "../../features/sync/types";
import Chip from "../../ui/feedback/Chip";

export default function RunsPage() {
  const { syncId } = useParams();
  const sync = SYNCS.find((s) => s.id === syncId);

  if (!sync) {
    return <Box>Sync not found</Box>;
  }
  return <Runs sync={sync} />;
}

export function Runs(props: { sync: Sync }) {
  return (
    <Box overflow="hidden">
      <Flex
        p={4}
        fontSize="md"
        fontWeight={"medium"}
        textTransform={"uppercase"}
        color="gray.500"
      >
        <Box flex={2}>Status</Box>
        <Box flex={2}>Started</Box>
        <Box flex={2}>Rows Queried</Box>
        <Box flex={2}>Operations</Box>
      </Flex>
      {props.sync.runs.map((run) => (
        <Flex
          key={run.started}
          p={4}
          borderTopWidth="1px"
          color="black"
          alignItems={"center"}
        >
          <Box flex={2}>
            <Chip status={run.status} text={run.status} />
          </Box>
          <Box flex={2}>
            <Flex direction="column" gap={0.5}>
              <Text>{run.started}</Text>
              <Text fontSize="sm" color="gray.500">
                duration: {run.duration}s
              </Text>
            </Flex>
          </Box>
          <Box flex={2}>
            <Text>{run.rows}</Text>
            <Text fontSize="sm" color="gray.500">
              rows
            </Text>
          </Box>
          <Box flex={2}>
            <Text>{run.rows}</Text>
            <Text fontSize="sm" color="gray.500">
              operations
            </Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
}
