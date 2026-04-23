import { Button, Flex, Switch, Tabs, Text } from "@chakra-ui/react";
import PageContent from "../../ui/content/PageContent";
import { AGENTS } from "../../features/agents/mock-data";
import {
  Link,
  Outlet,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { Agent } from "../../features/agents/types";
import DividedContent from "../../ui/content/DividedContent";
import LabeledContent from "../../ui/content/LabeledContent";
import Chip from "../../ui/feedback/Chip";

export default function AgentPage() {
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
        <Flex alignItems="center" gap={3}>
          <Text color={"gray.500"}>#{props.agent.id}</Text>
          <Chip status={props.agent.status} text={props.agent.status} />
        </Flex>
      )}
    </DividedContent>
  );
}

function ContentHeader(props: { agent: Agent }) {
  return (
    <Flex gap={2} justify="space-between" alignItems="center">
      <DividedContent type="arrow">
        <LabeledContent label="Audience">
          <Text>{props.agent.audience.model}</Text>
        </LabeledContent>
        <LabeledContent label="Success Metric">
          <Text textTransform="capitalize">
            {props.agent.criteria.successMetric.replace("_", " ")}
          </Text>
        </LabeledContent>
      </DividedContent>

      <Flex gap={4} justify="space-between" alignItems="center">
        <Switch.Root
          defaultChecked={["ACTIVE", "ERROR"].includes(props.agent.status)}
        >
          <Switch.HiddenInput />
          <Switch.Control
            bg={
              ["ACTIVE", "ERROR"].includes(props.agent.status)
                ? "teal.800"
                : "teal.600"
            }
            _hover={{ bg: "teal.700" }}
          >
            <Switch.Thumb />
          </Switch.Control>
        </Switch.Root>

        <Button color={"white"} bg={"teal.800"} _hover={{ bg: "teal.700" }}>
          Assess Success
        </Button>
      </Flex>
    </Flex>
  );
}

export function Content(props: { agent: Agent }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const splitPaths = pathname.split("/");
  const lastPath = splitPaths[splitPaths.length - 1];
  const activeTab = ["flow", "strategies", "guardrails"].includes(lastPath)
    ? lastPath
    : "flow";

  return (
    <Flex gap={8} direction="column" h={"100%"}>
      <DividedContent>
        <LabeledContent label="Agent ID">
          <Text>{props.agent.id}</Text>
        </LabeledContent>
        <LabeledContent label="Audience">
          <Text>{props.agent.audience.description}</Text>
        </LabeledContent>
        <LabeledContent label="Created">
          <Text>{props.agent.createdAt}</Text>
        </LabeledContent>
        <LabeledContent label="Strategies">
          <Text>{props.agent.messages.map((s) => s.strategies).length}</Text>
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
            value="flow"
          >
            Overview
          </Tabs.Trigger>
          <Tabs.Trigger
            bg="none"
            focusRing="none"
            border="none"
            _hover={{ bg: "gray.100" }}
            value="strategies"
          >
            Strategies
          </Tabs.Trigger>
          <Tabs.Trigger
            bg="none"
            focusRing="none"
            border="none"
            _hover={{ bg: "gray.100" }}
            value="guardrails"
          >
            Guardrails
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>

      <Outlet />
    </Flex>
  );
}
