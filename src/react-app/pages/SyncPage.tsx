import { Button, Flex, Text } from "@chakra-ui/react";
import { SYNCS } from "../features/sync/data";
import PageContent from "../ui/content/PageContent";
import { Link, useParams } from "react-router-dom";
import { Sync } from "../features/sync/types";
import DividedContent from "../ui/content/DividedContent";
import LabeledContent from "../ui/content/LabeledContent";

export default function SyncPage() {
  const { syncId } = useParams();
  const sync = SYNCS.find((s) => s.id === syncId);

  return (
    <PageContent title="Syncs">
      {sync ? (
        <Flex gap={8} direction="column">
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

export function Content(props: { sync: Sync }) {
  return (
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
  );
}
