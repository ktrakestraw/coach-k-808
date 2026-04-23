import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function LabeledContent(props: {
  label: string;
  labelAdornment?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Flex direction="column" gap={0.5}>
      <Flex direction={"row"} alignItems={"center"} color="gray.500" gap={1}>
        <Text
          fontSize="md"
          fontWeight={"medium"}
          textTransform={"uppercase"}
          color="gray.500"
        >
          {props.label}
        </Text>
        {props.labelAdornment}
      </Flex>
      {props.children}
    </Flex>
  );
}
