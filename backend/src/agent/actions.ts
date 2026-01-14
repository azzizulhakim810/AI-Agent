// export type AgentAction = {
//   type: "ASK_PRIMARY_QUESTIONS" | "RECOMMEND_UNIVERSITY" | "RESPOND_NORMALLY";
// };

export type AgentAction =
  | { type: "ASK_PRIMARY_QUESTIONS" }
  | { type: "RECOMMEND_UNIVERSITY" }
  | { type: "RESPOND_NORMALLY" };
