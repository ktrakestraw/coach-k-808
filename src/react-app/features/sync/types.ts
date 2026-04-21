export type Sync = {
  id: string;
  status: "HEALTHY" | "WARNING" | "ERROR";
  model: string;
  destination: string;
  lastRun: string;
  createdAt: string;
  runs: {
    status: "HEALTHY" | "WARNING" | "ERROR";
    started: string;
    duration: number;
    rows: number;
  }[];
};
