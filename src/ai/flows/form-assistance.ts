// src/ai/flows/form-assistance.ts
'use server';

/**
 * @fileOverview An AI agent that provides assistance during form filling by proactively offering relevant help and clarifying potential misunderstandings.
 *
 * - formAssistance - A function that provides assistance based on user input and context.
 * - FormAssistanceInput - The input type for the formAssistance function.
 * - FormAssistanceOutput - The return type for the formAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FormAssistanceInputSchema = z.object({
  formField: z.string().describe('The specific form field the user is currently filling.'),
  fieldValue: z.string().describe('The current value entered by the user in the form field.'),
  context: z.string().optional().describe('Any additional context about the form or user.'),
});
export type FormAssistanceInput = z.infer<typeof FormAssistanceInputSchema>;

const FormAssistanceOutputSchema = z.object({
  helpText: z.string().describe('Helpful text to guide the user in filling out the form field.'),
  clarification: z.string().optional().describe('Clarification of potential misunderstandings related to the form field.'),
});
export type FormAssistanceOutput = z.infer<typeof FormAssistanceOutputSchema>;

export async function formAssistance(input: FormAssistanceInput): Promise<FormAssistanceOutput> {
  return formAssistanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'formAssistancePrompt',
  input: {schema: FormAssistanceInputSchema},
  output: {schema: FormAssistanceOutputSchema},
  prompt: `You are an AI assistant helping users fill out online forms. 

  Based on the current form field, the user's input, and any provided context, offer proactive assistance and clarify potential misunderstandings.

  Form Field: {{{formField}}}
  User Input: {{{fieldValue}}}
  Context: {{{context}}}

  Provide helpful text to guide the user and, if necessary, clarify any potential misunderstandings related to the form field.
  Be concise and helpful.
  `, // removed triple backticks
});

const formAssistanceFlow = ai.defineFlow(
  {
    name: 'formAssistanceFlow',
    inputSchema: FormAssistanceInputSchema,
    outputSchema: FormAssistanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

