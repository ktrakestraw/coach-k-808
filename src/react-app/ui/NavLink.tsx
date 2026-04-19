import { Box } from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";

interface Props {
  label: string;
  to: string;
}

export default function NavLink({ label, to }: Props) {
  return (
    <RouterNavLink
      to={to}
      style={{ textDecoration: "none", display: "flex", flexGrow: 1 }}
    >
      {({ isActive }) => (
        <Box
          p={2}
          flexGrow={1}
          w={"234px"}
          borderRadius="md"
          bg={isActive ? "whiteAlpha.200" : "transparent"}
          _hover={{ bg: "whiteAlpha.50" }}
          cursor="pointer"
          fontSize="sm"
          fontWeight={isActive ? "medium" : "normal"}
          color={isActive ? "white" : "gray.200"}
        >
          {label}
        </Box>
      )}
    </RouterNavLink>
  );
}
