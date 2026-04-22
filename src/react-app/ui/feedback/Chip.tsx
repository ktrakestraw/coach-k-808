import { Box } from "@chakra-ui/react";

type Status =
  | "HEALTHY"
  | "WARNING"
  | "ERROR"
  | "DEFAULT"
  | "INCOMPLETE"
  | "DISABLED"
  | "ACTIVE";

const STYLES = {
  HEALTHY: { borderColor: "green.400", color: "green.600", bg: "green.50" },
  ACTIVE: { borderColor: "green.400", color: "green.600", bg: "green.50" },
  WARNING: { borderColor: "orange.400", color: "orange.500", bg: "orange.50" },
  ERROR: { borderColor: "red.400", color: "red.600", bg: "red.50" },
  DEFAULT: { borderColor: "gray.400", color: "blue.400", bg: "transparent" },
  INCOMPLETE: {
    borderColor: "yellow.400",
    color: "yellow.500",
    bg: "transparent",
  },
  DISABLED: { borderColor: "gray.300", color: "gray.500", bg: "gray.50" },
};

export default function Chip(props: { status?: Status; text: string }) {
  const { borderColor, color, bg } = STYLES[props.status ?? "DEFAULT"];
  return (
    <Box
      display="inline-block"
      px={2}
      py={0.5}
      bg={bg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="sm"
      color={color}
      fontSize="xs"
      fontWeight="semibold"
    >
      {props.text}
    </Box>
  );
}
