import { z } from "zod";

export const Dev = z.object({
  _id: z.string(),
  handle: z.string().max(20),
  fullname: z.string().max(50),
  bio: z.string().max(500), // TODO: escape bad code
});
