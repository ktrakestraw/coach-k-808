import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Page(props: { children: ReactNode; title: string }) {
  return (
    <Flex grow={1} h="100%" w="100%" direction="column" color={"black"}>
      <Box w="100%" flexShrink={0} bg="gray.200" p={4} px={6}>
        {props.title}
      </Box>
      <Box flex={1} overflow="auto" h="auto" p={6} bg="white">
        {props.children}
      </Box>
    </Flex>
  );
}
