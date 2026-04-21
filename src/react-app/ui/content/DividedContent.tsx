import { Box, Flex } from "@chakra-ui/react";
import { Fragment, ReactNode } from "react";

export default function DividedContent(props: { children: ReactNode[] }) {
  return (
    <Flex direction="row" gap={4} alignItems={"center"}>
      {props.children.map((child, index) => (
        <Fragment key={index}>
          {index > 0 && <Box h={"40px"} w={"1px"} bg={"gray.300"} />}
          {child}
        </Fragment>
      ))}
    </Flex>
  );
}
