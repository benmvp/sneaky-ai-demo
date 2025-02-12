import { default as OpenAI } from 'openai'
import { zodResponseFormat } from 'openai/helpers/zod'
import type { ZodObject } from 'zod'

interface GetContentOptions<Schema extends ZodObject<any>> {
  systemMessage: string
  userMessage: string
  options?: Omit<
    OpenAI.ChatCompletionCreateParams.ChatCompletionCreateParamsNonStreaming,
    'messages' | 'model'
  >
  contentSchema?: Schema
}

export async function getContent<
  Response = string,
  Schema extends ZodObject<any> = ZodObject<any>,
>({
  systemMessage,
  userMessage,
  options,
  contentSchema: contentSchema,
}: GetContentOptions<Schema>): Promise<Response | undefined> {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })

  try {
    const response = await client.chat.completions.create({
      ...options,
      messages: [
        { content: systemMessage, role: 'system' },
        {
          content: userMessage,
          role: 'user',
        },
      ],
      model: 'gpt-4o-mini',
      n: 1,
      response_format: contentSchema
        ? zodResponseFormat(contentSchema, 'content')
        : undefined,
    })

    const responseContent = response.choices[0]?.message.content

    if (!responseContent) {
      return undefined
    }

    return (
      contentSchema ? JSON.parse(responseContent) : responseContent
    ) as Response
  } catch (error) {
    console.error('AI request failed', error)
  }
}
