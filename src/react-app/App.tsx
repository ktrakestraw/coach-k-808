import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Nav from "./features/navigation/Nav";
import { theme } from "./ui/theme";

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      {
        path: "/",
        loader: async () => redirect("/home"),
      },
      {
        path: "/home",
        lazy: async () => ({
          Component: (await import("./pages/home/HomePage")).default,
        }),
      },
      {
        path: "/syncs",
        lazy: async () => ({
          Component: (await import("./pages/sync/SyncsPage")).default,
        }),
      },
      {
        path: "/agents",
        lazy: async () => ({
          Component: (await import("./pages/agents/AgentsPage")).default,
        }),
      },
      {
        path: "/agents/:agentId",
        lazy: async () => ({
          Component: (await import("./pages/agents/AgentPage")).default,
        }),
        children: [
          {
            index: true,
            loader: ({ params }) => redirect(`/agents/${params.agentId}/flow`),
          },
          {
            path: "strategies",
            lazy: async () => ({
              Component: (await import("./pages/agents/StrategiesPage"))
                .default,
            }),
          },
          {
            path: "guardrails",
            lazy: async () => ({
              Component: (await import("./pages/agents/GuardrailsPage"))
                .default,
            }),
          },
          {
            path: "flow",
            lazy: async () => ({
              Component: (await import("./pages/agents/FlowChartPage")).default,
            }),
          },
        ],
      },
      {
        path: "/agents/:agentId/audience",
        lazy: async () => ({
          Component: (await import("./pages/agents/AudiencePage")).default,
        }),
      },
      {
        path: "/agents/:agentId/strategies/:strategyId",
        lazy: async () => ({
          Component: (await import("./pages/agents/StrategyPage")).default,
        }),
      },
      {
        path: "/syncs/:syncId",
        lazy: async () => ({
          Component: (await import("./pages/sync/SyncPage")).default,
        }),
        children: [
          {
            index: true,
            loader: ({ params }) => redirect(`/syncs/${params.syncId}/runs`),
          },
          {
            path: "runs",
            lazy: async () => ({
              Component: (await import("./pages/sync/RunsPage")).default,
            }),
          },
          {
            path: "schedule",
            lazy: async () => ({
              Component: (await import("./pages/sync/SchedulePage")).default,
            }),
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider value={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
