import { Box, Button, Flex, Text } from "@chakra-ui/react";
import PageContent from "../ui/content/PageContent";
import { SYNCS } from "../features/sync/mock-data";
import { Link, useParams } from "react-router-dom";
import { Sync } from "../features/sync/types";
import DividedContent from "../ui/content/DividedContent";
import LabeledContent from "../ui/content/LabeledContent";
import Chip from "../ui/feedback/Chip";

export default function SyncPage() {
  const { syncId } = useParams();
  const sync = SYNCS.find((s) => s.id === syncId);

  return (
    <PageContent
      title={
        <DividedContent type="breadcrumbs">
          <Link to="/syncs">
            <Text color={"teal.800"}>Syncs</Text>
          </Link>
          {sync && <Text color={"gray.500"}>#{sync.id}</Text>}
        </DividedContent>
      }
    >
      {sync ? (
        <Flex gap={12} direction="column">
          <Header sync={sync} />
          <Content sync={sync} />
        </Flex>
      ) : (
        <Text color={"red.500"}>Sync with ID {syncId} not found.</Text>
      )}
    </PageContent>
  );
}

function Header(props: { sync: Sync }) {
  return (
    <Flex gap={2} justify="space-between" alignItems="center">
      <DividedContent type="arrow">
        <LabeledContent label="Model">
          <Text>{props.sync.model}</Text>
        </LabeledContent>
        <LabeledContent label="Destination">
          <Text>{props.sync.destination}</Text>
        </LabeledContent>
      </DividedContent>

      <Button
        cursor={"not-allowed"}
        disabled
        color={"white"}
        bg={"teal.800"}
        _hover={{ bg: "teal.700" }}
      >
        Run Sync
      </Button>
    </Flex>
  );
}

export function Content(props: { sync: Sync }) {
  return (
    <Flex gap={8} direction="column">
      <DividedContent>
        <LabeledContent label="Schedule">
          <Text>Manual</Text>
        </LabeledContent>
        <LabeledContent label="Sync ID">
          <Text>{props.sync.id}</Text>
        </LabeledContent>
        <LabeledContent label="SLUG">
          <Text>
            add-{props.sync.model.toLocaleLowerCase().replace(" ", "-")}-to-
            {props.sync.destination.toLocaleLowerCase().replace(" ", "-")}
          </Text>
        </LabeledContent>
        <LabeledContent label="Matched Users">
          <Text>1K</Text>
        </LabeledContent>
      </DividedContent>
      <Table sync={props.sync} />
    </Flex>
  );
}

export function Table(props: { sync: Sync }) {
  return (
    <Box overflow="hidden">
      <Flex
        borderBottom={"1px"}
        borderColor={"gray.200"}
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
        <Flex key={run.started} p={4} borderTopWidth="1px" color="black">
          <Box flex={2}>
            <Chip status={run.status} text={run.status} />
          </Box>
          <Box flex={2}>{run.started}</Box>
          <Box flex={2}>{run.rows}</Box>
          <Box flex={2}>{run.rows}</Box>
        </Flex>
      ))}
    </Box>
  );
}
