// src/App.tsx

import "./App.css";

import {
  Box,
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const system = createSystem(defaultConfig, config);

function App() {
  return (
    <ChakraProvider value={system}>
      <Box>Welcome to Coach K 808</Box>
    </ChakraProvider>
  );
}

export default App;
