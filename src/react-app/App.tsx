import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./features/navigation/Nav";
import HomePage from "./pages/HomePage";
import AgentsPage from "./pages/AgentsPage";
import SyncsPage from "./pages/SyncsPage";
import { theme } from "./ui/theme";
import SyncPage from "./pages/SyncPage";

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/syncs", element: <SyncsPage /> },
      { path: "/agents", element: <AgentsPage /> },
      { path: "/syncs/:syncId", element: <SyncPage /> },
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
