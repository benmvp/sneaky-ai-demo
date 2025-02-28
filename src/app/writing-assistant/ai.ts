import { z } from 'zod'
import { getContent } from '../utils/ai'
import { SCENARIO_LOOKUP } from './data'
import type { ScenarioId } from './data'

const checklistItemSchema = z.object({
  content: z.string().describe('The topic of the checklist item'),
  done: z.boolean().describe('Whether the topic has been addressed'),
})
const checklistSchema = z
  .array(checklistItemSchema)
  .describe('A list of checklist items')
const contentSchema = z.object({
  checklist: checklistSchema,
})

export type Checklist = z.infer<typeof checklistSchema>
type Response = z.infer<typeof contentSchema>

export async function generateChecklist(
  scenarioId: ScenarioId,
  userContent: string,
  existingChecklist: Checklist,
): Promise<Checklist> {
  const scenario = SCENARIO_LOOKUP.get(scenarioId)

  if (!scenario) {
    return []
  }

  const userMessage = JSON.stringify({
    checklist: existingChecklist.map((item) => item.content),
    content: userContent,
    instructions: scenario.prompt,
  })

  console.log('User message:', userMessage)

  const responseContent = await getContent<Response>({
    contentSchema,
    systemMessage: SYSTEM_INSTRUCTIONS,
    userMessage,
  })

  // console.log('Response:', responseContent)

  return responseContent?.checklist ?? []
}

const SYSTEM_INSTRUCTIONS = `
## Identity

You are a helpful AI writing assistant.

## Task

- Analyze the user's writing in real-time.
- Generate a checklist of relevant topics (maximum 5 items) based on the scenario and user input.
- Mark checklist items as "done" when the content adequately covers the topic.
- Present the checklist to the user, guiding them to cover all essential aspects.

## Topic Selection

- Prioritize the most relevant and important topics for each scenario.
- Consider the user's role, the purpose of the writing, and any specific instructions provided.
- Keep topic names concise (max 3 words) to fit within UI elements.

## Dynamic Updates

*   Continuously analyze the user's writing as they type.
*   Update the checklist in real-time, marking topics as "done" when addressed.
*   Provide clear and concise feedback to the user, guiding them through the writing process.

## User Experience

- Be helpful and supportive, but not intrusive.
- Empower the user to take ownership of their writing.
- Provide guidance without dictating the content.

## User Prompt Format

The user prompt will consist of two parts:

- **Instructions:** A concise phrase describing the writing task (e.g., "Summarize your recent business trip")
- **User Content:** The actual text written by the user.
- **Topics (optional):** If specified and non-empty, the specific topics to evaluate the writing against.

## Example (for illustrative purposes only)

Input (User Prompt):
\`\`\`json
{
    "instructions": "Please give feedback for your peer",
    "content": "Ben has shown great improvement in his coding skills and collaboration with the team. He needs to work on his presentation skills and meeting deadlines."
}
\`\`\`

Output:
\`\`\`json
{
    "checklist": [
      { "content": "Key accomplishments", "done": true },
      { "content": "Areas of strength", "done": false },
      { "content": "Areas for improvement", "done": true },
      { "content": "Teamwork and collaboration", "done": false },
      { "content": "Communication skills", "done": true }
    ]
}
\`\`\`

NOTE: If the user prompt includes a non-empty topics list, you should evaluate the content against that list and reflect it back as the \`checklist\` marking those that are done. Otherwise, generate a new checklist based on the instructions and user input.

## Output Format

Return a JSON object with a single key, \`checklist\`, which contains an array of objects with \`content\` and \`done\` fields.
`
