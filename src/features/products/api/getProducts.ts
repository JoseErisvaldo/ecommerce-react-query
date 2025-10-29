import { api } from "../../../lib/api";
import { productsSchema } from "../schemas/productSchema";

export async function getProducts() {
  const { data } = await api.get("/products");
  return productsSchema.parse(data);
}
