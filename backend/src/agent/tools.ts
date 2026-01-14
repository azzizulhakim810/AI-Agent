export const askPrimaryQuestions = async () => {
  return `
Before I can guide you properly, I need some basic information:

1. Your highest level of education
2. Field you want to study
3. Target countries
4. Approximate yearly budget
5. Any entrance exams taken (IELTS, TOEFL, GRE, etc.)

Please answer these one by one.
`;
};

export const recommendUniversities = async () => {
  return `
Based on your preferences, here are some universities that could be a good match.
(This is a placeholder — real matching logic comes later.)
`;
};
