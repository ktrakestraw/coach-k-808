import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function PageContent(props: {
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <Flex grow={1} h="100%" w="100%" direction="column" color="black">
      <Box
        w="100%"
        flexShrink={0}
        bg="gray.200"
        p={4}
        px={6}
        borderBottom="1px"
        borderColor="gray.200"
      >
        {props.title}
      </Box>
      <Box flex={1} overflow="auto" h="auto" p={6} bg="white">
        {props.children}
      </Box>
    </Flex>
  );
}
