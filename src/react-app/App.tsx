import "./App.css";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./features/Nav/Nav";
import HomePage from "./pages/HomePage";
import AgentsPage from "./pages/AgentsPage";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const system = createSystem(defaultConfig, config);

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/agents", element: <AgentsPage /> },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider value={system}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
