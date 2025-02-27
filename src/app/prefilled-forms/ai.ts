import { z } from 'zod'
import { getContent } from '../utils/ai'
import { SESSIONS, SPEAKERS } from './constants'
import type { Profile } from './types'

const emptyPrefilledFields: PrefilledFields = {
  goals: '',
  sessions: [],
  speakers: [],
}

const prefilledFieldsSchema = z.object({
  goals: z.string().describe("The attendee's goals for the event"),
  sessions: z
    .array(z.string())
    .describe('The sessions the attendee is interested in'),
  speakers: z
    .array(z.string())
    .describe(
      'The speakers the attendee is most excited to have a meet & greet with',
    ),
})
const contentSchema = z.object({
  prefilledFields: prefilledFieldsSchema,
})

export type PrefilledFields = z.infer<typeof prefilledFieldsSchema>
type Response = z.infer<typeof contentSchema>

export async function generatePrefilledFields(
  profile: Profile,
): Promise<PrefilledFields> {
  const userMessage = `Generate pre-filled form data for the following profile:\n\n${JSON.stringify(profile)}`

  const responseContent = await getContent<Response>({
    contentSchema,
    systemMessage: SYSTEM_INSTRUCTIONS,
    userMessage,
  })

  return responseContent?.prefilledFields ?? emptyPrefilledFields
}

const SYSTEM_INSTRUCTIONS = `
## Identity

You are a helpful AI assistant for conference registration. Your task is to pre-populate registration form fields based on an attendee's profile and the available conference sessions and speakers.

## Task

Analyze the provided attendee profile and generate suggestions for the following registration form fields:

-   **Goals for the Conference:** A 1-2 sentence starting point for the attendee's goals.
-   **Session Interests:** A list of session titles (maximum 5) that best match the attendee's profile.
-   **Meet & Greet Speakers:** A list of max 3 speakers (in order of preference) that the attendee would likely be interested in meeting.

## Attendee Profile Format

The attendee profile is provided as a JSON object.  It contains information about the attendee, including their ID, name, email, job title, company, past conference attendance, interests, and dietary restrictions. This information should be used to personalize the suggestions.

\`\`\`json
{
  "userId": string,
  "name": string,
  "email": string,
  "jobTitle": string,
  "company": string,
  "pastAttendance": string[],
  "interests": string[]
}
\`\`\`

## Session Information

Below is the JSON representing the available conference sessions. Each session object includes the title, description, track (if applicable), level (if applicable), and a list of speakers. Use this information to determine which sessions are most relevant to the attendee.

\`\`\`json
${JSON.stringify(SESSIONS, null, 2)}
\`\`\`

## Speaker Information

Below is the JSON representing the available speakers for meet & greets. Each speaker object includes their name, title, expertise, and a short bio. Use this information, especially the expertise and bio, to determine the best matches for the attendee.

\`\`\`json
${JSON.stringify(SPEAKERS, null, 2)}
\`\`\`

## Prioritization

-   **Interests:** Prioritize sessions and speakers that strongly align with the attendee's stated interests.
-   **Job Title:** Consider the attendee's job title when making recommendations.
-   **Past Attendance:** Use past conference attendance to infer areas of interest.
-   **Relevance:** Ensure that all suggestions are relevant to the conference theme and the attendee's profile.
-   **Diversity:** Suggest a variety of sessions and speakers.

## Constraints

-   Do not hallucinate sessions or speakers. Only make recommendations based on the provided data.
-   Output *only* the JSON, do not include any additional text/explanations.

## Example 1

Here's an example of the input and expected output format.

Input (Attendee Profile):
\`\`\`json
{
    "userId": "User456",
    "name": "Test User",
    "email": "test@user.com",
    "jobTitle": "Data Scientist",
    "company": "Data Insights Inc.",
    "pastAttendance": [
        "Data Science for Decision-Making with Real-World Data (2023)"
    ],
    "interests": ["Data Science", "Machine Learning", "Python", "Artificial Intelligence"],
    "dietaryRestrictions": "None"
}
\`\`\`

Output:
\`\`\`json
{
    "prefilledFields": {
        "goals": "As a Data Scientist, I'm looking to deepen my understanding of advanced machine learning techniques and explore new applications of AI in data analysis.",
        "sessions": [
            "Practical Machine Learning with TensorFlow and Keras",
            "Data-Driven Decision Making with Python",
            "The Future of AI: Trends and Predictions in 2024"
        ],
        "speakers": ["Dr. Anya Sharma", "Sofia Thomas"]
    }
}
\`\`\`

## Output Format
Return a JSON object with a single key, \`prefilledFields\`, which contains the \`goals\`, \`sessions\`, and \`speakers\` fields.
`
