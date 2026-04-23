import { Box } from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";

export default function NavLink(props: { label: string; to: string }) {
  return (
    <RouterNavLink
      to={props.to}
      style={{ textDecoration: "none", display: "flex", flexGrow: 1 }}
    >
      {({ isActive }) => (
        <Box
          py={3}
          px={4}
          flexGrow={1}
          w="234px"
          borderRadius="md"
          bg={isActive ? "whiteAlpha.200" : "transparent"}
          _hover={{ bg: "whiteAlpha.50" }}
          cursor="pointer"
          fontSize="sm"
          fontWeight={isActive ? "medium" : "normal"}
          color={isActive ? "white" : "gray.200"}
        >
          {props.label}
        </Box>
      )}
    </RouterNavLink>
  );
}
