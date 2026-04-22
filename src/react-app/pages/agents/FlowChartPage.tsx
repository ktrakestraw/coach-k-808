import { useState, useCallback } from "react";
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
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Flex } from "@chakra-ui/react";
import { Agent } from "../../features/agents/types";
import { AGENTS } from "../../features/agents/mock-data";
import { useParams } from "react-router-dom";
import ErrorBanner from "../../ui/feedback/ErrorBanner";

export default function FlowChartPage() {
  const { agentId } = useParams();
  const agent = AGENTS.find((a) => a.id === agentId);

  if (!agent)
    return (
      <ErrorBanner message={"Unable to display flow chart for this agent"} />
    );
  return <FlowChart agent={agent} />;
}

// BuildFlowChart creates a graph where an audience node connects to each
// strategy node. I'm largely doing this just to have fun with React Flow, but I
// could imagine more sub-strategies being organized.
function buildFlowChart(agent: Agent): { nodes: Node[]; edges: Edge[] } {
  const audience: Node = {
    id: "audience",
    style: { backgroundColor: "var(--chakra-colors-purple-100)" },
    position: { x: 0, y: 0 },
    data: { label: agent.audience.model },
  };

  const strategies: Node[] = agent.strategies.map((strategy, i) => ({
    id: strategy.id,
    style: { backgroundColor: "var(--chakra-colors-orange-100)" },
    position: {
      x: (i - (agent.strategies.length - 1) / 2) * 200, // spreads strategies out horizontally
      y: 150,
    },
    data: { label: strategy.name },
  }));

  const connections: Edge[] = agent.strategies.map((strategy, i) => ({
    id: `edge-${i}`,
    source: "audience",
    target: strategy.id,
    label: strategy.percentage ? `${strategy.percentage}%` : "0%",
  }));

  return { nodes: [audience, ...strategies], edges: connections };
}

function FlowChart(props: { agent: Agent }) {
  const { nodes: initialNodes, edges: initialEdges } = buildFlowChart(
    props.agent,
  );
  // Below was mostly copied from React Flow docs: https://reactflow.dev/learn#usage
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

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
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </Flex>
  );
}
