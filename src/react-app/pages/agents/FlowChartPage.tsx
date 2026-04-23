import { useState, useCallback, useMemo, ReactNode } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  Node,
  Edge,
  EdgeChange,
  Connection,
  NodeProps,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Agent } from "../../features/agents/types";
import { AGENTS } from "../../features/agents/mock-data";
import { useNavigate, useParams } from "react-router-dom";
import ErrorBanner from "../../ui/feedback/ErrorBanner";
import { BiChat, BiCube, BiTestTube } from "react-icons/bi";

export default function FlowChartPage() {
  const { agentId } = useParams();
  const agent = AGENTS.find((a) => a.id === agentId);

  if (!agent)
    return (
      <ErrorBanner message="Unable to display flow chart for this agent" />
    );
  return <FlowChart agent={agent} />;
}

function FlowChart(props: { agent: Agent }) {
  const flowChart = buildFlowChart(props.agent);

  // Below was mostly copied from React Flow docs: https://reactflow.dev/learn#usage
  const [nodes, setNodes] = useState(flowChart.nodes);
  const [edges, setEdges] = useState(flowChart.edges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  const navigate = useNavigate();

  const nodeTypes = useMemo(
    () => ({
      audience: (nodeProps: NodeProps) => (
        <CustomNode
          title="Model"
          label={String(nodeProps.data.label)}
          color="purple"
          icon={<BiCube size={16} color="white" />}
          handles={["source"]}
          onClick={() => navigate(`/agents/${props.agent.id}/audience`)}
        />
      ),
      message: (nodeProps: NodeProps) => (
        <CustomNode
          title="Message"
          handles={["source", "target"]}
          label={String(nodeProps.data.label)}
          color="orange"
          icon={<BiChat size={16} color="white" />}
        />
      ),
      strategy: (nodeProps: NodeProps) => (
        <CustomNode
          title="Strategy"
          label={String(nodeProps.data.label)}
          color="teal"
          icon={<BiTestTube size={16} color="white" />}
          handles={["target"]}
          onClick={() =>
            navigate(`/agents/${props.agent.id}/strategies/${nodeProps.id}`)
          }
        />
      ),
    }),
    [props.agent.id, navigate],
  );

  return (
    <Flex
      w="full"
      h="400px"
      grow={1}
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </Flex>
  );
}

function CustomNode(props: {
  title: string;
  label: string;
  color: string;
  icon?: ReactNode;
  onClick?: () => void;
  handles?: ("source" | "target")[];
}) {
  return (
    <Flex
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="lg"
      boxShadow="sm"
      overflow="hidden"
      alignItems="center"
      gap={4}
      px={4}
      // minW="180px"
      cursor={props.onClick ? "pointer" : "default"}
      _hover={props.onClick ? { borderColor: props.color } : undefined}
      onClick={props.onClick}
    >
      {props.handles?.includes("target") && (
        <Handle type="target" position={Position.Top} />
      )}
      <Box
        w="28px"
        h="28px"
        bg={props.color}
        rounded="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {props.icon}
      </Box>
      <Flex direction="column" gap={0.5} py={2}>
        <Text
          fontSize="x-small"
          fontWeight="medium"
          color="gray.400"
          letterSpacing="wider"
          textTransform="uppercase"
        >
          {props.title}
        </Text>
        <Text fontSize="sm" fontWeight="semibold" color="gray.800">
          {props.label}
        </Text>
      </Flex>
      {props.handles?.includes("source") && (
        <Handle type="source" position={Position.Bottom} />
      )}
    </Flex>
  );
}

// BuildFlowChart creates a graph where an audience node connects to each
// message node followed by individual strategies. I'm largely doing this just
// to have fun with React Flow, its quite messy right now.
function buildFlowChart(agent: Agent): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  nodes.push({
    id: "audience",
    type: "audience",
    position: { x: 0, y: 0 },
    data: { label: agent.audience.model },
  });

  agent.messages.forEach((message, i) => {
    const messageX = (i - (agent.messages.length - 1) / 2) * 400;
    nodes.push({
      id: message.id,
      type: "message",
      position: { x: messageX, y: 150 },
      data: { label: message.type },
    });
    edges.push({
      id: `edge-${message.id}`,
      source: "audience",
      target: message.id,
      label: `${message.strategies.reduce((acc, s) => acc + s.percentage, 0)}%`,
    });

    message.strategies.forEach((strategy, j) => {
      nodes.push({
        id: strategy.id,
        type: "strategy",
        position: {
          x: (j - (message.strategies.length - 1) / 2) * 200 + messageX,
          y: 300,
        },
        data: { label: strategy.name },
      });
      edges.push({
        id: `edge-${strategy.id}`,
        source: message.id,
        target: strategy.id,
        label: strategy.percentage ? `${strategy.percentage}%` : "0%",
      });
    });
  });

  return { nodes, edges };
}
