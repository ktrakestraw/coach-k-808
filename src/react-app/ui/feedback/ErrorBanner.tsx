import { Box } from "@chakra-ui/react";

export default function ErrorBanner(props: { message: string }) {
  return (
    <Box
      p={4}
      rounded={"lg"}
      bg="red.50"
      w="100%"
      borderWidth={"2px"}
      borderColor="red.500"
    >
      {props.message}
    </Box>
  );
}
