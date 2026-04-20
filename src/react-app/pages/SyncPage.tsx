import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Page from "../features/navigation/Page";
import { SYNCS } from "../features/sync/data";
import StatusChip from "../ui/StatusChip";
import { Link, useParams } from "react-router-dom";
import { Sync } from "../features/sync/types";

export default function SyncPage() {
  const { syncId } = useParams();
  const sync = SYNCS.find((s) => s.id === syncId);

  return (
    <Page title="Syncs">
      {sync ? (
        <Flex gap={8} direction="column">
          <Header sync={sync} />
          <Content />
        </Flex>
      ) : (
        <Text color={"red.500"}>Sync with ID {syncId} not found.</Text>
      )}
    </Page>
  );
}

function Header(props: { sync: Sync }) {
  return (
    <Flex gap={2} justify="space-between">
      <Text fontSize="2xl">
        <Link to={"/syncs"}>Syncs</Link> / {props.sync.id}
      </Text>
      <Button color={"white"} bg={"teal.800"} _hover={{ bg: "teal.700" }}>
        Edit Sync
      </Button>
    </Flex>
  );
}

export function Content() {
  return "TODO";
}
