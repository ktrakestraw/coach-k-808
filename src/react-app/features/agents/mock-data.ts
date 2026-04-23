import { Agent } from "./types";

export const AGENTS: Agent[] = [
  {
    id: "93720",
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
    messages: [
      {
        id: "msg-001",
        type: "Email",
        frequency: "weekly",
        strategies: [
          {
            id: "str-001",
            name: "Welcome discount",
            tags: ["discount", "onboarding"],
            prompt: "You're in! Here's 10% off your first order.",
            percentage: 25,
            success: 8.2,
            lastCheckpoint: "12/13/22 at 3:15 PM",
          },
          {
            id: "str-004",
            name: "Bundle offer",
            tags: ["bundle", "value"],
            prompt: "Save more when you buy together — see our top bundles.",
            percentage: 20,
            success: 7.9,
            lastCheckpoint: "12/13/22 at 3:15 PM",
          },
          {
            id: "str-005",
            name: "Control",
            tags: ["control"],
            prompt: "",
            percentage: 15,
            success: 2.1,
            lastCheckpoint: "12/13/22 at 3:15 PM",
          },
        ],
      },
      {
        id: "msg-002",
        type: "Push",
        frequency: "daily",
        strategies: [
          {
            id: "str-002",
            name: "Free shipping offer",
            tags: ["shipping", "incentive"],
            prompt: "Free shipping on your next order — today only.",
            percentage: 20,
            success: 5.7,
            lastCheckpoint: "12/13/22 at 3:15 PM",
          },
        ],
      },
      {
        id: "msg-003",
        type: "SMS",
        frequency: "weekly",
        strategies: [
          {
            id: "str-003",
            name: "Limited time deal",
            tags: ["urgency", "discount"],
            prompt: "Flash sale: 20% off ends tonight. Shop now.",
            percentage: 20,
            success: 11.4,
            lastCheckpoint: "12/13/22 at 3:15 PM",
          },
        ],
      },
    ],
  },
  {
    id: "34001",
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
    messages: [
      {
        id: "msg-004",
        type: "Email",
        frequency: "weekly",
        strategies: [
          {
            id: "str-006",
            name: "We miss you",
            tags: ["re-engagement", "emotional"],
            prompt:
              "It's been a while — here's what's new since your last visit.",
            percentage: 40,
            success: 9.3,
            lastCheckpoint: "12/13/22 at 11:01 AM",
          },
          {
            id: "str-008",
            name: "Control",
            tags: ["control"],
            prompt: "",
            percentage: 25,
            success: 1.8,
            lastCheckpoint: "12/13/22 at 11:01 AM",
          },
        ],
      },
      {
        id: "msg-005",
        type: "SMS",
        frequency: "weekly",
        strategies: [
          {
            id: "str-007",
            name: "Re-engage promo",
            tags: ["re-engagement", "discount"],
            prompt:
              "We've missed you! Come back and get 15% off your next purchase.",
            percentage: 35,
            success: 12.1,
            lastCheckpoint: "12/13/22 at 11:01 AM",
          },
        ],
      },
    ],
  },
  {
    id: "19596",
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
    messages: [
      {
        id: "msg-006",
        type: "Email",
        frequency: "weekly",
        strategies: [
          {
            id: "str-009",
            name: "VIP early access",
            tags: ["vip", "exclusivity"],
            prompt:
              "As one of our top customers, you get first access to our new collection.",
            percentage: 33,
            success: 6.4,
            lastCheckpoint: "12/12/22 at 10:19 AM",
          },
        ],
      },
      {
        id: "msg-007",
        type: "Push",
        frequency: "daily",
        strategies: [
          {
            id: "str-010",
            name: "Loyalty reward",
            tags: ["loyalty", "reward"],
            prompt: "You've earned a reward. Tap to redeem before it expires.",
            percentage: 33,
            success: 4.9,
            lastCheckpoint: "12/12/22 at 10:19 AM",
          },
        ],
      },
      {
        id: "msg-008",
        type: "SMS",
        frequency: "weekly",
        strategies: [
          {
            id: "str-011",
            name: "Exclusive invite",
            tags: ["vip", "event"],
            prompt: "You're invited to our exclusive member event. RSVP now.",
            percentage: 34,
            success: 3.2,
            lastCheckpoint: "12/12/22 at 10:19 AM",
          },
        ],
      },
    ],
  },
];
