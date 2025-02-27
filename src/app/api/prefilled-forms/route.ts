import { generatePrefilledFields } from '@/app/prefilled-forms/ai'
import type { Profile } from '@/app/prefilled-forms/types'

interface RequestJson {
  profile: Profile
}

function getRequest(request: Request): Promise<RequestJson> {
  return request.json() as Promise<RequestJson>
}

export async function POST(request: Request) {
  const { profile } = await getRequest(request)
  const prefilledFields = await generatePrefilledFields(profile)

  return new Response(JSON.stringify({ prefilledFields }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
