import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Props = {
  to?: string;
  label?: string;
  direction: "prev" | "next";
};

export default function ArrowLink(props: Props) {
  const label =
    props.direction === "prev"
      ? `← ${props.label ?? "N/A"}`
      : `${props.label ?? "N/A"} →`;

  if (!props.to)
    return (
      <Text color="gray.300" fontSize="lg">
        {label}
      </Text>
    );

  return (
    <Link to={props.to}>
      <Text color="teal.800" fontSize="lg">
        {label}
      </Text>
    </Link>
  );
}
