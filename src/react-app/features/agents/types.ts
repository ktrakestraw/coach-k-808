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
  strategies: {
    id: string;
    name: string;
    percentage: number;
    success: number;
    lastCheckpoint: string;
  }[];
};
