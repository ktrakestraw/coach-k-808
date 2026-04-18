import { Box } from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";

interface Props {
  label: string;
  to: string;
}

export default function NavLink({ label, to }: Props) {
  return (
    <RouterNavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Box
          px={2}
          py={2}
          borderRadius="md"
          bg={isActive ? "whiteAlpha.200" : "transparent"}
          _hover={{ bg: "whiteAlpha.100" }}
          cursor="pointer"
          fontSize="sm"
          fontWeight="medium"
          color={isActive ? "yellow" : "white"}
        >
          {label}
        </Box>
      )}
    </RouterNavLink>
  );
}
