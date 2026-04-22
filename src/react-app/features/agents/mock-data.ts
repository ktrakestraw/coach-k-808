import { Agent } from "./types";

export const AGENTS: Agent[] = [
  {
    id: "48271",
    status: "ACTIVE",
    audience: {
      id: "aud-001",
      model: "All Customers",
      description: "Users who signed up in the last 90 days",
    },
    criteria: {
      successMetric: "purchase",
    },
    createdAt: "12/13/22",
    strategies: [
      {
        id: "str-001",
        name: "Welcome discount — email",
        percentage: 25,
        success: 8.2,
        lastCheckpoint: "12/13/22 at 3:15 PM",
      },
      {
        id: "str-002",
        name: "Free shipping offer — push",
        percentage: 20,
        success: 5.7,
        lastCheckpoint: "12/13/22 at 3:15 PM",
      },
      {
        id: "str-003",
        name: "Limited time deal — SMS",
        percentage: 20,
        success: 11.4,
        lastCheckpoint: "12/13/22 at 3:15 PM",
      },
      {
        id: "str-004",
        name: "Bundle offer — email",
        percentage: 20,
        success: 7.9,
        lastCheckpoint: "12/13/22 at 3:15 PM",
      },
      {
        id: "str-005",
        name: "Control — no message",
        percentage: 15,
        success: 2.1,
        lastCheckpoint: "12/13/22 at 3:15 PM",
      },
    ],
  },
  {
    id: "93615",
    status: "ACTIVE",
    audience: {
      id: "aud-002",
      model: "Lapsing Users",
      description: "Users with no activity in the past 30 days",
    },
    criteria: {
      successMetric: "app_open",
    },
    createdAt: "12/13/22",
    strategies: [
      {
        id: "str-006",
        name: "We miss you — email",
        percentage: 40,
        success: 9.3,
        lastCheckpoint: "12/13/22 at 11:01 AM",
      },
      {
        id: "str-007",
        name: "Re-engage promo — SMS",
        percentage: 35,
        success: 12.1,
        lastCheckpoint: "12/13/22 at 11:01 AM",
      },
      {
        id: "str-008",
        name: "Control — no message",
        percentage: 25,
        success: 1.8,
        lastCheckpoint: "12/13/22 at 11:01 AM",
      },
    ],
  },
  {
    id: "57402",
    status: "ERROR",
    audience: {
      id: "aud-003",
      model: "High-Value Customers",
      description: "Users with lifetime value above $500",
    },
    criteria: {
      successMetric: "signup",
    },
    createdAt: "12/13/22",
    strategies: [
      {
        id: "str-009",
        name: "VIP early access — email",
        percentage: 33,
        success: 6.4,
        lastCheckpoint: "12/12/22 at 10:19 AM",
      },
      {
        id: "str-010",
        name: "Loyalty reward — push",
        percentage: 33,
        success: 4.9,
        lastCheckpoint: "12/12/22 at 10:19 AM",
      },
      {
        id: "str-011",
        name: "Exclusive invite — SMS",
        percentage: 34,
        success: 3.2,
        lastCheckpoint: "12/12/22 at 10:19 AM",
      },
    ],
  },
  {
    id: "82039",
    status: "ACTIVE",
    audience: {
      id: "aud-004",
      model: "Cart Abandoners",
      description:
        "Users who added items to cart but did not purchase within 24 hours",
    },
    criteria: {
      successMetric: "purchase",
    },
    createdAt: "12/12/22",
    strategies: [
      {
        id: "str-012",
        name: "Abandoned cart reminder — email",
        percentage: 30,
        success: 14.7,
        lastCheckpoint: "12/12/22 at 4:52 PM",
      },
      {
        id: "str-013",
        name: "Urgency push — push",
        percentage: 25,
        success: 10.3,
        lastCheckpoint: "12/12/22 at 4:52 PM",
      },
      {
        id: "str-014",
        name: "10% off coupon — SMS",
        percentage: 25,
        success: 13.1,
        lastCheckpoint: "12/12/22 at 4:52 PM",
      },
      {
        id: "str-015",
        name: "Control — no message",
        percentage: 20,
        success: 3.4,
        lastCheckpoint: "12/12/22 at 4:52 PM",
      },
    ],
  },
  {
    id: "34718",
    status: "INCOMPLETE",
    audience: {
      id: "aud-005",
      model: "Audience Test",
      description: "Experimental segment for A/B audience validation",
    },
    criteria: {
      successMetric: "engagement",
    },
    createdAt: "12/12/22",
    strategies: [
      {
        id: "str-016",
        name: "Variant A — email",
        percentage: 50,
        success: 0,
        lastCheckpoint: "12/12/22 at 1:28 PM",
      },
      {
        id: "str-017",
        name: "Variant B — push",
        percentage: 50,
        success: 0,
        lastCheckpoint: "12/12/22 at 1:28 PM",
      },
    ],
  },
  {
    id: "61853",
    status: "DISABLED",
    audience: {
      id: "aud-006",
      model: "Event Attendees",
      description:
        "Users who registered for a product event in the last 60 days",
    },
    criteria: {
      successMetric: "signup",
    },
    createdAt: "09/04/22",
    strategies: [
      {
        id: "str-018",
        name: "Post-event follow-up — email",
        percentage: 50,
        success: 7.6,
        lastCheckpoint: "09/04/22 at 7:49 PM",
      },
      {
        id: "str-019",
        name: "Upsell offer — SMS",
        percentage: 30,
        success: 5.2,
        lastCheckpoint: "09/04/22 at 7:49 PM",
      },
      {
        id: "str-020",
        name: "Control — no message",
        percentage: 20,
        success: 1.4,
        lastCheckpoint: "09/04/22 at 7:49 PM",
      },
    ],
  },
  {
    id: "29547",
    status: "ACTIVE",
    audience: {
      id: "aud-007",
      model: "New Signups",
      description: "Users who created an account in the last 7 days",
    },
    criteria: {
      successMetric: "purchase",
    },
    createdAt: "09/04/22",
    strategies: [
      {
        id: "str-021",
        name: "Onboarding tips — email",
        percentage: 20,
        success: 4.3,
        lastCheckpoint: "12/08/22 at 1:04 PM",
      },
      {
        id: "str-022",
        name: "First purchase nudge — push",
        percentage: 20,
        success: 6.8,
        lastCheckpoint: "12/08/22 at 1:04 PM",
      },
      {
        id: "str-023",
        name: "Getting started guide — email",
        percentage: 20,
        success: 5.1,
        lastCheckpoint: "12/08/22 at 1:04 PM",
      },
      {
        id: "str-024",
        name: "Referral bonus — SMS",
        percentage: 20,
        success: 9.4,
        lastCheckpoint: "12/08/22 at 1:04 PM",
      },
      {
        id: "str-025",
        name: "Control — no message",
        percentage: 20,
        success: 1.6,
        lastCheckpoint: "12/08/22 at 1:04 PM",
      },
    ],
  },
];
