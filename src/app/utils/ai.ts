import { default as OpenAI } from 'openai'
import { zodResponseFormat } from 'openai/helpers/zod'
import type { ZodObject } from 'zod'

interface GetContentOptions<Schema extends ZodObject<any>> {
  contentSchema?: Schema
  options?: Omit<
    OpenAI.ChatCompletionCreateParams.ChatCompletionCreateParamsNonStreaming,
    'messages' | 'model'
  >
  systemMessage: string
  userMessage: string
}

export async function getContent<
  Response = string,
  Schema extends ZodObject<any> = ZodObject<any>,
>({
  contentSchema,
  options,
  systemMessage,
  userMessage,
}: GetContentOptions<Schema>): Promise<Response | undefined> {
  const client = new OpenAI({
    apiKey: process.env.AI_API_KEY,
    baseURL: process.env.AI_BASE_URL || undefined,
  })

  try {
    const response = await client.beta.chat.completions.parse({
      ...options,
      messages: [
        { content: systemMessage, role: 'system' },
        {
          content: userMessage,
          role: 'user',
        },
      ],
      model: process.env.AI_MODEL || 'gpt-4o-mini',
      n: 1,
      response_format: contentSchema
        ? zodResponseFormat(contentSchema, 'content')
        : undefined,
    })

    const responseContent = response.choices[0]?.message.parsed

    if (!responseContent) {
      return undefined
    }

    return responseContent as Response
  } catch (error) {
    console.error('AI request failed', error)
  }
}
