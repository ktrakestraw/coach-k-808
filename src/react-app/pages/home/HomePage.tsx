import { Flex, Text } from "@chakra-ui/react";
import PageContent from "../../ui/content/PageContent";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

export default function HomePage() {
  return (
    <PageContent title="Home">
      <Flex direction="column" gap={8}>
        <Flex direction="column" gap={2}>
          <Heading>What started this?</Heading>
          <Body>
            I was somewhat rooting around the Hightouch documentation, and
            eventually wanted to mess around in code a bit. Initially I was
            looking to mess with Chakra UI and especially React Flow, as I
            hadn't used those before, though ultimately I ended up taking things
            on a more directed path.
          </Body>
        </Flex>

        <Flex direction="column" gap={2}>
          <Heading>
            1. Mimicking the Syncs page to getting a feel for the design
            language
          </Heading>
          <Body>
            The first thing I did was essentially rip off the Syncs page, based
            on screenshots in the{" "}
            <Link to="https://hightouch.com/docs/syncs/overview">
              Syncs overview
            </Link>
            . I wanted to establish a visual pattern and set up some reusable DS
            components before taking a swing at Agents.
          </Body>
        </Flex>

        <Flex direction="column" gap={2}>
          <Heading>2. Taking a stab at a new page</Heading>
          <Body>
            The{" "}
            <Link to="https://hightouch.com/docs/ai-decisioning/overview">
              AI Decisioning overview
            </Link>{" "}
            docs describe Agents at a high level, but without screenshots or
            detailed interaction flows. I took a look, and decided to take a
            pass at what the feature might look like. It's a still very much a
            prototype (mock data, no editing, and limited scope), but it's one
            that I think does enough of a job to show the two main things I was
            going for:
          </Body>
          <Body>
            - UX should be consistent throughout. New surface area should feel
            continuous with pre-eixisting features, where it diverges it should
            be for a clear reason.
          </Body>
          <Body>
            - Consistent level of detail at each layer. Higher level details
            should be available at a glance, with the ability to drill down
            deeper.
          </Body>
        </Flex>

        <Flex direction="column" gap={2}>
          <Heading>AI Disclosure</Heading>
          <Body>
            In general, I try to disclose how AI was used for in anything that's
            being reviewed. The largest uses were for generating mock data, as
            well as setting up the theme colors based on colors scrapped off the
            Hightouch website. Outside of that I used it to set up a lot of
            boilerplate, and extend things where it was simple enough.
          </Body>
          <Body>
            There's a little bit of sloppy code here and there, but ultimately
            it's that way because its a barely-functional prototype.
          </Body>
        </Flex>
      </Flex>
    </PageContent>
  );
}

function Heading(props: { children: ReactNode }) {
  return (
    <Text fontSize="lg" fontWeight="semibold">
      {props.children}
    </Text>
  );
}

function Body(props: { children: ReactNode }) {
  return (
    <Text color="gray.700" lineHeight="tall">
      {props.children}
    </Text>
  );
}
