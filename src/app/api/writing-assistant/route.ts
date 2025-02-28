import { generateChecklist } from '../../writing-assistant/ai'
import type { Checklist } from '../../writing-assistant/ai'
import type { ScenarioId } from '../../writing-assistant/data'

interface RequestJson {
  checklist: Checklist
  scenarioId: ScenarioId
  userContent: string
}

function getRequest(request: Request): Promise<RequestJson> {
  return request.json() as Promise<RequestJson>
}

export async function POST(request: Request) {
  const {
    checklist: existingChecklist,
    scenarioId,
    userContent,
  } = await getRequest(request)
  const newChecklist = await generateChecklist(
    scenarioId,
    userContent,
    existingChecklist,
  )

  return new Response(JSON.stringify({ checklist: newChecklist }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
