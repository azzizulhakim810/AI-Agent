export const primaryQuestionsTool = async () => {
  return `
Before recommending universities, I need some basic information.

1. What is your current level of education?
2. What field do you want to study?
3. What is your approximate yearly budget (USD)?
4. Which countries are you interested in?
5. Do you need scholarships?

Please answer one by one.
`;
};

export const universityMatcherTool = async () => {
  return `
Based on your preferences, here are some universities that could be a good match.
(This is a placeholder — real matching logic comes later.)
`;
};
