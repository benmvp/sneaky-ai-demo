import { generateChecklist } from '../../writing-assistant/ai'
import type { ScenarioId } from '../../writing-assistant/data'

interface RequestJson {
  scenarioId: ScenarioId
  userContent: string
}

function getRequest(request: Request): Promise<RequestJson> {
  return request.json() as Promise<RequestJson>
}

export async function POST(request: Request) {
  const { scenarioId, userContent } = await getRequest(request)
  const checklist = await generateChecklist(scenarioId, userContent)

  return new Response(JSON.stringify({ checklist }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
