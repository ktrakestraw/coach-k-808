import { Button as ButtonChakra } from "@chakra-ui/react";

export default function Button(props: {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
}) {
  return (
    <ButtonChakra
      cursor={props.isDisabled ? "not-allowed" : undefined}
      disabled={props.isDisabled}
      color={"white"}
      bg={"teal.800"}
      _hover={{ bg: "teal.700" }}
      onClick={props.onClick}
    >
      {props.label}
    </ButtonChakra>
  );
}
