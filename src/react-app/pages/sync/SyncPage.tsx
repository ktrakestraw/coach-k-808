import { Button, Flex, Tabs, Text } from "@chakra-ui/react";
import PageContent from "../../ui/content/PageContent";
import { SYNCS } from "../../features/sync/mock-data";
import {
  Link,
  Outlet,
  useNavigate,
  useParams,
  useResolvedPath,
  useMatch,
} from "react-router-dom";
import { Sync } from "../../features/sync/types";
import DividedContent from "../../ui/content/DividedContent";
import LabeledContent from "../../ui/content/LabeledContent";

export default function SyncPage() {
  const { syncId } = useParams();
  const sync = SYNCS.find((s) => s.id === syncId);

  return (
    <PageContent title={<Title sync={sync} />}>
      {sync ? (
        <Flex gap={12} direction="column">
          <ContentHeader sync={sync} />
          <Content sync={sync} />
        </Flex>
      ) : (
        <Text color={"red.500"}>Sync with ID {syncId} not found.</Text>
      )}
    </PageContent>
  );
}

function Title(props: { sync?: Sync }) {
  return (
    <DividedContent type="breadcrumbs">
      <Link to="/syncs">
        <Text color={"teal.800"}>Syncs</Text>
      </Link>
      {props.sync && <Text color={"black"}>{props.sync.id}</Text>}
    </DividedContent>
  );
}

function ContentHeader(props: { sync: Sync }) {
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

type Tab = "runs" | "schedule";

export function Content(props: { sync: Sync }) {
  const navigate = useNavigate();
  const runsPath = useResolvedPath("runs");
  const isRuns = useMatch({ path: runsPath.pathname, end: false });
  const activeTab: Tab = isRuns ? "runs" : "schedule";

  return (
    <Flex gap={8} direction="column">
      <DividedContent>
        <LabeledContent label="Sync ID">
          <Text>{props.sync.id}</Text>
        </LabeledContent>
        <LabeledContent label="Schedule">
          <Text textTransform={"capitalize"}>{props.sync.schedule}</Text>
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

      <Tabs.Root
        value={activeTab}
        onValueChange={({ value }) => navigate(value)}
      >
        <Tabs.List bg="none">
          <Tabs.Trigger
            bg="none"
            focusRing="none"
            border="none"
            _hover={{ bg: "gray.100" }}
            value="runs"
          >
            Runs
          </Tabs.Trigger>
          <Tabs.Trigger
            bg="none"
            focusRing="none"
            border="none"
            _hover={{ bg: "gray.100" }}
            value="schedule"
          >
            Schedule
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>

      <Outlet />
    </Flex>
  );
}
