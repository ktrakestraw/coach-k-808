import { Flex, Tabs, Text } from "@chakra-ui/react";
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
import { MdOpenInNew } from "react-icons/md";
import Button from "../../ui/inputs/Button";
import IconButton from "../../ui/inputs/IconButton";

export default function AgentPage() {
  const { agentId } = useParams();
  const agent = AGENTS.find((a) => a.id === agentId);

  return (
    <PageContent title={<Title agent={agent} />}>
      {agent ? (
        <Flex gap={12} h="100%" direction="column">
          <ContentHeader agent={agent} />
          <Content agent={agent} />
        </Flex>
      ) : (
        <Text color="red.500">Agent with ID {agentId} not found.</Text>
      )}
    </PageContent>
  );
}

function Title(props: { agent?: Agent }) {
  return (
    <DividedContent type="breadcrumbs">
      <Link to="/agents">
        <Text color="teal.800">Agents</Text>
      </Link>
      {props.agent && (
        <Flex alignItems="center" gap={3}>
          <Text color="black">{props.agent.id}</Text>
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
        <Link to={`/agents/${props.agent.id}/audience`}>
          <LabeledContent
            label="Audience"
            labelAdornment={<MdOpenInNew size={16} />}
          >
            <Text color="black" fontWeight="normal">
              {props.agent.audience.model}
            </Text>
          </LabeledContent>
        </Link>
        <LabeledContent label="Success Metric">
          <Text textTransform="capitalize">
            {props.agent.criteria.successMetric.replace("_", " ")}
          </Text>
        </LabeledContent>
      </DividedContent>

      <Flex gap={2} justify="space-between" alignItems="center">
        <IconButton label="Edit Agent" isDisabled />
        <Button label="Add Strategy" isDisabled />
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
    <Flex gap={8} direction="column" h="100%">
      <DividedContent>
        <LabeledContent label="Agent ID">
          <Text>{props.agent.id}</Text>
        </LabeledContent>
        <LabeledContent label="Created">
          <Text>{props.agent.createdAt}</Text>
        </LabeledContent>
        <LabeledContent label="Strategies">
          <Text>
            {props.agent.messages.flatMap((s) => s.strategies).length}
          </Text>
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
