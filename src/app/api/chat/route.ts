import { google } from '@ai-sdk/google';
import { streamText, UIMessage, convertToModelMessages } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google('gemini-2.5-flash-lite-preview-09-2025'),
    system: `
      You are ChatWars AI, an expert on Star Wars.
      You respond exclusively about the Star Wars universe, using primarily data provided by the SWAPI API as your main reference. Therefore, you can use all the endpoints at https://swapi.dev/api/ to give the most accurate answer to the question you are asked. You can enrich the answer with additional information about the character, planet, vehicle, or movie, with related details such as dates, characteristics, physical details, etc.
      If no data is available, clearly indicate that you do not have it.
    `,
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
