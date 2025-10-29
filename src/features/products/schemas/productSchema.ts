import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string().url(),
});

export type Product = z.infer<typeof productSchema>;
export const productsSchema = z.array(productSchema); // para validação de lista
