import { Box, Flex } from "@chakra-ui/react";
import { Fragment, ReactNode } from "react";

export default function DividedContent(props: {
  children: ReactNode[];
  type?: "divider" | "arrow" | "breadcrumbs" | "dot";
}) {
  return (
    <Flex direction="row" gap={4} alignItems="center">
      {props.children.map((child, index) => (
        <Fragment key={index}>
          {index > 0 && <Divider type={props.type} />}
          {child}
        </Fragment>
      ))}
    </Flex>
  );
}

function Divider(props: {
  type?: "divider" | "dot" | "arrow" | "breadcrumbs";
}) {
  if (props.type === "arrow")
    return (
      <Box as="span" fontSize="lg" color="gray.400">
        →
      </Box>
    );

  if (props.type === "dot")
    return (
      <Box as="span" fontSize="lg" color="gray.400">
        •
      </Box>
    );

  if (props.type === "breadcrumbs")
    return (
      <Box as="span" fontSize="lg" color="gray.400">
        /
      </Box>
    );

  return <Box h="40px" w="1px" bg="gray.300" />;
}
