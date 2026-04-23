export type Agent = {
  id: string;
  status: "ACTIVE" | "DISABLED" | "INCOMPLETE" | "ERROR";
  audience: {
    id: string;
    model: string;
    description: string;
  };
  criteria: {
    successMetric: string;
  };
  createdAt: string;
  messages: Message[];
};

type Message = {
  id: string;
  type: "Push" | "Email" | "SMS";
  frequency: "whenever" | "hourly" | "daily" | "weekly";
  strategies: Strategy[];
};

type Strategy = {
  id: string;
  name: string;
  tags: string[];
  prompt: string;
  percentage: number;
  success: number;
  lastCheckpoint: string;
};
