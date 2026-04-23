import { IconButton as IconButtonChakra } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiEdit } from "react-icons/bi";

export default function IconButton(props: {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
}) {
  return (
    <IconButtonChakra
      aria-label={props.label}
      cursor={props.isDisabled ? "not-allowed" : undefined}
      disabled={props.isDisabled}
      color={"white"}
      bg={"teal.800"}
      _hover={{ bg: "teal.700" }}
      onClick={props.onClick}
    >
      {props.icon ?? <BiEdit />}
    </IconButtonChakra>
  );
}
