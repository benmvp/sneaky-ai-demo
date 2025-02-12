import { z } from 'zod'
import { type ScenarioId, SCENARIO_LOOKUP } from './data'
import { getContent } from '../utils/ai'

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
): Promise<Checklist> {
  const scenario = SCENARIO_LOOKUP.get(scenarioId)

  if (!scenario) {
    return []
  }

  const userMessage = `${scenario.prompt}\n---\n${userContent}`
  // console.log('User message:', userMessage)

  const responseContent = await getContent<Response>({
    systemMessage: SYSTEM_INSTRUCTIONS,
    userMessage,
    contentSchema: contentSchema,
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

- **Instruction:** A concise phrase describing the writing task (e.g., "Summarize your recent business trip")
- **User Content:** The actual text written by the user.

## Examples (for illustrative purposes only)

- **Peer Review:** Key accomplishments, areas of strength, areas for improvement, teamwork and collaboration, communication skills.
`
