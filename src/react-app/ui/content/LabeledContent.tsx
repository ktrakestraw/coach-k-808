import { Flex, Text } from "@chakra-ui/react";

export default function LabeledContent(props: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Flex direction="column" gap={0.5}>
      <Text
        fontSize="md"
        fontWeight={"medium"}
        textTransform={"uppercase"}
        color="gray.500"
      >
        {props.label}
      </Text>
      {props.children}
    </Flex>
  );
}
