import { Box } from "@chakra-ui/react";
import { AGENTS } from "../../features/agents/mock-data";
import { useParams } from "react-router-dom";
import { Agent } from "../../features/agents/types";

export default function OverviewPage() {
  const { agentId } = useParams();
  const agent = AGENTS.find((a) => a.id === agentId);

  if (!agent) return <Box>Agent not found</Box>;
  return <Overview agent={agent} />;
}

export function Overview(props: { agent: Agent }) {
  console.log("Overview for agent", props.agent);
  return <Box overflow="hidden">TODO</Box>;
}
