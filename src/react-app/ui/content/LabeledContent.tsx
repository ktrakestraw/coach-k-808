import { Flex, Text } from "@chakra-ui/react";

export default function LabeledContent({
  label,
  children,
}: {
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
        {label}
      </Text>
      {children}
    </Flex>
  );
}
