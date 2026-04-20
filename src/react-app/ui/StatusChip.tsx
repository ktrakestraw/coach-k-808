import { Box } from "@chakra-ui/react";

type Status = "HEALTHY" | "WARNING" | "ERROR";

const STYLES = {
  HEALTHY: { borderColor: "green.400", color: "green.600", bg: "green.50" },
  WARNING: { borderColor: "orange.400", color: "orange.500", bg: "orange.50" },
  ERROR: { borderColor: "red.400", color: "red.600", bg: "red.50" },
};

export default function StatusChip({ status }: { status: Status }) {
  const { borderColor, color, bg } = STYLES[status];
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
      {status}
    </Box>
  );
}
