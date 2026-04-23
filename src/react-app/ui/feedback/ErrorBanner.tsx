import { Box } from "@chakra-ui/react";
import { BiError } from "react-icons/bi";

export default function ErrorBanner(props: { message: string }) {
  return (
    <Box
      p={4}
      rounded="lg"
      bg="red.50"
      w="100%"
      borderWidth="2px"
      borderColor="red.500"
      display="flex"
      gap={2}
      alignItems="center"
    >
      <BiError size={24} color="red.500" />
      {props.message}
    </Box>
  );
}
