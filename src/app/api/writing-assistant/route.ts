import { ScenarioId } from '../..//writing-assistant/data'
import { generateChecklist } from '../../writing-assistant/ai'

interface RequestJson {
  scenarioId: ScenarioId
  userContent: string
}

function getRequest(request: Request): Promise<RequestJson> {
  return request.json()
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
