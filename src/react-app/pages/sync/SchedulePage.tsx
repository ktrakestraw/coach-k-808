import { Flex, RadioCard, Text } from "@chakra-ui/react";
import { SYNCS } from "../../features/sync/mock-data";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Sync } from "../../features/sync/types";

export default function SchedulePage() {
  const { syncId } = useParams();
  const sync = SYNCS.find((s) => s.id === syncId);

  if (!sync) return null;
  return <Schedule sync={sync} />;
}

export function Schedule(props: { sync: Sync }) {
  const [value, setValue] = useState("manual");

  return (
    <RadioCard.Root
      value={value}
      onValueChange={({ value }) => value && setValue(value)}
    >
      <Flex direction="column" gap={2}>
        <RadioCard.Item
          value="manual"
          borderWidth="0"
          shadow="none"
          flexDirection="row"
          gap={2}
          alignItems="center"
          p={2}
        >
          <RadioCard.ItemHiddenInput />
          <RadioCard.ItemIndicator />
          <RadioCard.ItemText>Manual</RadioCard.ItemText>
        </RadioCard.Item>

        <Flex gap={2}>
          {["hourly", "daily", "weekly"].map((freq) => (
            <RadioCard.Item
              key={freq}
              value={freq}
              borderWidth="0"
              shadow="none"
              flexDirection="row"
              gap={2}
              alignItems="center"
              p={2}
            >
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemIndicator />
              <RadioCard.ItemText>
                <Text textTransform="capitalize">{freq}</Text>
              </RadioCard.ItemText>
            </RadioCard.Item>
          ))}
        </Flex>
      </Flex>
    </RadioCard.Root>
  );
}
