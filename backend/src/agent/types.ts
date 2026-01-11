export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type ToolResult = {
  name: string;
  output: string;
};

export type AgentContext = {
  message: Message[];
  hasPrimaryInfo: boolean;
};
