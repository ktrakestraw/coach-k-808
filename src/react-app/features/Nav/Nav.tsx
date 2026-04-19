import { Box, Flex, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavLink from "../../ui/NavLink";

const NAV_ITEMS = [
  { label: "Syncs", to: "/syncs" },
  { label: "Agents", to: "/agents" },
];

export default function Layout() {
  return (
    <Flex minH="100vh" minW="100vh" h="auto" w="auto">
      <Box
        as="nav"
        w="250px"
        flexShrink={0}
        bgGradient="to-b"
        gradientFrom="teal.dark"
        gradientTo="green.900"
        color="white"
        py={4}
      >
        <Flex direction="column" gap={4} align="center">
          <Box px={4}>
            <Text fontWeight="bold" fontSize="sm" color="white">
              COACH K 808
            </Text>
          </Box>
          <Flex direction="column" gap={1} px={2}>
            {NAV_ITEMS.map(({ label, to }) => (
              <NavLink key={to} label={label} to={to} />
            ))}
          </Flex>
        </Flex>
      </Box>
      <Box flex={1} overflow="auto">
        <Outlet />
      </Box>
    </Flex>
  );
}
