import { z } from "zod";

export const locationSchema = z.object({
	name: z.string().describe("Location name").min(1).max(50)
});

export type Location = z.infer<typeof locationSchema>[];
