import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import NavLink from "../../ui/navigation/NavLink";

const NAV_ITEMS = [
  { label: "Syncs", to: "/syncs" },
  { label: "Agents", to: "/agents" },
];

export default function Nav() {
  return (
    <Flex grow={1} h="100%" w="100%">
      <Box
        as="nav"
        w="250px"
        flexShrink={0}
        bgGradient="to-b"
        gradientFrom="sidebar.top"
        gradientTo="sidebar.bottom"
        color="white"
        py={4}
      >
        <Flex direction="column" gap={4} align="center">
          <Link to="/">
            <Box px={4}>
              <Text fontWeight="bold" fontSize="sm" color="white">
                @CoachK808
              </Text>
            </Box>
          </Link>
          <Flex direction="column" gap={0.5} px={2}>
            {NAV_ITEMS.map(({ label, to }) => (
              <NavLink key={to} label={label} to={to} />
            ))}
          </Flex>
        </Flex>
      </Box>
      <Box flex={1} h={"100%"} w={"100%"} overflow="auto" bg={"white"}>
        <Outlet />
      </Box>
    </Flex>
  );
}
