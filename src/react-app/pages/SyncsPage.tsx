import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Page from "../features/navigation/Page";
import { SYNCS } from "../features/sync/data";
import StatusChip from "../ui/StatusChip";
import { Link } from "react-router-dom";

export default function SyncsPage() {
  return (
    <Page title="Syncs">
      <Flex gap={8} direction="column">
        <Header />
        <Table />
      </Flex>
    </Page>
  );
}

function Header() {
  return (
    <Flex gap={2} justify="space-between">
      <Text fontSize="2xl">Syncs</Text>
      <Button color={"white"} bg={"teal.800"} _hover={{ bg: "teal.700" }}>
        New Sync
      </Button>
    </Flex>
  );
}

export function Table() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Flex bg="gray.100" p={4} fontWeight="bold">
        <Box flex={1}>ID</Box>
        <Box flex={2}>Status</Box>
        <Box flex={2}>Model</Box>
        <Box flex={2}>Destination</Box>
        <Box flex={2}>Last Run</Box>
        <Box flex={2}>Created At</Box>
      </Flex>
      {SYNCS.map((sync) => (
        <Link
          key={sync.id}
          to={`/syncs/${sync.id}`}
          style={{ display: "contents" }}
        >
          <Flex key={sync.id} p={4} borderTopWidth="1px" color="black">
            <Box flex={1}>{sync.id}</Box>
            <Box flex={2}>
              <StatusChip status={sync.status} />
            </Box>
            <Box flex={2}>{sync.model}</Box>
            <Box flex={2}>{sync.destination}</Box>
            <Box flex={2}>{sync.lastRun}</Box>
            <Box flex={2}>{sync.createdAt}</Box>
          </Flex>
        </Link>
      ))}
    </Box>
  );
}
