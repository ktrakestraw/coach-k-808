export type Agent = {
  id: string;
  status: "ACTIVE" | "DISABLED" | "INCOMPLETE" | "ERROR";
  audience: Audience;
  criteria: {
    successMetric: string;
  };
  createdAt: string;
  messages: Message[];
};

export type Audience = {
  id: string;
  model: string;
  description: string;
  fields: Record<string, string>;
  size: number;
  destinations: string[];
  lastSynced: string;
};

export type Message = {
  id: string;
  type: "Push" | "Email" | "SMS";
  frequency: "whenever" | "hourly" | "daily" | "weekly";
  strategies: Strategy[];
};

export type Strategy = {
  id: string;
  name: string;
  tags: string[];
  prompt: string;
  percentage: number;
  success: number;
  lastCheckpoint: string;
};
