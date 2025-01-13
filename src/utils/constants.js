export const API_ENDPOINTS = {
  DEEPSEEK: 'https://api.deepseek.com/v1/chat/completions'
};

export const PROMPTS = {
  ANALYZE: (cv, job) => `
    Analyze this CV and Job Description:
    CV: ${cv}
    Job Description: ${job}
    Provide: 1. A suitability score (0-100) 2. A concise analysis (max 150 words, second person)
    Format response as JSON: { "score": number, "justification": string }`,
  
  ACTIONS: (cv, job) => `
    Based on this CV and Job Description:
    CV: ${cv}
    Job Description: ${job}
    Provide: 1. Specific areas to improve 2. Actionable steps (max 150 words)
    Format as a list without bullet points`,
  
  COVER_LETTER: (cv, job, limit) => `
    Write a professional cover letter based on:
    CV: ${cv}
    Job Description: ${job}
    Requirements: 1. Professional tone 2. Highlight relevant skills
    3. Under ${limit} words 4. Address hiring manager
    5. Strong opening/closing`,
  
  OPTIMIZE: (cv, job) => `
    Optimize this CV for the job description:
    Original CV: ${cv}
    Job Description: ${job}
    Requirements: 1. Keep factual info 2. No new info
    3. Maintain format 4. Reorganize for job requirements
    5. Highlight relevant skills 6. Keep original length`
};

export const SECTIONS = {
  INPUT: 'input',
  ANALYSIS: 'analysis',
  ACTIONABLE: 'actionableItems',
  OPTIMIZE: 'optimizeCV',
  COVER: 'coverLetter'
};
