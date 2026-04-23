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

// BuildFlowChart creates a graph where an audience node connects to each
// message node followed by individual strategies. I'm largely doing this just
// to have fun with React Flow, its quite messy right now.
function buildFlowChart(agent: Agent): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // add audience node
  nodes.push({
    id: "audience",
    style: { backgroundColor: "var(--chakra-colors-purple-100)" },
    position: { x: 0, y: 0 },
    data: { label: agent.audience.model },
  });

  agent.messages.forEach((message, i) => {
    // add message nodes, attached to audience node
    const messageX = (i - (agent.messages.length - 1) / 2) * 400;
    nodes.push({
      id: message.id,
      style: { backgroundColor: "var(--chakra-colors-orange-100)" },
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
      // add strategy nodes, attach to message nodes
      nodes.push({
        id: strategy.id,
        style: { backgroundColor: "var(--chakra-colors-orange-100)" },
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
