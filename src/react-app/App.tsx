import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./features/Nav/Nav";
import HomePage from "./pages/HomePage";
import AgentsPage from "./pages/AgentsPage";
import SyncsPage from "./pages/SyncsPage";
import { theme } from "./ui/theme";

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/syncs", element: <SyncsPage /> },
      { path: "/agents", element: <AgentsPage /> },
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
